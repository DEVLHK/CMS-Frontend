<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import type { UploadFileInfo } from 'naive-ui';
import dayjs from 'dayjs';
import { fetchAddContract, fetchDownloadContract, fetchDownloadContractPdf, fetchUpdateContract, fetchUploadContract } from '@/service/api';
import { useNaiveForm, useFormRules } from '@/hooks/common/form';
import { $t } from '@/locales';
import { contractRegionOptions, fileBaseName, saveBlobFile } from './shared';

defineOptions({
  name: 'ContractOperateModal'
});

interface Props {
  /** null = add */
  row: Api.ContractManage.ContractRecord | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  submitted: [];
}>();

const show = defineModel<boolean>('show', {
  default: false
});

const isEdit = computed(() => props.row !== null);

const modalTitle = computed(() =>
  isEdit.value
    ? $t('page.contractManage.basicInfo.edit')
    : $t('page.contractManage.basicInfo.add')
);

/** region select options */
const regionOptions = contractRegionOptions;

const completionStatusOptions = computed(() => [
  { label: $t('page.contractManage.basicInfo.completionDone'), value: '1' },
  { label: $t('page.contractManage.basicInfo.completionUndone'), value: '2' }
]);

interface ContractFormModel {
  contractNo: string;
  /** "YYYY-MM" */
  month: string | null;
  region: string | null;
  companyName: string;
  projectType: string;
  contractAmount: number | null;
  costSiteAudit: number | null;
  costExpertReview: number | null;
  costIntermediaryFee: number | null;
  costReportCommission: number | null;
  costQualification: number | null;
  costSalesmanCommission: number | null;
  contactPerson: string;
  contactPhone: string;
  /** "YYYY-MM-DD" */
  signDate: string | null;
  completionStatus: Api.ContractManage.CompletionStatus;
}

function createDefaultModel(): ContractFormModel {
  return {
    contractNo: '',
    month: null,
    region: null,
    companyName: '',
    projectType: '',
    contractAmount: null,
    costSiteAudit: null,
    costExpertReview: null,
    costIntermediaryFee: null,
    costReportCommission: null,
    costQualification: null,
    costSalesmanCommission: null,
    contactPerson: '',
    contactPhone: '',
    signDate: null,
    completionStatus: '2'
  };
}

const formModel = reactive<ContractFormModel>(createDefaultModel());

const { formRef, validate, restoreValidation } = useNaiveForm();
const { defaultRequiredRule, patternRules } = useFormRules();

type RuleKey =
  | 'contractNo'
  | 'month'
  | 'region'
  | 'companyName'
  | 'projectType'
  | 'contractAmount'
  | 'contactPerson'
  | 'signDate'
  | 'completionStatus';

type ContractFormRules = Record<RuleKey, App.Global.FormRule> & {
  contactPhone: App.Global.FormRule[];
};

const rules: ContractFormRules = {
  contractNo: defaultRequiredRule,
  month: defaultRequiredRule,
  region: defaultRequiredRule,
  companyName: defaultRequiredRule,
  projectType: defaultRequiredRule,
  contractAmount: defaultRequiredRule,
  contactPerson: defaultRequiredRule,
  contactPhone: [defaultRequiredRule, patternRules.phone],
  signDate: defaultRequiredRule,
  completionStatus: defaultRequiredRule
};

/** ---------- contract file upload ---------- */
const uploadFileList = ref<UploadFileInfo[]>([]);
const uploadLoading = ref(false);
/** add mode: staged file key returned by uploadContract; empty = not uploaded yet */
const tempKey = ref('');
/** add mode: camelCase names of fields the parser could not extract */
const missingFields = ref<string[]>([]);
/** edit mode: re-upload file to overwrite the old contract on save */
const newFile = ref<File | null>(null);

