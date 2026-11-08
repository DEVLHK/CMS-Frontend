<script setup lang="tsx">
import { computed, h, ref, watch } from 'vue';
import type { Component } from 'vue';
import { NButton, NTag, NTooltip } from 'naive-ui';
import type { UploadFileInfo } from 'naive-ui';
import dayjs from 'dayjs';
import { useNDataTable } from 'pro-naive-ui';
import type { ProDataTableColumns } from 'pro-naive-ui';
import IconIcRoundDelete from '~icons/ic/round-delete';
import IconIcRoundDownload from '~icons/ic/round-download';
import IconIcRoundEdit from '~icons/ic/round-edit';
import IconIcRoundVisibility from '~icons/ic/round-visibility';
import {
  fetchAddInvoice,
  fetchDeleteInvoice,
  fetchDownloadInvoice,
  fetchGetInvoiceList,
  fetchPreviewInvoice,
  fetchUpdateInvoice
} from '@/service/api';
import { useNaiveForm, useFormRules } from '@/hooks/common/form';
import { $t } from '@/locales';
import { blobToObjectUrl, extFromBlobType, fileBaseName, fmtMoney, isImageFile, saveBlobFile } from './shared';

defineOptions({
  name: 'ContractInvoiceModal'
});

interface Props {
  /** the contract row the details belong to */
  row: Api.ContractManage.ContractRecord | null;
}

const props = defineProps<Props>();

const show = defineModel<boolean>('show', {
  default: false
});

/** fullscreen toggle, defaults to windowed */
const fullscreen = ref(false);

const modalStyle = computed(() =>
  fullscreen.value
    ? { width: '100vw', height: '100vh', maxWidth: '100vw', borderRadius: '0' }
    : { width: '1200px', maxWidth: '96vw' }
);

const contentStyle = computed(() =>
  fullscreen.value ? 'max-height: calc(100vh - 180px); overflow: auto' : 'max-height: 72vh; overflow: auto'
);

const modalTitle = computed(() => $t('page.contractManage.basicInfo.invoiceDetail'));

/** contract basic info shown on top, from the list response header */
const header = ref<Api.ContractManage.ContractHeader | null>(null);

/** ---------- search ---------- */
/** formatted date range "YYYY-MM-DD" pair; null = no date filter (show all) */
const dateRange = ref<[string, string] | null>(null);
const invoiceType = ref<Api.ContractManage.InvoiceType | null>(null);

const invoiceTypeOptions = computed(() => [
  { label: $t('page.contractManage.invoice.invoiceTypeSpecial'), value: '1' },
  { label: $t('page.contractManage.invoice.invoiceTypeGeneral'), value: '2' }
]);

/** ---------- list ---------- */
async function fetchInvoiceList(params: any, _values?: Record<string, any>) {
  if (!props.row) {
    return { total: 0, list: [] };
  }

  const { data, error } = await fetchGetInvoiceList({
    current: params.current,
    pageSize: params.pageSize,
    contractNo: props.row.contractNo,
    // qs serializes null/'' as empty string which fails fastapi str parsing, use undefined to skip them
    invoiceDateStart: dateRange.value?.[0] || undefined,
    invoiceDateEnd: dateRange.value?.[1] || undefined,
    invoiceType: invoiceType.value || undefined,
    // remote sorting: column key is the backend field name (camelCase, backend whitelist validated)
    sortField: params.sorter?.order ? params.sorter.columnKey : undefined,
    sortOrder: params.sorter?.order === 'ascend' ? 'asc' : params.sorter?.order === 'descend' ? 'desc' : undefined
  });

  if (error) {
    return { total: 0, list: [] };
  }

  header.value = data.header;
  return { total: data.total, list: data.records };
}

// manual: query when the modal opens, not on page mount
const {
  table: { tableProps },
  pagination,
  run,
  refresh
} = useNDataTable(fetchInvoiceList, { manual: true });

function handleSearch() {
  run({ current: 1, pageSize: pagination.pageSize.value, sorter: null, filters: {} }, {});
}

