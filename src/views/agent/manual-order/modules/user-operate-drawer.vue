<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';
defineOptions({
  name: 'UserOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.AgentManage.Order | null;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'submitted'): void;
}

const emit = defineEmits<Emits>();

const visible = defineModel<boolean>('visible', {
  default: false
});

const { formRef, validate, restoreValidation } = useNaiveForm();

const title = computed(() => {
  const titles: Record<NaiveUI.TableOperateType, string> = {
    add: $t('page.agent.manualBuy'),
    edit: $t('page.manage.user.editUser')
  };
  return titles[props.operateType];
});

type Model = Pick<Api.AgentManage.Order, 'address' | 'type' | 'curPrice' | 'price' | 'amount'>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    address: '',
    type: '1',
    curPrice: '',
    price: '',
    amount: ''
  };
}

const options = reactive([
  {
    label: $t('page.agent.limitOrder'),
    value: '1'
  },
  {
    label: $t('page.agent.marketOrder'),
    value: '2'
  }
]);

function handleInitModel() {
  Object.assign(model, createDefaultModel());

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model, props.rowData);
  }
}

function closeDrawer() {
  visible.value = false;
}

async function handleSubmit() {
  await validate();
  // request
  window.$message?.success($t('common.updateSuccess'));
  closeDrawer();
  emit('submitted');
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel();
    restoreValidation();
    // getRoleOptions();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model">
        <NFormItem :label="$t('page.manage.user.userName')" path="address">
          <NInput v-model:value="model.address" :placeholder="$t('page.manage.user.form.userName')" />
        </NFormItem>
        <NFormItem :label="$t('page.agent.apiKey')" path="apiKey">
          <NInput disabled value="sdf1as5d6f12f3s" :placeholder="$t('page.agent.inputKey')" />
        </NFormItem>
        <NFormItem :label="$t('page.agent.tradePair')" path="tread">
          <NInput value="SDTBNB" disabled />
        </NFormItem>
        <NFormItem :label="$t('page.agent.curPrice')" path="curPrice">
          <NInput v-model:value="model.curPrice" disabled />
        </NFormItem>
        <NFormItem :label="$t('page.agent.status')" path="type">
          <NSelect v-model:value="model.type" :options="options" />
        </NFormItem>
        <NFormItem :label="$t('page.agent.price')" path="price">
          <NInput v-model:value="model.curPrice" />
        </NFormItem>
        <NFormItem :label="$t('page.agent.amount')" path="amount">
          <NInput v-model:value="model.curPrice" />
        </NFormItem>
      </NForm>
      <template #footer>
        <NSpace :size="16">
          <NButton @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped></style>
