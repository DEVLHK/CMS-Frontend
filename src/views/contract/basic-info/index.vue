<script setup lang="tsx">
import { computed, h, ref, toRaw, watch } from 'vue';
import type { Component } from 'vue';
import { useRoute } from 'vue-router';
import { NButton, NTag, NTooltip } from 'naive-ui';
import dayjs from 'dayjs';
import { useNDataTable } from 'pro-naive-ui';
import type { ProDataTableColumns } from 'pro-naive-ui';
import IconIcRoundBlock from '~icons/ic/round-block';
import IconIcRoundDelete from '~icons/ic/round-delete';
import IconIcRoundDownload from '~icons/ic/round-download';
import IconIcRoundEdit from '~icons/ic/round-edit';
import IconIcRoundPayments from '~icons/ic/round-payments';
import IconIcRoundReceiptLong from '~icons/ic/round-receipt-long';
import IconIcRoundUploadFile from '~icons/ic/round-upload-file';
import {
  fetchDeleteContract,
  fetchDownloadContract,
  fetchDownloadContractPdf,
  fetchDownloadReport,
  fetchGetContractList,
  fetchVoidContract
} from '@/service/api';
import { useAuth } from '@/hooks/business/auth';
import { $t } from '@/locales';
import ConfigProvider from '@/views/pro-naive/ConfigProvider.vue';
import ContractOperateModal from './modules/contract-operate-modal.vue';
import InvoiceModal from './modules/invoice-modal.vue';
import ReceiptModal from './modules/receipt-modal.vue';
import ReportUploadModal from './modules/report-upload-modal.vue';
import { contractRegionOptions, extFromBlobType, fileBaseName, fmtMoney, saveBlobFile } from './modules/shared';

defineOptions({
  name: 'ContractBasicInfo'
});

const regionOptions = contractRegionOptions;

const completionStatusOptions = computed(() => [
  { label: $t('page.contractManage.basicInfo.completionDone'), value: '1' },
  { label: $t('page.contractManage.basicInfo.completionUndone'), value: '2' }
]);

const statusOptions = computed(() => [
  { label: $t('page.contractManage.basicInfo.statusActive'), value: '1' },
  { label: $t('page.contractManage.basicInfo.statusVoided'), value: '2' }
]);

interface ContractSearchValues {
  contractNo: string | null;
  companyName: string | null;
  completionStatus: Api.ContractManage.CompletionStatus | null;
  /** formatted month range "YYYY-MM" pair; null = no month filter */
  monthRange: [string, string] | null;
  /** multiple regions allowed */
  region: string[] | null;
  projectType: string | null;
  /** default = active ("1") */
  status: Api.ContractManage.ContractStatus | null;
}

function createDefaultSearchValues(): ContractSearchValues {
  return {
    contractNo: null,
    companyName: null,
    completionStatus: null,
    monthRange: null,
    region: null,
    projectType: null,
    status: '1'
  };
}

const searchValues = ref<ContractSearchValues>(createDefaultSearchValues());

// support opening from the home expiring list: /contract/basic-info?contractNo=xxx queries directly.
// set during setup so the auto query on mount already carries the value
const route = useRoute();
const routeContractNo = route.query.contractNo;
if (typeof routeContractNo === 'string' && routeContractNo) {
  searchValues.value.contractNo = routeContractNo;
}

// when the tab is reused (navigating with a different contractNo while the page is already open),
// the setup read above won't re-run, so watch the query and re-query on change
watch(
  () => route.query.contractNo,
  no => {
    if (typeof no === 'string' && no && no !== searchValues.value.contractNo) {
      searchValues.value.contractNo = no;
      handleSearch();
    }
  }
);

