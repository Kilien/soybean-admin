<script setup lang="ts">
import HeaderBanner from './modules/header-banner.vue';
import CardData from './modules/card-data.vue';
import MoneyData from './modules/money-data.vue';
import CoinData from './modules/coin-data.vue';
</script>

<template>
  <NSpace vertical :size="16">
    <HeaderBanner />
    <CardData />
    <CoinData />
    <MoneyData />
  </NSpace>
</template>

<style scoped></style>
