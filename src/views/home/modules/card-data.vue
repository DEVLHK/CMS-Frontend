<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import { fetchGetHomeStats } from '@/service/api';
import { $t } from '@/locales';
import { useThemeStore } from '@/store/modules/theme';

defineOptions({
  name: 'CardData'
});

interface CardData {
  key: string;
  title: string;
  value: number;
  prefix: string;
  decimals: number;
  color: {
    start: string;
    end: string;
  };
  icon: string;
}

const stats = ref<Api.HomeManage.HomeStats | null>(null);

onMounted(async () => {
  const { data, error } = await fetchGetHomeStats();
  if (!error && data) {
    stats.value = data;
  }
});

const cardData = computed<CardData[]>(() => [
  {
    key: 'contractCount',
    title: $t('page.home.contractCount'),
    value: stats.value?.contractCount ?? 0,
    prefix: '',
    decimals: 0,
    color: {
      start: '#ec4786',
      end: '#b955a4'
    },
    icon: 'ant-design:bar-chart-outlined'
  },
  {
    key: 'contractAmount',
    title: $t('page.home.contractAmount'),
    value: stats.value?.totalContractAmount ?? 0,
    prefix: '¥',
    decimals: 2,
    color: {
      start: '#865ec0',
      end: '#5144b4'
    },
    icon: 'ant-design:money-collect-outlined'
  },
  {
    key: 'receiptAmount',
    title: $t('page.home.receiptAmount'),
    value: stats.value?.totalReceiptAmount ?? 0,
    prefix: '¥',
    decimals: 2,
    color: {
      start: '#56cdf3',
      end: '#719de3'
    },
    icon: 'ant-design:pay-circle-outlined'
  },
  {
    key: 'grossProfit',
    title: $t('page.home.grossProfit'),
    value: stats.value?.totalGrossProfit ?? 0,
    prefix: '¥',
    decimals: 2,
    color: {
      start: '#fcbc25',
      end: '#f68057'
    },
    icon: 'ant-design:trademark-circle-outlined'
  }
]);

interface GradientBgProps {
  gradientColor: string;
}

const [DefineGradientBg, GradientBg] = createReusableTemplate<GradientBgProps>();

const themeStore = useThemeStore();

function getGradientColor(color: CardData['color']) {
  return `linear-gradient(to bottom right, ${color.start}, ${color.end})`;
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <!-- define component start: GradientBg -->
    <DefineGradientBg v-slot="{ $slots, gradientColor }">
      <div
        class="px-16px pb-4px pt-8px text-white"
        :style="{ backgroundImage: gradientColor, borderRadius: themeStore.themeRadius + 'px' }"
      >
        <component :is="$slots.default" />
      </div>
    </DefineGradientBg>
    <!-- define component end: GradientBg -->

    <NGrid cols="s:1 m:2 l:4" responsive="screen" :x-gap="16" :y-gap="16">
      <NGi v-for="item in cardData" :key="item.key">
        <GradientBg :gradient-color="getGradientColor(item.color)" class="flex-1">
          <h3 class="text-16px">{{ item.title }}</h3>
          <div class="flex justify-between pt-12px">
            <SvgIcon :icon="item.icon" class="text-32px" />
            <CountTo
              :prefix="item.prefix"
              :decimals="item.decimals"
              :start-value="1"
              :end-value="item.value"
              class="text-30px text-white dark:text-dark"
            />
          </div>
        </GradientBg>
      </NGi>
    </NGrid>
  </NCard>
</template>

<style scoped></style>