async function fetchList(params: any, values?: ContractSearchValues | Record<string, any>) {
  // the auto query on page mount runs without form values; fall back to the current search form state
  // (so the default status="active" filter is applied on the initial load)
  const merged = { ...toRaw(searchValues.value), ...(values ?? {}) } as ContractSearchValues;
  const { monthRange, ...rest } = merged;
  const sorter = (params.sorter ?? null) as { columnKey?: string; order?: string } | null;
  const { data, error } = await fetchGetContractList({
    current: params.current,
    pageSize: params.pageSize,
    // qs serializes null/'' as empty string which fails fastapi str parsing, use undefined to skip them
    contractNo: rest.contractNo || undefined,
    companyName: rest.companyName || undefined,
    completionStatus: rest.completionStatus || undefined,
    monthStart: monthRange?.[0] || undefined,
    monthEnd: monthRange?.[1] || undefined,
    region: rest.region?.length ? rest.region : undefined,
    projectType: rest.projectType || undefined,
    status: rest.status || undefined,
    // remote sorting: column key is the backend field name (camelCase, backend whitelist validated)
    sortField: sorter?.order ? sorter.columnKey : undefined,
    sortOrder: sorter?.order === 'ascend' ? 'asc' : sorter?.order === 'descend' ? 'desc' : undefined
  });

  if (error) {
    return { total: 0, list: [] };
  }

  return { total: data.total, list: data.records };
}

const { hasAuth } = useAuth();