/** back to the default: no date/type filter */
function resetSearch() {
  dateRange.value = null;
  invoiceType.value = null;
  handleSearch();
}

const columns = computed<ProDataTableColumns<Api.ContractManage.InvoiceRecord>>(() => [
  {
    key: 'index',
    title: $t('common.index'),
    align: 'center',
    width: 64,
    render: (_, index) => index + 1
  },
  {
    key: 'invoiceType',
    title: $t('page.contractManage.invoice.invoiceType'),
    align: 'center',
    width: 100,
    render: row =>
      row.invoiceType === '1' ? (
        <NTag size="small" type="info">
          {$t('page.contractManage.invoice.invoiceTypeSpecial')}
        </NTag>
      ) : (
        <NTag size="small" type="default">
          {$t('page.contractManage.invoice.invoiceTypeGeneral')}
        </NTag>
      )
  },
  {
    key: 'invoiceDate',
    title: $t('page.contractManage.invoice.invoiceDate'),
    align: 'center',
    width: 140,
    sorter: true
  },
  {
    key: 'seq',
    title: $t('page.contractManage.receipt.seq'),
    align: 'center',
    width: 100
  },
  {
    key: 'invoiceAmount',
    title: $t('page.contractManage.invoice.invoiceAmount'),
    align: 'right',
    width: 160,
    render: row => fmtMoney(row.invoiceAmount),
    sorter: true
  },
  {
    key: 'updateTime',
    title: $t('page.contractManage.basicInfo.updateTime'),
    align: 'center',
    width: 170
  },
  {
    key: 'invoiceFile',
    title: $t('page.contractManage.invoice.invoiceFile'),
    align: 'center',
    width: 140,
    render: row =>
      row.invoiceFile ? (
        <div class="flex-center justify-center gap-2px">
          {renderIconBtn(
            $t('page.contractManage.invoice.preview'),
            IconIcRoundVisibility,
            () => handlePreview(row),
            'info',
            // non-image attachments cannot be previewed, the icon stays but is disabled
            !isImageFile(row.invoiceFile)
          )}
          {renderIconBtn(
            $t('page.contractManage.invoice.download'),
            IconIcRoundDownload,
            () => handleDownload(row),
            'info'
          )}
        </div>
      ) : (
        '-'
      )
  },
  {
    key: 'operate',
    title: $t('common.operate'),
    align: 'center',
    width: 110,
    fixed: 'right',
    render: row => (
      <div class="flex-center justify-center gap-2px">
        {renderIconBtn($t('common.edit'), IconIcRoundEdit, () => handleEdit(row))}
        {renderIconBtn($t('common.delete'), IconIcRoundDelete, () => handleDelete(row), 'error')}
      </div>
    )
  }
]);

type IconBtnType = 'primary' | 'success' | 'warning' | 'error' | 'info';

/** icon-only button with tooltip (quaternary: borderless), optional disabled */
function renderIconBtn(
  tooltip: string,
  icon: Component,
  onClick: () => void,
  type: IconBtnType = 'primary',
  disabled = false
) {
  return (
    <NTooltip>
      {{
        default: () => tooltip,
        trigger: () => (
          <NButton size="tiny" quaternary type={type} disabled={disabled} style="padding: 0 6px" onClick={onClick}>
            {{ icon: () => h(icon, { style: 'font-size: 18px' }) }}
          </NButton>
        )
      }}
    </NTooltip>
  );
}

/** ---------- init on open ---------- */
watch(show, visible => {
  if (visible) {
    header.value = null;
    // default = query all, no date/type filter
    dateRange.value = null;
    invoiceType.value = null;
    handleSearch();
  }
});

/** ---------- invoice image preview / download ---------- */
const previewVisible = ref(false);
const previewLoading = ref(false);
const previewUrl = ref('');

async function handlePreview(row: Api.ContractManage.InvoiceRecord) {
  previewVisible.value = true;
  previewLoading.value = true;
  try {
    const { data, error } = await fetchPreviewInvoice(row.id);
    if (error || !data) {
      previewVisible.value = false;
      return;
    }
    previewUrl.value = await blobToObjectUrl(data);
  } catch (e) {
    previewVisible.value = false;
    window.$message?.error(e instanceof Error ? e.message : String(e));
  } finally {
    previewLoading.value = false;
  }
}

