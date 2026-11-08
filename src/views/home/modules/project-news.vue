<script setup lang="ts">
import { onActivated, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { fetchGetExpiringContracts } from '@/service/api';
import { $t } from '@/locales';

defineOptions({
  name: 'ExpiringContractNews'
});

const router = useRouter();

const PAGE_SIZE = 10;

const items = ref<Api.HomeManage.ExpiringContractItem[]>([]);
const current = ref(1);
const total = ref(0);
const loading = ref(false);
const hasMore = ref(true);
/** true after the first mount load; onActivated only reloads on re-entry */
const initialized = ref(false);

function resetAndLoad() {
  items.value = [];
  current.value = 1;
  total.value = 0;
  hasMore.value = true;
  loadPage();
}

async function loadPage() {
  if (loading.value || !hasMore.value) {
    return;
  }
  loading.value = true;
  try {
    const { data, error } = await fetchGetExpiringContracts({ current: current.value, pageSize: PAGE_SIZE });
    if (error || !data) {
      return;
    }
    items.value = [...items.value, ...data.records];
    total.value = data.total;
    current.value += 1;
    hasMore.value = items.value.length < data.total;
  } finally {
    loading.value = false;
  }
}

function handleLoad() {
  loadPage();
}

// NInfiniteScroll only fires @load on scroll/wheel; the first page must be loaded on mount
onMounted(async () => {
  await loadPage();
  initialized.value = true;
});

// reload the latest data whenever the page is re-entered (kept-alive case)
onActivated(() => {
  if (initialized.value) {
    resetAndLoad();
  }
});

/** open a new in-system tab for the contract basic-info page, queried by contract no */
function openContract(item: Api.HomeManage.ExpiringContractItem) {
  router.push({ path: '/contract/basic-info', query: { contractNo: item.contractNo } });
}
</script>

<template>
  <NCard
    :bordered="false"
    size="small"
    segmented
    class="card-wrapper overflow-hidden"
    :content-style="{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }"
  >
    <template #header>
      <span class="relative inline-flex whitespace-nowrap">
        {{ $t('page.home.expiringNews.title') }}
        <span
          class="absolute -top-9px -right-16px flex-center min-w-18px rd-full bg-[#d03050] px-3px text-11px font-bold text-white"
          :title="$t('page.home.expiringCount')"
        >
          {{ total }}
        </span>
      </span>
    </template>
    <NInfiniteScroll class="min-h-0 flex-1 overflow-hidden" :distance="10" @load="handleLoad">
      <NList v-if="items.length" :bordered="true">
        <NListItem v-for="item in items" :key="item.id">
          <div class="flex-col gap-4px">
            <div class="flex-y-center justify-between gap-12px">
              <a class="cursor-pointer text-primary font-bold" @click="openContract(item)">
                {{ item.contractNo }}
              </a>
              <span class="font-bold whitespace-nowrap">{{ item.companyName }}</span>
            </div>
            <span class="text-12px text-gray-500">
              {{ $t('page.home.expiringNews.expireDate') }}: {{ item.expireDate }}
            </span>
          </div>
        </NListItem>
      </NList>
      <NEmpty v-else-if="!loading" :description="$t('page.home.expiringNews.empty')" class="pt-24px" />
      <template v-if="loading" #footer>
        <div class="flex justify-center py-12px">
          <NSpin size="small" />
        </div>
      </template>
      <template v-else-if="!hasMore && items.length" #footer>
        <div class="py-8px text-center text-12px text-gray-400">{{ $t('page.home.expiringNews.noMore') }}</div>
      </template>
    </NInfiniteScroll>
  </NCard>
</template>

<style scoped></style>