const columns = computed<ProDataTableColumns<Api.ContractManage.ContractRecord>>(() => {
  return [
    {
      key: 'index',
      title: $t('common.index'),
      align: 'center',
      width: 64,
      render: (_, index) => index + 1
    },
    {
      key: 'contractNo',
      title: $t('page.contractManage.basicInfo.contractNo'),
      align: 'center',
      width: 160,
      ellipsis: { tooltip: true },
      resizable: true,
      sorter: true
    },
    {
      key: 'month',
      title: $t('page.contractManage.basicInfo.month'),
      align: 'center',
      width: 90,
      resizable: true,
      sorter: true
    },
    {
      key: 'signDate',
      title: $t('page.contractManage.basicInfo.signDate'),
      align: 'center',
      width: 110,
      resizable: true,
      sorter: true
    },
    {
      key: 'expireDate',
      title: $t('page.contractManage.basicInfo.expireDate'),
      align: 'center',
      width: 120,
      resizable: true,
      sorter: true
    },
    {
      key: 'contractAmount',
      title: $t('page.contractManage.basicInfo.contractAmount'),
      align: 'right',
      width: 130,
      resizable: true,
      sorter: true,
      render: row => fmtMoney(row.contractAmount)
    },
    {
      key: 'remainingReceiptAmount',
      title: $t('page.contractManage.basicInfo.remainingReceiptAmount'),
      align: 'right',
      width: 130,
      resizable: true,
      sorter: true,
      render: row => fmtMoney(row.remainingReceiptAmount)
    },
    {
      key: 'remainingInvoiceAmount',
      title: $t('page.contractManage.basicInfo.remainingInvoiceAmount'),
      align: 'right',
      width: 130,
      resizable: true,
      sorter: true,
      render: row => fmtMoney(row.remainingInvoiceAmount)
    },
    {
      key: 'costGroup',
      title: $t('page.contractManage.basicInfo.costGroup'),
      align: 'center',
      children: [
        {
          key: 'costSiteAudit',
          title: $t('page.contractManage.basicInfo.costSiteAudit'),
          align: 'right',
          width: 100,
          resizable: true,
          sorter: true,
          render: (row: Api.ContractManage.ContractRecord) => fmtMoney(row.costSiteAudit)
        },
        {
          key: 'costExpertReview',
          title: $t('page.contractManage.basicInfo.costExpertReview'),
          align: 'right',
          width: 100,
          resizable: true,
          sorter: true,
          render: (row: Api.ContractManage.ContractRecord) => fmtMoney(row.costExpertReview)
        },
        {
          key: 'costIntermediaryFee',
          title: $t('page.contractManage.basicInfo.costIntermediaryFee'),
          align: 'right',
          width: 100,
          resizable: true,
          sorter: true,
          render: (row: Api.ContractManage.ContractRecord) => fmtMoney(row.costIntermediaryFee)
        },
        {
          key: 'costReportCommission',
          title: $t('page.contractManage.basicInfo.costReportCommission'),
          align: 'right',
          width: 130,
          resizable: true,
          sorter: true,
          render: (row: Api.ContractManage.ContractRecord) => fmtMoney(row.costReportCommission)
        },
        {
          key: 'costQualification',
          title: $t('page.contractManage.basicInfo.costQualification'),
          align: 'right',
          width: 130,
          resizable: true,
          sorter: true,
          render: (row: Api.ContractManage.ContractRecord) => fmtMoney(row.costQualification)
        },
        {
          key: 'costSalesmanCommission',
          title: $t('page.contractManage.basicInfo.costSalesmanCommission'),
          align: 'right',
          width: 130,
          resizable: true,
          sorter: true,
          render: (row: Api.ContractManage.ContractRecord) => fmtMoney(row.costSalesmanCommission)
        }
      ]
    },
    {
      key: 'vatTax',
      title: $t('page.contractManage.basicInfo.vatTax'),
      align: 'right',
      width: 130,
      resizable: true,
      render: row => fmtMoney(row.vatTax),
      sorter: true
    },
    {
      key: 'grossProfit',
      title: $t('page.contractManage.basicInfo.grossProfit'),
      align: 'right',
      width: 110,
      resizable: true,
      render: row => fmtMoney(row.grossProfit),
      sorter: true
    },
    {
      key: 'region',
      title: $t('page.contractManage.basicInfo.region'),
      align: 'center',
      width: 90,
      resizable: true,
      sorter: true
    },
    {
      key: 'projectType',
      title: $t('page.contractManage.basicInfo.projectType'),
      align: 'left',
      width: 160,
      ellipsis: { tooltip: true },
      resizable: true,
      sorter: true
    },
    {
      key: 'companyName',
      title: $t('page.contractManage.basicInfo.companyName'),
      align: 'left',
      width: 200,
      ellipsis: { tooltip: true },
      resizable: true,
      sorter: true
    },
    {
      key: 'contactPerson',
      title: $t('page.contractManage.basicInfo.contactPerson'),
      align: 'center',
      width: 90,
      resizable: true,
      sorter: true
    },
    {
      key: 'contactPhone',
      title: $t('page.contractManage.basicInfo.contactPhone'),
      align: 'center',
      width: 120,
      resizable: true,
      sorter: true
    },
    {
      key: 'completionStatus',
      title: $t('page.contractManage.basicInfo.completionStatus'),
      align: 'center',
      width: 120,
      resizable: true,
      sorter: true,
      render: row =>
        row.completionStatus === '1' ? (
          <NTag size="small" type="success">
            {$t('page.contractManage.basicInfo.completionDone')}
          </NTag>
        ) : (
          <NTag size="small" type="warning">
            {$t('page.contractManage.basicInfo.completionUndone')}
          </NTag>
        )
    },
    {
      key: 'status',
      title: $t('page.contractManage.basicInfo.status'),
      align: 'center',
      width: 90,
      resizable: true,
      sorter: true,
      render: row =>
        row.status === '1' ? (
          <NTag size="small" type="success">
            {$t('page.contractManage.basicInfo.statusActive')}
          </NTag>
        ) : (
          <NTooltip>
            {{
              default: () => $t('page.contractManage.basicInfo.voidedTip'),
              trigger: () => (
                <NTag size="small" type="error">
                  {$t('page.contractManage.basicInfo.statusVoided')}
                </NTag>
              )
            }}
          </NTooltip>
        )
    },
    {
      key: 'contractFile',
      title: $t('page.contractManage.basicInfo.contractFile'),
      align: 'center',
      width: 120,
      resizable: true,
      render: row => (
        <div class="flex-center justify-center gap-4px">
          {row.contractFile ? (
            <NTag size="small" type="success">
              {$t('page.contractManage.basicInfo.uploaded')}
            </NTag>
          ) : (
            <NTag size="small">{$t('page.contractManage.basicInfo.notUploaded')}</NTag>
          )}
          {hasAuth('B_CONTRACT::BTN_DOWNLOAD_CONTRACT') &&
            renderIconBtn(
              $t('page.contractManage.basicInfo.downloadContract'),
              IconIcRoundDownload,
              () => handleDownloadContract(row),
              'info'
            )}
          {hasAuth('B_CONTRACT::BTN_DOWNLOAD_CONTRACT') &&
            renderIconBtn(
              $t('page.contractManage.basicInfo.downloadContractPdf'),
              IconIcRoundDownload,
              () => handleDownloadContractPdf(row),
              'success',
              !row.contractPdfFile
            )}
        </div>
      )
    },
    {
      key: 'reportFile',
      title: $t('page.contractManage.basicInfo.reportFile'),
      align: 'center',
      width: 120,
      resizable: true,
      render: row => (
        <div class="flex-center justify-center gap-4px">
          {row.reportFile ? (
            <NTag size="small" type="success">
              {$t('page.contractManage.basicInfo.uploaded')}
            </NTag>
          ) : (
            <NTag size="small">{$t('page.contractManage.basicInfo.notUploaded')}</NTag>
          )}
          {hasAuth('B_CONTRACT::BTN_UPLOAD_REPORT') &&
            renderIconBtn(
              $t('page.contractManage.report.download'),
              IconIcRoundDownload,
              () => handleDownloadReport(row),
              'info',
              !row.reportFile
            )}
        </div>
      )
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 220,
      fixed: 'right',
      render: row => (
        <div class="flex-center justify-center gap-2px">
          {hasAuth('B_CONTRACT::BTN_EDIT') &&
            renderIconBtn($t('common.edit'), IconIcRoundEdit, () => handleEdit(row), 'primary', isVoided(row))}
          {hasAuth('B_CONTRACT::BTN_RECEIPT') &&
            renderIconBtn(
              $t('page.contractManage.basicInfo.receiptDetail'),
              IconIcRoundPayments,
              () => handleOpenReceipt(row),
              'info',
              isVoided(row)
            )}
          {hasAuth('B_CONTRACT::BTN_INVOICE') &&
            renderIconBtn(
              $t('page.contractManage.basicInfo.invoiceDetail'),
              IconIcRoundReceiptLong,
              () => handleOpenInvoice(row),
              'info',
              isVoided(row)
            )}
          {hasAuth('B_CONTRACT::BTN_UPLOAD_REPORT') &&
            renderIconBtn(
              $t('page.contractManage.report.upload'),
              IconIcRoundUploadFile,
              () => handleOpenReport(row),
              'primary',
              isVoided(row)
            )}
          {hasAuth('B_CONTRACT::BTN_VOID') &&
            renderIconBtn(
              $t('page.contractManage.basicInfo.void'),
              IconIcRoundBlock,
              () => handleVoid(row),
              'warning',
              isVoided(row)
            )}
          {hasAuth('B_CONTRACT::BTN_DELETE') &&
            renderIconBtn($t('common.delete'), IconIcRoundDelete, () => handleDelete(row), 'error')}
        </div>
      )
    }
  ];
});

