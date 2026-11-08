<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import type { UploadFileInfo } from 'naive-ui';
import { fetchUploadReport } from '@/service/api';
import { $t } from '@/locales';

defineOptions({
  name: 'ReportUploadModal'
});

interface Props {
  row: Api.ContractManage.ContractRecord | null;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  submitted: [];
}>();

const show = defineModel<boolean>('show', {
  default: false
});

const uploadFileList = ref<UploadFileInfo[]>([]);
const submitLoading = ref(false);

const modalTitle = computed(() => $t('page.contractManage.report.upload'));

const file = computed(() => uploadFileList.value.at(-1)?.file ?? null);

function handleFileChange({ fileList }: { fileList: UploadFileInfo[] }) {
  // keep at most one entry so a re-pick replaces the previous one
  uploadFileList.value = fileList.at(-1) ? [fileList.at(-1)!] : [];
}

watch(show, visible => {
  if (visible) {
    uploadFileList.value = [];
  }
});

async function handleSubmit() {
  if (!file.value || !props.row) {
    return;
  }

  submitLoading.value = true;
  try {
    // overwrite style: the new report replaces the old one
    const { error } = await fetchUploadReport(props.row.id, file.value);
    if (error) {
      return;
    }
    window.$message?.success($t('common.updateSuccess'));
    show.value = false;
    emit('submitted');
  } finally {
    submitLoading.value = false;
  }
}
</script>

<template>
  <NModal v-model:show="show" :title="modalTitle" preset="card" class="w-480px" display-directive="show">
    <div class="mb-12px text-12px text-gray-400">
      {{ $t('page.contractManage.report.uploadTip') }}（{{ props.row?.contractNo }}）
    </div>
    <NUpload
      v-model:file-list="uploadFileList"
      accept=".pdf,.png,.jpg,.jpeg"
      :max="1"
      :default-upload="false"
      @change="handleFileChange"
    >
      <NButton type="primary" ghost size="small">
        <template #icon>
          <icon-ic-round-upload-file class="text-icon" />
        </template>
        {{ $t('page.contractManage.report.upload') }}
      </NButton>
    </NUpload>

    <template #footer>
      <NSpace justify="end">
        <NButton @click="show = false">{{ $t('common.cancel') }}</NButton>
        <NButton type="primary" :disabled="!file" :loading="submitLoading" @click="handleSubmit">
          {{ $t('common.confirm') }}
        </NButton>
      </NSpace>
    </template>
  </NModal>
</template>