async function handleContractFileChange({ fileList }: { fileList: UploadFileInfo[] }) {
  const info = fileList.at(-1);
  // keep at most one entry so a re-pick replaces the previous one
  uploadFileList.value = info ? [info] : [];
  const file = info?.file ?? null;

  if (!file) {
    // file removed: reset the staged state
    tempKey.value = '';
    missingFields.value = [];
    newFile.value = null;
    return;
  }

  if (isEdit.value) {
    // edit: the file goes into the update request directly, no pre-upload needed
    newFile.value = file;
    return;
  }

  // add: pre-upload the .doc for parsing, tempKey links the staged file on submit
  tempKey.value = '';
  missingFields.value = [];
  uploadLoading.value = true;
  const { data, error } = await fetchUploadContract(file);
  uploadLoading.value = false;

  if (error || !data) {
    window.$message?.error($t('page.contractManage.operate.uploadFailed'));
    uploadFileList.value = [];
    return;
  }

  tempKey.value = data.tempKey;
  missingFields.value = data.missing;
  // prefill parsed fields (all editable afterwards)
  if (data.contractNo) formModel.contractNo = data.contractNo;
  if (data.month) formModel.month = data.month;
  if (data.region) formModel.region = data.region;
  if (data.companyName) formModel.companyName = data.companyName;
  if (data.projectType) formModel.projectType = data.projectType;
  if (data.contractAmount !== null) formModel.contractAmount = data.contractAmount;
  if (data.contactPerson) formModel.contactPerson = data.contactPerson;
  if (data.contactPhone) formModel.contactPhone = data.contactPhone;
  if (data.signDate) formModel.signDate = data.signDate;
}

/** ---------- pdf contract upload (archive copy, no parsing; add = required, edit = optional overwrite) ---------- */
const pdfFileList = ref<UploadFileInfo[]>([]);
const pdfFile = ref<File | null>(null);

function handlePdfFileChange({ fileList }: { fileList: UploadFileInfo[] }) {
  const info = fileList.at(-1);
  // keep at most one entry so a re-pick replaces the previous one
  pdfFileList.value = info ? [info] : [];
  pdfFile.value = info?.file ?? null;
}

/** ---------- already uploaded files (edit mode): file name display + download ---------- */
const currentWordFileName = computed(() => fileBaseName(props.row?.contractFile));
const currentPdfFileName = computed(() => fileBaseName(props.row?.contractPdfFile));

async function downloadCurrentWord() {
  if (!props.row) {
    return;
  }
  try {
    const { data, error } = await fetchDownloadContract(props.row.id);
    if (error || !data) {
      return;
    }
    await saveBlobFile(data, currentWordFileName.value || `${props.row.contractNo}.doc`);
  } catch (e) {
    window.$message?.error(e instanceof Error ? e.message : String(e));
  }
}

async function downloadCurrentPdf() {
  if (!props.row) {
    return;
  }
  try {
    const { data, error } = await fetchDownloadContractPdf(props.row.id);
    if (error || !data) {
      return;
    }
    await saveBlobFile(data, currentPdfFileName.value || `${props.row.contractNo}.pdf`);
  } catch (e) {
    window.$message?.error(e instanceof Error ? e.message : String(e));
  }
}

/** ---------- month auto derivation from sign date ---------- */
// month is hidden in the form; it is always derived from the sign date and submitted silently
watch(
  () => formModel.signDate,
  signDate => {
    formModel.month = signDate ? dayjs(signDate).format('YYYY-MM') : null;
  }
);

/** expiry date display: sign date + 1 year (the backend computes and stores it on save, readonly here) */
const expireDateDisplay = computed(() =>
  formModel.signDate ? dayjs(formModel.signDate).add(1, 'year').format('YYYY-MM-DD') : null
);