function handlePreviewClose() {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value);
    previewUrl.value = '';
  }
}

async function handleDownload(row: Api.ContractManage.InvoiceRecord) {
  try {
    const { data, error } = await fetchDownloadInvoice(row.id);
    if (error || !data) {
      return;
    }
    await saveBlobFile(data, fileBaseName(row.invoiceFile) || `${row.contractNo}_invoice_${row.seq}.${extFromBlobType(data)}`);
  } catch (e) {
    window.$message?.error(e instanceof Error ? e.message : String(e));
  }
}

/** ---------- add / edit modal ---------- */
const operateVisible = ref(false);
const submitLoading = ref(false);
/** null = add */
const editingRow = ref<Api.ContractManage.InvoiceRecord | null>(null);
const isEdit = computed(() => editingRow.value !== null);

const operateTitle = computed(() =>
  isEdit.value ? $t('page.contractManage.invoice.edit') : $t('page.contractManage.invoice.add')
);

interface InvoiceFormModel {
  invoiceType: Api.ContractManage.InvoiceType | null;
  /** "YYYY-MM-DD", <= today */
  invoiceDate: string | null;
  invoiceAmount: number | null;
}

const formModel = ref<InvoiceFormModel>({
  invoiceType: null,
  invoiceDate: dayjs().format('YYYY-MM-DD'),
  invoiceAmount: null
});

/** the picked invoice attachment (optional, overwrites the old one on submit; any file type) */
const uploadFileList = ref<UploadFileInfo[]>([]);
const pickedFile = computed(() => uploadFileList.value.at(-1)?.file ?? null);

function handleFileChange({ fileList }: { fileList: UploadFileInfo[] }) {
  // keep at most one entry so a re-pick replaces the previous one
  uploadFileList.value = fileList.at(-1) ? [fileList.at(-1)!] : [];
}

/** already uploaded attachment (edit mode): file name display; images support preview */
const currentFileName = computed(() => fileBaseName(editingRow.value?.invoiceFile));
const currentFileIsImage = computed(() => isImageFile(editingRow.value?.invoiceFile));

function previewCurrentFile() {
  if (editingRow.value) {
    handlePreview(editingRow.value);
  }
}

/** local preview url of the picked image file; non-image files are not previewable */
const localPreviewUrl = ref('');

watch(pickedFile, file => {
  if (localPreviewUrl.value) {
    URL.revokeObjectURL(localPreviewUrl.value);
    localPreviewUrl.value = '';
  }
  if (file && (file.type.startsWith('image/') || isImageFile(file.name))) {
    localPreviewUrl.value = URL.createObjectURL(file);
  }
});

const { formRef, validate, restoreValidation } = useNaiveForm();
const { defaultRequiredRule } = useFormRules();

const rules = {
  invoiceType: defaultRequiredRule,
  invoiceDate: defaultRequiredRule
};

/** future dates are not allowed for the invoice date */
function disableFutureDate(current: number) {
  return current > Date.now();
}

function handleAdd() {
  editingRow.value = null;
  formModel.value = { invoiceType: null, invoiceDate: dayjs().format('YYYY-MM-DD'), invoiceAmount: null };
  uploadFileList.value = [];
  restoreValidation();
  operateVisible.value = true;
}

function handleEdit(row: Api.ContractManage.InvoiceRecord) {
  editingRow.value = row;
  formModel.value = { invoiceType: row.invoiceType, invoiceDate: row.invoiceDate, invoiceAmount: row.invoiceAmount };
  uploadFileList.value = [];
  restoreValidation();
  operateVisible.value = true;
}

