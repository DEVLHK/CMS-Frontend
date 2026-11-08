<script setup lang="tsx">
import { computed, h, ref, watch } from 'vue';
import type { Component } from 'vue';
import { NButton, NTooltip } from 'naive-ui';
import dayjs from 'dayjs';
import { useNDataTable } from 'pro-naive-ui';
import type { ProDataTableColumns } from 'pro-naive-ui';
import IconIcRoundDelete from '~icons/ic/round-delete';
import IconIcRoundEdit from '~icons/ic/round-edit';
import { fetchAddReceipt, fetchDeleteReceipt, fetchGetReceiptList, fetchUpdateReceipt } from '@/service/api';
import { useNaiveForm, useFormRules } from '@/hooks/common/form';
import { $t } from '@/locales';
import { fmtMoney } from './shared';

defineOptions({
  name: 'ContractReceiptModal'
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
    : { width: '1100px', maxWidth: '96vw' }
);

const contentStyle = computed(() =>
  fullscreen.value ? 'max-height: calc(100vh - 180px); overflow: auto' : 'max-height: 72vh; overflow: auto'
);

const modalTitle = computed(() => $t('page.contractManage.basicInfo.receiptDetail'));

/** contract basic info shown on top, from the list response header */
const header = ref<Api.ContractManage.ContractHeader | null>(null);

/** ---------- search ---------- */
/** formatted date range "YYYY-MM-DD" pair; null = no date filter (show all) */
const dateRange = ref<[string, string] | null>(null);

/** ---------- list ---------- */
async function fetchReceiptList(params: any, _values?: Record<string, any>) {
  if (!props.row) {
    return { total: 0, list: [] };
  }

  const { data, error } = await fetchGetReceiptList({
    current: params.current,
    pageSize: params.pageSize,
    contractNo: props.row.contractNo,
    // qs serializes null/'' as empty string which fails fastapi str parsing, use undefined to skip them
    receiptDateStart: dateRange.value?.[0] || undefined,
    receiptDateEnd: dateRange.value?.[1] || undefined,
    // remote sorting: column key is the backend field name (camelCase, backend whitelist validated)
    sortField: params.sorter?.order ? params.sorter.columnKey : undefined,
    sortOrder:
      params.sorter?.order === 'ascend' ? 'asc' : params.sorter?.order === 'descend' ? 'desc' : undefined
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
} = useNDataTable(fetchReceiptList, {
  manual: true,
  // default 20 per page; page size options are merged into the pagination prop in the template
  defaultPageSize: 20
});

function handleSearch() {
  run({ current: 1, pageSize: pagination.pageSize.value, sorter: null, filters: {} }, {});
}

/** back to the default: no date filter */
function resetSearch() {
  dateRange.value = null;
  handleSearch();
}

const columns = computed<ProDataTableColumns<Api.ContractManage.ReceiptRecord>>(() => [
  {
    key: 'index',
    title: $t('common.index'),
    align: 'center',
    width: 64,
    render: (_, index) => index + 1
  },
  {
    key: 'receiptDate',
    title: $t('page.contractManage.receipt.receiptDate'),
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
    key: 'receiptAmount',
    title: $t('page.contractManage.receipt.receiptAmount'),
    align: 'right',
    width: 160,
    render: row => fmtMoney(row.receiptAmount),
    sorter: true
  },
  {
    key: 'updateTime',
    title: $t('page.contractManage.basicInfo.updateTime'),
    align: 'center',
    width: 170
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

/** icon-only button with tooltip (quaternary: borderless) */
function renderIconBtn(tooltip: string, icon: Component, onClick: () => void, type: IconBtnType = 'primary') {
  return (
    <NTooltip>
      {{
        default: () => tooltip,
        trigger: () => (
          <NButton size="tiny" quaternary type={type} style="padding: 0 6px" onClick={onClick}>
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
    // default = query all, no date filter
    dateRange.value = null;
    handleSearch();
  }
});

/** ---------- add / edit modal ---------- */
const operateVisible = ref(false);
const submitLoading = ref(false);
/** null = add */
const editingRow = ref<Api.ContractManage.ReceiptRecord | null>(null);
const isEdit = computed(() => editingRow.value !== null);

const operateTitle = computed(() =>
  isEdit.value ? $t('page.contractManage.receipt.edit') : $t('page.contractManage.receipt.add')
);

interface ReceiptFormModel {
  /** "YYYY-MM-DD" */
  receiptDate: string | null;
  receiptAmount: number | null;
}

const formModel = ref<ReceiptFormModel>({
  receiptDate: null,
  receiptAmount: null
});

const { formRef, validate, restoreValidation } = useNaiveForm();
const { defaultRequiredRule } = useFormRules();

const rules = {
  receiptDate: defaultRequiredRule
};

function handleAdd() {
  editingRow.value = null;
  formModel.value = { receiptDate: dayjs().format('YYYY-MM-DD'), receiptAmount: null };
  restoreValidation();
  operateVisible.value = true;
}

function handleEdit(row: Api.ContractManage.ReceiptRecord) {
  editingRow.value = row;
  formModel.value = { receiptDate: row.receiptDate, receiptAmount: row.receiptAmount };
  restoreValidation();
  operateVisible.value = true;
}

async function handleSubmit() {
  await validate();

  submitLoading.value = true;
  try {
    if (isEdit.value && editingRow.value) {
      // only the amount is changeable on update
      const { error } = await fetchUpdateReceipt({
        id: editingRow.value.id,
        receiptAmount: formModel.value.receiptAmount
      });
      if (error) {
        return;
      }
      window.$message?.success($t('common.updateSuccess'));
    } else {
      const { error } = await fetchAddReceipt({
        contractNo: props.row!.contractNo,
        receiptDate: formModel.value.receiptDate!,
        receiptAmount: formModel.value.receiptAmount
      });
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
function handleDelete(row: Api.ContractManage.ReceiptRecord) {
  const dialog = window.$dialog?.warning({
    title: $t('common.delete'),
    content: $t('page.contractManage.receipt.deleteConfirm'),
    positiveText: $t('common.confirm'),
    negativeText: $t('common.cancel'),
    // returning false keeps the dialog open; it is destroyed manually after the refresh completes
    onPositiveClick: () => {
      if (!dialog) {
        return true;
      }
      dialog.positiveButtonProps = { ...dialog.positiveButtonProps, loading: true };
      void (async () => {
        const { error } = await fetchDeleteReceipt(row.id);
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
    <NDescriptions
      v-if="header"
      label-placement="left"
      bordered
      :column="4"
      size="small"
      class="mb-12px"
    >
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
      <NDescriptionsItem
        :label="$t('page.contractManage.basicInfo.remainingReceiptAmount')"
        :span="3"
      >
        <span class="font-bold">{{ fmtMoney(header.remainingReceiptAmount) }}</span>
      </NDescriptionsItem>
    </NDescriptions>

    <!-- search + add button -->
    <div class="flex-y-center justify-between pb-12px">
      <NButton type="primary" ghost size="small" @click="handleAdd">
        <template #icon>
          <icon-ic-round-plus class="text-icon" />
        </template>
        {{ $t('page.contractManage.receipt.add') }}
      </NButton>
      <div class="flex-y-center gap-12px">
        <span class="text-14px">{{ $t('page.contractManage.receipt.receiptDate') }}</span>
        <NDatePicker
          v-model:formatted-value="dateRange"
          type="daterange"
          clearable
          class="w-280px"
          value-format="yyyy-MM-dd"
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
      :scroll-x="900"
      :row-key="(row: Api.ContractManage.ReceiptRecord) => row.id"
      v-bind="tableProps"
      :pagination="{ ...tableProps.pagination, showSizePicker: true, pageSizes: [10, 20, 50, 100, 200] }"
    />

    <!-- add / edit modal -->
    <NModal
      v-model:show="operateVisible"
      :title="operateTitle"
      preset="card"
      class="w-520px"
      :mask-closable="false"
      display-directive="show"
    >
      <NAlert v-if="isEdit" type="info" class="mb-12px">{{ $t('page.contractManage.receipt.editAmountOnlyTip') }}</NAlert>
      <NForm ref="formRef" :model="formModel" :rules="rules" label-placement="left" :label-width="110">
        <NFormItem :label="$t('page.contractManage.basicInfo.contractNo')">
          <NInput :value="props.row?.contractNo" disabled />
        </NFormItem>
        <NFormItem :label="$t('page.contractManage.receipt.receiptDate')" path="receiptDate">
          <NDatePicker
            v-model:formatted-value="formModel.receiptDate"
            type="date"
            clearable
            class="w-full"
            value-format="yyyy-MM-dd"
            :disabled="isEdit"
            :placeholder="$t('page.contractManage.receipt.receiptDate')"
          />
        </NFormItem>
        <NFormItem :label="$t('page.contractManage.receipt.receiptAmount')" path="receiptAmount">
          <NInputNumber
            v-model:value="formModel.receiptAmount"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.receipt.receiptAmount')"
          />
        </NFormItem>
      </NForm>
      <template #footer>
        <NSpace justify="end">
          <NButton @click="operateVisible = false">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" :loading="submitLoading" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NModal>
  </NModal>
</template>
