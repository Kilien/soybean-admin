<script setup lang="tsx">
import { reactive } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { useAppStore } from '@/store/modules/app';
import { $t } from '@/locales';

defineOptions({
  name: 'UserOperateDrawer'
});

const appStore = useAppStore();
const { formRef, validate } = useNaiveForm();
const { defaultNumberRule } = useFormRules();

type Model = Pick<
  Api.SystemManage.Coin,
  | 'paidCoin'
  | 'paidCoinNumber'
  | 'coinType'
  | 'prohibitedTime'
  | 'values'
  | 'validation1'
  | 'validation2'
  | 'raise'
  | 'normalCoin'
  | 'payCoinText'
>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    paidCoin: '',
    paidCoinNumber: 0,
    coinType: '',
    prohibitedTime: 0,
    values: 0,
    validation1: 0,
    validation2: 0,
    raise: '',
    normalCoin: '',
    payCoinText: ''
  };
}

type RuleKey = Extract<keyof Model, 'userName' | 'status'>;

const rules: Record<RuleKey, App.Global.FormRule> = {
  syncNumber: defaultNumberRule,
  syncIterval: defaultNumberRule,
  prepaidOrderExpiryTime: defaultNumberRule,
  contractExpiryTime: defaultNumberRule,
  orderExpiryTime: defaultNumberRule,
  exchangeExpiryTime: defaultNumberRule
};

function handleInitModel() {
  Object.assign(model, createDefaultModel());
}

async function handleSubmit() {
  await validate();
  // request
  window.$message?.success($t('common.updateSuccess'));
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard
      :title="$t('page.manage.system.config')"
      :bordered="false"
      size="medium"
      class="sm:flex-1-hidden card-wrapper"
    >
      <NSpace vertical :class="appStore.isMobile ? '' : 'pl-20'">
        <NForm ref="formRef" size="medium" :model="model" :rules="rules">
          <NFormItem :label="$t('page.manage.coin.paidCoin')" path="paidCoin">
            <NInput v-model:value="model.paidCoin" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.paidCoinNumber')" path="paidCoinNumber">
            <NInputNumber v-model:value="model.paidCoinNumber" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.coinType')" path="coinType">
            <NInput v-model:value="model.coinType" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.prohibitedTime')" path="prohibitedTime">
            <NInputNumber v-model:value="model.prohibitedTime" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.values')" path="values">
            <NInputNumber v-model:value="model.values" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.validation1')" path="validation1">
            <NInputNumber v-model:value="model.validation1" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.validation2')" path="validation2">
            <NInputNumber v-model:value="model.validation2" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.raise')" path="raise">
            <NInput v-model:value="model.raise" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.normalCoin')" path="normalCoin">
            <NInput v-model:value="model.normalCoin" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.coin.payCoinText')" path="payCoinText">
            <NInput v-model:value="model.payCoinText" />
          </NFormItem>

          <NSpace :size="18" class="mt-5">
            <NButton @click="handleInitModel">{{ $t('common.reset') }}</NButton>
            <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
          </NSpace>
        </NForm>
      </NSpace>
    </NCard>
  </div>
</template>

<style scoped></style>