async function handleSubmit() {
  await validate();

  submitLoading.value = true;
  try {
    if (isEdit.value && editingRow.value) {
      const { error } = await fetchUpdateInvoice(
        {
          id: editingRow.value.id,
          invoiceType: formModel.value.invoiceType!,
          invoiceDate: formModel.value.invoiceDate!,
          invoiceAmount: formModel.value.invoiceAmount
        },
        pickedFile.value
      );
      if (error) {
        return;
      }
      window.$message?.success($t('common.updateSuccess'));
    } else {
      const { error } = await fetchAddInvoice(
        {
          contractNo: props.row!.contractNo,
          invoiceType: formModel.value.invoiceType!,
          invoiceDate: formModel.value.invoiceDate!,
          invoiceAmount: formModel.value.invoiceAmount
        },
        pickedFile.value
      );
      if (error) {
        return;
      }
      window.$message?.success($t('common.addSuccess'));
    }

    operateVisible.value = false;
    refresh();
  } finally {
    submitLoading.value = false;
  }
}

/** ---------- delete ---------- */
function handleDelete(row: Api.ContractManage.InvoiceRecord) {
  const dialog = window.$dialog?.warning({
    title: $t('common.delete'),
    content: $t('page.contractManage.invoice.deleteConfirm'),
    positiveText: $t('common.confirm'),
    negativeText: $t('common.cancel'),
    // returning false keeps the dialog open; it is destroyed manually after the refresh completes
    onPositiveClick: () => {
      if (!dialog) {
        return true;
      }
      dialog.positiveButtonProps = { ...dialog.positiveButtonProps, loading: true };
      void (async () => {
        const { error } = await fetchDeleteInvoice(row.id);
        if (error) {
          dialog.positiveButtonProps = { ...dialog.positiveButtonProps, loading: false };
          return;
        }
        window.$message?.success($t('common.deleteSuccess'));
        // stay loading until the list refresh completes
        await refresh();
        dialog.destroy();
      })();
      return false;
    }
  });
}
</script>

