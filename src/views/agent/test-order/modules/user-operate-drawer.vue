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
  rowData?: Api.TestOrder.Order | null;
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
    add: $t('page.agent.newOrder'),
    edit: $t('page.manage.user.editUser')
  };
  return titles[props.operateType];
});

type Model = Pick<Api.TestOrder.Order, 'address' | 'price' | 'parts' | 'matrix' | 'cash' | 'addTime'>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    address: '',
    matrix: {
      id: 0,
      logo: '',
      store: 0
    },
    parts: 0,
    price: 0,
    cash: 0,
    addTime: ''
  };
}

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
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model">
        <NFormItem :label="$t('page.agent.address')" path="address">
          <NInput v-model:value="model.address" :placeholder="$t('page.manage.user.form.userName')" />
        </NFormItem>
        <NFormItem :label="$t('page.agent.store')" path="nickName">
          <NInputNumber v-model:value="model.matrix.store" clearable />
        </NFormItem>
        <NFormItem :label="$t('page.agent.amount')" path="userPhone">
          <NInputNumber v-model:value="model.parts" clearable />
        </NFormItem>
        <NFormItem :label="$t('page.agent.actualAmount')" path="userPhone">
          <NInputNumber v-model:value="model.price" clearable />
        </NFormItem>
        <NFormItem :label="$t('page.agent.cash')" path="userPhone">
          <NInputNumber v-model:value="model.cash" clearable />
        </NFormItem>
        <NFormItem :label="$t('page.agent.addTime')" path="userPhone">
          <NInput v-model:value="model.addTime" clearable />
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