/** gross profit display: contract amount - cost sum (the backend computes and stores it on save, readonly here) */
const grossProfitDisplay = computed(() => {
  if (formModel.contractAmount === null) {
    return null;
  }
  const costSum =
    (formModel.costSiteAudit ?? 0) +
    (formModel.costExpertReview ?? 0) +
    (formModel.costIntermediaryFee ?? 0) +
    (formModel.costReportCommission ?? 0) +
    (formModel.costQualification ?? 0) +
    (formModel.costSalesmanCommission ?? 0);
  return formModel.contractAmount - costSum;
});

/** ---------- init on open ---------- */
function initForm() {
  uploadFileList.value = [];
  tempKey.value = '';
  missingFields.value = [];
  newFile.value = null;
  pdfFileList.value = [];
  pdfFile.value = null;

  if (props.row) {
    Object.assign(formModel, createDefaultModel(), {
      contractNo: props.row.contractNo,
      month: props.row.month,
      region: props.row.region,
      companyName: props.row.companyName,
      projectType: props.row.projectType,
      contractAmount: props.row.contractAmount,
      costSiteAudit: props.row.costSiteAudit,
      costExpertReview: props.row.costExpertReview,
      costIntermediaryFee: props.row.costIntermediaryFee,
      costReportCommission: props.row.costReportCommission,
      costQualification: props.row.costQualification,
      costSalesmanCommission: props.row.costSalesmanCommission,
      contactPerson: props.row.contactPerson,
      contactPhone: props.row.contactPhone,
      signDate: props.row.signDate,
      completionStatus: props.row.completionStatus
    });
  } else {
    Object.assign(formModel, createDefaultModel());
  }
  restoreValidation();
}

watch(show, visible => {
  if (visible) {
    initForm();
  }
});

/** ---------- submit ---------- */
const submitLoading = ref(false);

/** add mode: saving is blocked until BOTH contract copies are uploaded (Word staged via tempKey + PDF file) */
const saveDisabled = computed(() => !isEdit.value && (!tempKey.value || !pdfFile.value));

async function handleSubmit() {
  await validate();

  if (saveDisabled.value) {
    return;
  }

  submitLoading.value = true;

  try {
    if (isEdit.value && props.row) {
      const { error } = await fetchUpdateContract(
        {
          id: props.row.id,
          month: formModel.month!,
          region: formModel.region!,
          companyName: formModel.companyName,
          projectType: formModel.projectType,
          contractAmount: formModel.contractAmount!,
          costSiteAudit: formModel.costSiteAudit,
          costExpertReview: formModel.costExpertReview,
          costIntermediaryFee: formModel.costIntermediaryFee,
          costReportCommission: formModel.costReportCommission,
          costQualification: formModel.costQualification,
          costSalesmanCommission: formModel.costSalesmanCommission,
          contactPerson: formModel.contactPerson,
          contactPhone: formModel.contactPhone,
          signDate: formModel.signDate!,
          completionStatus: formModel.completionStatus
        },
        newFile.value,
        pdfFile.value
      );
      if (error) {
        return;
      }
      window.$message?.success($t('common.updateSuccess'));
    } else {
      const { error } = await fetchAddContract(
        {
          tempKey: tempKey.value,
          contractNo: formModel.contractNo,
          month: formModel.month!,
          region: formModel.region!,
          companyName: formModel.companyName,
          projectType: formModel.projectType,
          contractAmount: formModel.contractAmount!,
          costSiteAudit: formModel.costSiteAudit,
          costExpertReview: formModel.costExpertReview,
          costIntermediaryFee: formModel.costIntermediaryFee,
          costReportCommission: formModel.costReportCommission,
          costQualification: formModel.costQualification,
          costSalesmanCommission: formModel.costSalesmanCommission,
          contactPerson: formModel.contactPerson,
          contactPhone: formModel.contactPhone,
          signDate: formModel.signDate!,
          completionStatus: formModel.completionStatus
        },
        pdfFile.value!
      );
      if (error) {
        return;
      }
      window.$message?.success($t('common.addSuccess'));
    }

    show.value = false;
    emit('submitted');
  } finally {
    submitLoading.value = false;
  }
}
</script>

