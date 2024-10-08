<script setup lang="ts">
import { computed } from 'vue';
import { createReusableTemplate } from '@vueuse/core';
import { $t } from '@/locales';

defineOptions({
  name: 'MoneyData'
});

interface CardData {
  key: string;
  title: string;
  value: number;
  unit: string;
  color: {
    start: string;
    end: string;
  };
  icon: string;
}

const cardData = computed<CardData[]>(() => [
  {
    key: 'totalInvestmentAmount',
    title: $t('page.home.totalInvestmentAmount'),
    value: 166,
    unit: '',
    color: {
      start: '#FD6E6A',
      end: '#FFC600'
    },
    icon: 'el:usd'
  },
  {
    key: 'totalReward',
    title: $t('page.home.totalReward'),
    value: 93,
    unit: '',
    color: {
      start: '#FD6E6A',
      end: '#FFC600'
    },
    icon: 'el:usd'
  },
  {
    key: 'ongoingAmount',
    title: $t('page.home.ongoingAmount'),
    value: 73,
    unit: '',
    color: {
      start: '#FD6E6A',
      end: '#FFC600'
    },
    icon: 'el:usd'
  },
  {
    key: 'withdrawnCash',
    title: $t('page.home.withdrawnCash'),
    value: 0,
    unit: '',
    color: {
      start: '#FD6E6A',
      end: '#FFC600'
    },
    icon: 'el:usd'
  },
  {
    key: 'undrawnCash',
    title: $t('page.home.undrawnCash'),
    value: 0,
    unit: '',
    color: {
      start: '#FD6E6A',
      end: '#FFC600'
    },
    icon: 'el:usd'
  },
  {
    key: 'failedOrder',
    title: $t('page.home.failedOrder'),
    value: 0,
    unit: '',
    color: {
      start: '#FD6E6A',
      end: '#FFC600'
    },
    icon: 'el:usd'
  }
]);

interface GradientBgProps {
  gradientColor: string;
}

const [DefineGradientBg, GradientBg] = createReusableTemplate<GradientBgProps>();

function getGradientColor(color: CardData['color']) {
  return `linear-gradient(to bottom right, ${color.start}, ${color.end})`;
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <div class="mb-4 text-18px font-bold">{{ $t('page.home.moneyDataTitle') }}</div>
    <!-- define component start: GradientBg -->
    <DefineGradientBg v-slot="{ $slots, gradientColor }">
      <div class="rd-8px px-16px pb-4px pt-8px text-white" :style="{ backgroundImage: gradientColor }">
        <component :is="$slots.default" />
      </div>
    </DefineGradientBg>
    <!-- define component end: GradientBg -->

    <NGrid cols="s:1 m:2 l:3" responsive="screen" :x-gap="16" :y-gap="16">
      <NGi v-for="item in cardData" :key="item.key">
        <GradientBg :gradient-color="getGradientColor(item.color)" class="flex-1">
          <h3 class="text-16px">{{ item.title }}</h3>
          <div class="flex justify-between pt-12px">
            <SvgIcon :icon="item.icon" class="text-32px" />
            <CountTo
              :prefix="item.unit"
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
