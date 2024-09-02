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

type Model = Pick<Api.SystemManage.Contract, 'unblockHash' | 'usdtEarnHash' | 'buyPointHash'>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    unblockHash: '',
    usdtEarnHash: '',
    buyPointHash: ''
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
      <NSpace vertical :class="appStore.isMobile ? '' : 'pl-20'">
        <NForm ref="formRef" size="large" :model="model" :rules="rules">
          <NFormItem :label="$t('page.manage.contract.unblockHash')" path="unblockHash">
            <NInput v-model:value="model.unblockHash" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.contract.usdtEarnHash')" path="usdtEarnHash">
            <NInput v-model:value="model.usdtEarnHash" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.contract.buyPointHash')" path="buyPointHash">
            <NInput v-model:value="model.buyPointHash" />
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