type IconBtnType = 'primary' | 'success' | 'warning' | 'error' | 'info';

/** voided contracts cannot be maintained */
function isVoided(row: Api.ContractManage.ContractRecord) {
  return row.status === '2';
}

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

const {
  table: { tableProps },
  pagination,
  run,
  refresh
} = useNDataTable(
  ({ current, pageSize, filters, sorter }, values) => fetchList({ current, pageSize, filters, sorter }, values),
  // default 20 per page; page size options are merged into the pagination prop in the template
  { defaultPageSize: 20 }
);

/** query with current search values (page 1, keep page size) */
function handleSearch() {
  run({ current: 1, pageSize: pagination.pageSize.value, sorter: null, filters: {} }, { ...toRaw(searchValues.value) });
}

function resetSearch() {
  Object.assign(searchValues.value, createDefaultSearchValues());
  handleSearch();
}

/** quick set the month range to the current month and query */
function handleThisMonth() {
  const currentMonth = dayjs().format('YYYY-MM');
  searchValues.value.monthRange = [currentMonth, currentMonth];
  handleSearch();
}

/** ---------- contract download ---------- */
const downloading = ref(false);

async function handleDownloadContract(row: Api.ContractManage.ContractRecord) {
  downloading.value = true;
  try {
    const { data, error } = await fetchDownloadContract(row.id);
    if (error || !data) {
      return;
    }
    await saveBlobFile(data, fileBaseName(row.contractFile) || `${row.contractNo}.doc`);
    window.$message?.success($t('page.contractManage.basicInfo.downloadContract'));
  } catch (e) {
    window.$message?.error(e instanceof Error ? e.message : String(e));
  } finally {
    downloading.value = false;
  }
}

/** ---------- contract pdf download ---------- */
async function handleDownloadContractPdf(row: Api.ContractManage.ContractRecord) {
  try {
    const { data, error } = await fetchDownloadContractPdf(row.id);
    if (error || !data) {
      return;
    }
    await saveBlobFile(data, fileBaseName(row.contractPdfFile) || `${row.contractNo}.pdf`);
  } catch (e) {
    window.$message?.error(e instanceof Error ? e.message : String(e));
  }
}

