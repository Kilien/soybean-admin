<script setup lang="tsx">
import { reactive } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';

defineOptions({
  name: 'UserOperateDrawer'
});

const { formRef, validate } = useNaiveForm();
const { defaultNumberRule } = useFormRules();

type Model = Pick<
  Api.SystemManage.Order,
  | 'exchangPriceSwitch'
  | 'syncNumber'
  | 'syncIterval'
  | 'prepaidOrderExpiryTime'
  | 'contractExpiryTime'
  | 'orderExpiryTime'
  | 'exchangeExpiryTime'
>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    exchangPriceSwitch: true,
    syncNumber: 10,
    syncIterval: 1,
    prepaidOrderExpiryTime: 60,
    contractExpiryTime: 180,
    orderExpiryTime: 60,
    exchangeExpiryTime: 30
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
      size="large"
      class="sm:flex-1-hidden card-wrapper"
    >
      <NForm ref="formRef" size="large" :model="model" :rules="rules">
        <NFormItem :label="$t('page.manage.system.exchangPriceSwitch')" path="switch">
          <NSwitch v-model:value="model.exchangPriceSwitch" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.system.syncNumber')" path="syncNumber">
          <NInputNumber v-model:value="model.syncNumber" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.system.syncIterval')" path="syncIterval">
          <NInputNumber v-model:value="model.syncIterval" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.system.prepaidOrderExpiryTime')" path="prepaidOrderExpiryTime">
          <NInputNumber v-model:value="model.prepaidOrderExpiryTime" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.system.contractExpiryTime')" path="contractExpiryTime">
          <NInputNumber v-model:value="model.contractExpiryTime" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.system.orderExpiryTime')" path="orderExpiryTime">
          <NInputNumber v-model:value="model.orderExpiryTime" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.system.exchangeExpiryTime')" path="exchangeExpiryTime">
          <NInputNumber v-model:value="model.exchangeExpiryTime" />
        </NFormItem>

        <NSpace :size="18" class="mt-10">
          <NButton @click="handleInitModel">{{ $t('common.reset') }}</NButton>
          <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </NForm>
    </NCard>
  </div>
</template>

<style scoped></style>
