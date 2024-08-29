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
  rowData?: Api.UserManage.User | null;
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
    add: $t('page.user.newLevel'),
    edit: $t('page.user.editLevel')
  };
  return titles[props.operateType];
});

type Model = Pick<Api.UserManage.User, 'teamLevel' | 'proxyLevel' | 'point' | 'card'>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    teamLevel: '',
    proxyLevel: '',
    point: 0,
    card: 0
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
    // getRoleOptions();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model">
        <NFormItem :label="$t('page.user.teamLevel')" path="teamLevel">
          <NInput v-model:value="model.teamLevel" :placeholder="$t('page.user.inputLevel')" />
        </NFormItem>
        <NFormItem :label="$t('page.user.proxyLevel')" path="proxyLevel">
          <NInput v-model:value="model.proxyLevel" :placeholder="$t('page.user.inputLevel')" />
        </NFormItem>
        <NFormItem :label="$t('page.user.point')" path="point">
          <NInputNumber v-model:value="model.point" />
        </NFormItem>
        <NFormItem :label="$t('page.user.card')" path="card">
          <NInputNumber v-model:value="model.card" />
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