/** ---------- report download ---------- */
async function handleDownloadReport(row: Api.ContractManage.ContractRecord) {
  try {
    const { data, error } = await fetchDownloadReport(row.id);
    if (error || !data) {
      return;
    }
    await saveBlobFile(data, fileBaseName(row.reportFile) || `${row.contractNo}_report.${extFromBlobType(data)}`);
  } catch (e) {
    window.$message?.error(e instanceof Error ? e.message : String(e));
  }
}

/** ---------- delete / void ---------- */
function handleDelete(row: Api.ContractManage.ContractRecord) {
  window.$dialog?.warning({
    title: $t('common.delete'),
    content: `${$t('page.contractManage.basicInfo.deleteConfirm')}（${row.contractNo}）`,
    positiveText: $t('common.confirm'),
    negativeText: $t('common.cancel'),
    onPositiveClick: async () => {
      const { error } = await fetchDeleteContract(row.id);
      if (!error) {
        window.$message?.success($t('common.deleteSuccess'));
        refresh();
      }
    }
  });
}

function handleVoid(row: Api.ContractManage.ContractRecord) {
  window.$dialog?.warning({
    title: $t('page.contractManage.basicInfo.void'),
    content: `${$t('page.contractManage.basicInfo.voidConfirm')}（${row.contractNo}）`,
    positiveText: $t('common.confirm'),
    negativeText: $t('common.cancel'),
    onPositiveClick: async () => {
      const { error } = await fetchVoidContract(row.id);
      if (!error) {
        window.$message?.success($t('page.contractManage.basicInfo.void'));
        refresh();
      }
    }
  });
}

/** ---------- add / edit modal ---------- */
const operateModalVisible = ref(false);
/** null = add */
const editingRow = ref<Api.ContractManage.ContractRecord | null>(null);

function handleAdd() {
  editingRow.value = null;
  operateModalVisible.value = true;
}

function handleEdit(row: Api.ContractManage.ContractRecord) {
  editingRow.value = row;
  operateModalVisible.value = true;
}

/** ---------- report upload modal ---------- */
const reportModalVisible = ref(false);
const reportRow = ref<Api.ContractManage.ContractRecord | null>(null);

function handleOpenReport(row: Api.ContractManage.ContractRecord) {
  reportRow.value = row;
  reportModalVisible.value = true;
}

/** ---------- receipt detail modal ---------- */
const receiptModalVisible = ref(false);
const receiptRow = ref<Api.ContractManage.ContractRecord | null>(null);

function handleOpenReceipt(row: Api.ContractManage.ContractRecord) {
  receiptRow.value = row;
  receiptModalVisible.value = true;
}

/** ---------- invoice detail modal ---------- */
const invoiceModalVisible = ref(false);
const invoiceRow = ref<Api.ContractManage.ContractRecord | null>(null);

function handleOpenInvoice(row: Api.ContractManage.ContractRecord) {
  invoiceRow.value = row;
  invoiceModalVisible.value = true;
}
</script>