<template>
  <NModal
    v-model:show="show"
    :title="modalTitle"
    preset="card"
    class="w-900px"
    :mask-closable="false"
    display-directive="show"
  >
    <!-- contract files: Word (.doc, parsed for prefill) + PDF copy; both mandatory for add, optional overwrite for edit -->
    <NAlert v-if="!isEdit && missingFields.length" type="warning" class="mb-12px" :show-icon="true">
      {{ $t('page.contractManage.operate.missingFields') }}{{ missingFields.join('、') }}
    </NAlert>
    <NAlert v-if="isEdit && (newFile || pdfFile)" type="info" class="mb-12px" :show-icon="true">
      {{ $t('page.contractManage.operate.replaceTip') }}
    </NAlert>

    <div v-if="!isEdit" class="mb-12px text-12px text-gray-400">
      {{ $t('page.contractManage.operate.uploadTip') }}
    </div>

    <NForm ref="formRef" :model="formModel" :rules="rules" label-placement="left" :label-width="110">
      <NGrid :cols="2" :x-gap="12" responsive="screen" item-responsive>
        <NFormItemGi span="2" :label="isEdit ? $t('page.contractManage.operate.reuploadWord') : $t('page.contractManage.operate.uploadContractWord')">
          <div class="flex-y-center gap-4px">
            <NUpload
              v-model:file-list="uploadFileList"
              accept=".doc"
              :max="1"
              :default-upload="false"
              @change="handleContractFileChange"
            >
              <NButton type="primary" ghost size="small" :loading="uploadLoading">
                <template #icon>
                  <icon-ic-round-upload class="text-icon" />
                </template>
                {{ $t('page.contractManage.operate.selectFile') }}
              </NButton>
            </NUpload>
            <div
              v-if="isEdit && currentWordFileName"
              class="flex-y-center gap-4px whitespace-nowrap text-12px text-gray-500"
            >
              <span class="whitespace-nowrap">{{ $t('page.contractManage.operate.currentFile') }}{{ currentWordFileName }}</span>
              <NButton text type="primary" size="tiny" @click="downloadCurrentWord">
                {{ $t('page.contractManage.operate.download') }}
              </NButton>
            </div>
          </div>
        </NFormItemGi>
        <NFormItemGi span="2" :label="isEdit ? $t('page.contractManage.operate.reuploadPdf') : $t('page.contractManage.operate.uploadContractPdf')">
          <div class="flex-y-center gap-4px">
            <NUpload
              v-model:file-list="pdfFileList"
              accept=".pdf"
              :max="1"
              :default-upload="false"
              @change="handlePdfFileChange"
            >
              <NButton type="primary" ghost size="small">
                <template #icon>
                  <icon-ic-round-upload class="text-icon" />
                </template>
                {{ $t('page.contractManage.operate.selectFile') }}
              </NButton>
            </NUpload>
            <div
              v-if="isEdit && currentPdfFileName"
              class="flex-y-center gap-4px whitespace-nowrap text-12px text-gray-500"
            >
              <span class="whitespace-nowrap">{{ $t('page.contractManage.operate.currentFile') }}{{ currentPdfFileName }}</span>
              <NButton text type="primary" size="tiny" @click="downloadCurrentPdf">
                {{ $t('page.contractManage.operate.download') }}
              </NButton>
            </div>
          </div>
        </NFormItemGi>
        <NFormItemGi span="2" :label="$t('page.contractManage.basicInfo.contractNo')" path="contractNo">
          <NInput
            v-model:value="formModel.contractNo"
            class="w-400px"
            :disabled="isEdit"
            :placeholder="$t('page.contractManage.basicInfo.contractNo')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.signDate')" path="signDate">
          <NDatePicker
            v-model:formatted-value="formModel.signDate"
            type="date"
            clearable
            class="w-full"
            value-format="yyyy-MM-dd"
            :placeholder="$t('page.contractManage.basicInfo.signDate')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.expireDate')">
          <NDatePicker
            :formatted-value="expireDateDisplay"
            type="date"
            disabled
            class="w-full"
            value-format="yyyy-MM-dd"
            :placeholder="$t('page.contractManage.basicInfo.expireDate')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.region')" path="region">
          <NSelect
            v-model:value="formModel.region"
            :options="regionOptions"
            :placeholder="$t('page.contractManage.basicInfo.region')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.companyName')" path="companyName">
          <NInput
            v-model:value="formModel.companyName"
            :placeholder="$t('page.contractManage.basicInfo.companyName')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.projectType')" path="projectType">
          <NInput
            v-model:value="formModel.projectType"
            :placeholder="$t('page.contractManage.basicInfo.projectType')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.contractAmount')" path="contractAmount">
          <NInputNumber
            v-model:value="formModel.contractAmount"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.contractAmount')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.contactPerson')" path="contactPerson">
          <NInput
            v-model:value="formModel.contactPerson"
            :placeholder="$t('page.contractManage.basicInfo.contactPerson')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.contactPhone')" path="contactPhone">
          <NInput
            v-model:value="formModel.contactPhone"
            :placeholder="$t('page.contractManage.basicInfo.contactPhone')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.costSiteAudit')" path="costSiteAudit">
          <NInputNumber
            v-model:value="formModel.costSiteAudit"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.costSiteAudit')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.costExpertReview')" path="costExpertReview">
          <NInputNumber
            v-model:value="formModel.costExpertReview"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.costExpertReview')"
          />
        </NFormItemGi>
        <NFormItemGi
          span="1 m:1"
          :label="$t('page.contractManage.basicInfo.costIntermediaryFee')"
          path="costIntermediaryFee"
        >
          <NInputNumber
            v-model:value="formModel.costIntermediaryFee"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.costIntermediaryFee')"
          />
        </NFormItemGi>
        <NFormItemGi
          span="1 m:1"
          :label="$t('page.contractManage.basicInfo.costReportCommission')"
          path="costReportCommission"
        >
          <NInputNumber
            v-model:value="formModel.costReportCommission"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.costReportCommission')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.costQualification')" path="costQualification">
          <NInputNumber
            v-model:value="formModel.costQualification"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.costQualification')"
          />
        </NFormItemGi>
        <NFormItemGi
          span="1 m:1"
          :label="$t('page.contractManage.basicInfo.costSalesmanCommission')"
          path="costSalesmanCommission"
        >
          <NInputNumber
            v-model:value="formModel.costSalesmanCommission"
            :min="0"
            :precision="2"
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.costSalesmanCommission')"
          />
        </NFormItemGi>
        <NFormItemGi span="1 m:1" :label="$t('page.contractManage.basicInfo.grossProfit')">
          <NInputNumber
            :value="grossProfitDisplay"
            :precision="2"
            disabled
            class="w-full"
            :placeholder="$t('page.contractManage.basicInfo.grossProfit')"
          />
        </NFormItemGi>
        <NFormItemGi
          span="1 m:1"
          :label="$t('page.contractManage.basicInfo.completionStatus')"
          path="completionStatus"
        >
          <NSelect
            v-model:value="formModel.completionStatus"
            :options="completionStatusOptions"
            :placeholder="$t('page.contractManage.basicInfo.completionStatus')"
          />
        </NFormItemGi>
      </NGrid>
    </NForm>

    <template #footer>
      <NSpace justify="end">
        <NButton @click="show = false">{{ $t('common.cancel') }}</NButton>
        <NButton type="primary" :disabled="saveDisabled" :loading="submitLoading" @click="handleSubmit">
          {{ $t('common.confirm') }}
        </NButton>
      </NSpace>
    </template>
  </NModal>
</template>
