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
  Api.SystemManage.TeamLevel,
  | 'V5Yield'
  | 'V4Yield'
  | 'V3Yield'
  | 'V2Yield'
  | 'V1Yield'
  | 'V5Inviter'
  | 'V4Inviter'
  | 'V3Inviter'
  | 'V2Inviter'
  | 'V5Ratio'
  | 'V4Ratio'
  | 'V3Ratio'
  | 'V2Ratio'
  | 'V1Ratio'
>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    V5Yield: 0,
    V4Yield: 0,
    V3Yield: 0,
    V2Yield: 0,
    V1Yield: 0,
    V5Inviter: 0,
    V4Inviter: 0,
    V3Inviter: 0,
    V2Inviter: 0,
    V5Ratio: 0,
    V4Ratio: 0,
    V3Ratio: 0,
    V2Ratio: 0,
    V1Ratio: 0
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
      class="sm:flex-1-hidden overflow-y-scroll card-wrapper"
    >
      <NSpace vertical :class="appStore.isMobile ? '' : 'pl-20'">
        <NForm ref="formRef" size="large" :model="model" :rules="rules">
          <NFormItem :label="$t('page.manage.teamLevel.V5Yield')" path="V5Yield">
            <NInputNumber v-model:value="model.V5Yield" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V4Yield')" path="V4Yield">
            <NInputNumber v-model:value="model.V4Yield" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V3Yield')" path="V3Yield">
            <NInputNumber v-model:value="model.V3Yield" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V2Yield')" path="V2Yield">
            <NInputNumber v-model:value="model.V2Yield" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V1Yield')" path="V1Yield">
            <NInputNumber v-model:value="model.V1Yield" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V5Inviter')" path="V5Inviter">
            <NInputNumber v-model:value="model.V5Yield" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V4Inviter')" path="V4Inviter">
            <NInputNumber v-model:value="model.V4Inviter" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V3Inviter')" path="V3Inviter">
            <NInputNumber v-model:value="model.V3Inviter" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V2Inviter')" path="V2Inviter">
            <NInputNumber v-model:value="model.V2Inviter" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V5Ratio')" path="V5Ratio">
            <NInputNumber v-model:value="model.V5Ratio" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V4Ratio')" path="V4Ratio">
            <NInputNumber v-model:value="model.V4Ratio" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V3Ratio')" path="V3Ratio">
            <NInputNumber v-model:value="model.V3Ratio" />
          </NFormItem>
          <NInputNumber v-model:value="model.V2Ratio" />
          <NFormItem :label="$t('page.manage.teamLevel.')" path="V2Ratio">
            <NInputNumber v-model:value="model.V2Ratio" />
          </NFormItem>
          <NFormItem :label="$t('page.manage.teamLevel.V1Ratio')" path="V1Ratio">
            <NInputNumber v-model:value="model.V1Ratio" />
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