<template>
  <ConfigProvider>
    <div class="h-full flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
      <NCard :bordered="false" size="small" class="card-wrapper">
        <NCollapse :default-expanded-names="['contract-search']">
          <NCollapseItem :title="$t('common.search')" name="contract-search">
            <NForm
              :model="searchValues"
              label-placement="left"
              :label-width="100"
              @keydown.enter.prevent="handleSearch()"
            >
              <NGrid responsive="screen" item-responsive>
                <NFormItemGi
                  span="24 s:12 m:8"
                  :label="$t('page.contractManage.basicInfo.contractNo')"
                  path="contractNo"
                  class="pr-24px"
                >
                  <NInput
                    v-model:value="searchValues.contractNo"
                    clearable
                    :placeholder="$t('page.contractManage.basicInfo.contractNo')"
                  />
                </NFormItemGi>
                <NFormItemGi
                  span="24 s:12 m:8"
                  :label="$t('page.contractManage.basicInfo.companyName')"
                  path="companyName"
                  class="pr-24px"
                >
                  <NInput
                    v-model:value="searchValues.companyName"
                    clearable
                    :placeholder="$t('page.contractManage.basicInfo.companyName')"
                  />
                </NFormItemGi>
                <NFormItemGi
                  span="24 s:12 m:8"
                  :label="$t('page.contractManage.basicInfo.monthRange')"
                  path="monthRange"
                  class="pr-24px"
                >
                  <NDatePicker
                    v-model:formatted-value="searchValues.monthRange"
                    type="monthrange"
                    clearable
                    class="w-full"
                    value-format="yyyy-MM"
                  />
                </NFormItemGi>
                <NFormItemGi
                  span="24 s:12 m:8"
                  :label="$t('page.contractManage.basicInfo.region')"
                  path="region"
                  class="pr-24px"
                >
                  <NSelect
                    v-model:value="searchValues.region"
                    multiple
                    filterable
                    clearable
                    :options="regionOptions"
                    :placeholder="$t('page.contractManage.basicInfo.region')"
                  />
                </NFormItemGi>
                <NFormItemGi
                  span="24 s:12 m:8"
                  :label="$t('page.contractManage.basicInfo.projectType')"
                  path="projectType"
                  class="pr-24px"
                >
                  <NInput
                    v-model:value="searchValues.projectType"
                    clearable
                    :placeholder="$t('page.contractManage.basicInfo.projectType')"
                  />
                </NFormItemGi>
                <NFormItemGi
                  span="24 s:12 m:8"
                  :label="$t('page.contractManage.basicInfo.completionStatus')"
                  path="completionStatus"
                  class="pr-24px"
                >
                  <NSelect
                    v-model:value="searchValues.completionStatus"
                    clearable
                    :options="completionStatusOptions"
                    :placeholder="$t('page.contractManage.basicInfo.completionStatus')"
                  />
                </NFormItemGi>
                <NFormItemGi
                  span="24 s:12 m:8"
                  :label="$t('page.contractManage.basicInfo.status')"
                  path="status"
                  class="pr-24px"
                >
                  <NSelect
                    v-model:value="searchValues.status"
                    clearable
                    :options="statusOptions"
                    :placeholder="$t('page.contractManage.basicInfo.status')"
                  />
                </NFormItemGi>
                <NFormItemGi span="24" class="pr-24px">
                  <NSpace class="w-full" justify="end">
                    <NButton @click="handleThisMonth">{{ $t('page.contractManage.basicInfo.thisMonth') }}</NButton>
                    <NButton @click="resetSearch">
                      <template #icon>
                        <icon-ic-round-refresh class="text-icon" />
                      </template>
                      {{ $t('common.reset') }}
                    </NButton>
                    <NButton type="primary" ghost @click="handleSearch()">
                      <template #icon>
                        <icon-ic-round-search class="text-icon" />
                      </template>
                      {{ $t('common.search') }}
                    </NButton>
                  </NSpace>
                </NFormItemGi>
              </NGrid>
            </NForm>
          </NCollapseItem>
        </NCollapse>
      </NCard>
      <ProDataTable
        :title="$t('route.contract_basic-info')"
        size="small"
        flex-height
        :columns="columns"
        :scroll-x="3080"
        :row-key="(row: Api.ContractManage.ContractRecord) => row.id"
        class="flex-1"
        v-bind="tableProps"
        :pagination="{ ...tableProps.pagination, showSizePicker: true, pageSizes: [10, 20, 50, 100, 200] }"
      >
        <template #toolbar>
          <NButton
            v-if="hasAuth('B_CONTRACT::BTN_ADD')"
            type="primary"
            ghost
            size="small"
            @click="handleAdd"
          >
            <template #icon>
              <icon-ic-round-plus class="text-icon" />
            </template>
            {{ $t('page.contractManage.basicInfo.add') }}
          </NButton>
        </template>
      </ProDataTable>
    </div>

    <ContractOperateModal v-model:show="operateModalVisible" :row="editingRow" @submitted="refresh()" />
    <ReportUploadModal v-model:show="reportModalVisible" :row="reportRow" @submitted="refresh()" />
    <ReceiptModal v-model:show="receiptModalVisible" :row="receiptRow" />
    <InvoiceModal v-model:show="invoiceModalVisible" :row="invoiceRow" />
  </ConfigProvider>
</template>