<template>
  <NModal
    v-model:show="show"
    preset="card"
    :style="modalStyle"
    :content-style="contentStyle"
    :mask-closable="false"
    display-directive="show"
    @after-leave="handlePreviewClose"
  >
    <template #header>
      <div class="flex w-full items-center justify-between gap-12px">
        <span>{{ modalTitle }}</span>
        <NButton size="tiny" quaternary @click="fullscreen = !fullscreen">
          <template #icon>
            <icon-ic-round-fullscreen v-if="!fullscreen" />
            <icon-ic-round-fullscreen-exit v-else />
          </template>
        </NButton>
      </div>
    </template>

    <!-- contract basic info -->
    <NDescriptions v-if="header" label-placement="left" bordered :column="4" size="small" class="mb-12px">
      <NDescriptionsItem :label="$t('page.contractManage.basicInfo.contractNo')">
        {{ header.contractNo }}
      </NDescriptionsItem>
      <NDescriptionsItem :label="$t('page.contractManage.basicInfo.companyName')">
        {{ header.companyName }}
      </NDescriptionsItem>
      <NDescriptionsItem :label="$t('page.contractManage.basicInfo.contactPerson')">
        {{ header.contactPerson }}
      </NDescriptionsItem>
      <NDescriptionsItem :label="$t('page.contractManage.basicInfo.contactPhone')">
        {{ header.contactPhone }}
      </NDescriptionsItem>
      <NDescriptionsItem :label="$t('page.contractManage.basicInfo.contractAmount')">
        {{ fmtMoney(props.row?.contractAmount) }}
      </NDescriptionsItem>
      <NDescriptionsItem :label="$t('page.contractManage.basicInfo.remainingInvoiceAmount')" :span="3">
        <span class="font-bold">{{ fmtMoney(header.remainingInvoiceAmount) }}</span>
      </NDescriptionsItem>
    </NDescriptions>

    <!-- search + add button -->
    <div class="flex-y-center justify-between pb-12px">
      <NButton type="primary" ghost size="small" @click="handleAdd">
        <template #icon>
          <icon-ic-round-plus class="text-icon" />
        </template>
        {{ $t('page.contractManage.invoice.add') }}
      </NButton>
      <div class="flex-y-center gap-12px">
        <span class="text-14px">{{ $t('page.contractManage.invoice.invoiceDate') }}</span>
        <NDatePicker
          v-model:formatted-value="dateRange"
          type="daterange"
          clearable
          class="w-280px"
          value-format="yyyy-MM-dd"
        />
        <span class="text-14px">{{ $t('page.contractManage.invoice.invoiceType') }}</span>
        <NSelect
          v-model:value="invoiceType"
          clearable
          :options="invoiceTypeOptions"
          class="w-120px"
          :placeholder="$t('page.contractManage.invoice.invoiceType')"
        />
        <NButton size="small" @click="resetSearch">
          <template #icon>
            <icon-ic-round-refresh class="text-icon" />
          </template>
          {{ $t('common.reset') }}
        </NButton>
        <NButton size="small" type="primary" ghost @click="handleSearch()">
          <template #icon>
            <icon-ic-round-search class="text-icon" />
          </template>
          {{ $t('common.search') }}
        </NButton>
      </div>
    </div>

    <ProDataTable
      size="small"
      :columns="columns"
      :scroll-x="1100"
      :row-key="(row: Api.ContractManage.InvoiceRecord) => row.id"
      v-bind="tableProps"
    />

    <!-- add / edit modal -->
    <NModal
      v-model:show="operateVisible"
      :title="operateTitle"
      preset="card"
      class="w-560px"
      :mask-closable="false"
      display-directive="show"
    >
      <NForm ref="formRef" :model="formModel" :rules="rules" label-placement="left" :label-width="110">
        <NFormItem :label="$t('page.contractManage.basicInfo.contractNo')">
          <NInput :value="props.row?.contractNo" disabled />
        </NFormItem>
        <NFormItem :label="$t('page.contractManage.invoice.invoiceType')" path="invoiceType">
          <NSelect
            v-model:value="formModel.invoiceType"
            :options="invoiceTypeOptions"
            :placeholder="$t('page.contractManage.invoice.invoiceType')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.contractManage.invoice.invoiceDate')" path="invoiceDate">
          <NDatePicker
            v-model:formatted-value="formModel.invoiceDate"
            type="date"
            clearable
            class="w-full"
            value-format="yyyy-MM-dd"
            :is-date-disabled="disableFutureDate"
            :placeholder="$t('page.contractManage.invoice.invoiceDate')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.contractManage.invoice.invoiceAmount')" path="invoiceAmount">
          <NInputNumber
            v-model:value="formModel.invoiceAmount"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.invoice.invoiceAmount')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.contractManage.invoice.invoiceFile')">
          <div class="w-full">
            <NUpload
              v-model:file-list="uploadFileList"
              :max="1"
              :default-upload="false"
              @change="handleFileChange"
            >
              <NButton type="primary" ghost size="small">
                <template #icon>
                  <icon-ic-round-upload class="text-icon" />
                </template>
                {{ $t('page.contractManage.invoice.invoiceFile') }}
              </NButton>
            </NUpload>
            <div
              v-if="isEdit && currentFileName"
              class="mt-6px flex-y-center gap-4px text-12px text-gray-500"
            >
              <span>{{ $t('page.contractManage.operate.currentFile') }}{{ currentFileName }}</span>
              <NButton
                v-if="currentFileIsImage"
                text
                type="primary"
                size="tiny"
                @click="previewCurrentFile"
              >
                {{ $t('page.contractManage.invoice.preview') }}
              </NButton>
            </div>
            <NImage v-if="localPreviewUrl" :src="localPreviewUrl" object-fit="contain" class="mt-8px w-200px rd-4px" />
          </div>
        </NFormItem>
      </NForm>
      <template #footer>
        <NSpace justify="end">
          <NButton @click="operateVisible = false">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" :loading="submitLoading" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NModal>

    <!-- invoice image preview -->
    <NModal
      v-model:show="previewVisible"
      :title="$t('page.contractManage.invoice.preview')"
      preset="card"
      class="w-720px"
      @after-leave="handlePreviewClose"
    >
      <NSpin :show="previewLoading">
        <NImage v-if="previewUrl" :src="previewUrl" object-fit="contain" class="w-full" />
      </NSpin>
    </NModal>
  </NModal>
</template>
