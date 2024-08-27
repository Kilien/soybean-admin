<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import type { UploadFileInfo } from 'naive-ui/es/upload';
import { useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';
defineOptions({
  name: 'UserOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.SystemManage.User | null;
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
    add: $t('page.matrix.newCoin'),
    edit: $t('page.matrix.editCoin')
  };
  return titles[props.operateType];
});

type Model = Pick<Api.MatrixManage.Coin, 'label' | 'logo' | 'tradePair' | 'price'>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    label: '',
    logo: '',
    price: '',
    tradePair: ''
  };
}

const defaultLogo = reactive<UploadFileInfo[]>([]);

const logo = reactive([]);
const uploadRef = ref();

function handleInitModel() {
  Object.assign(model, createDefaultModel());

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model, props.rowData);
    if (defaultLogo.length) {
      defaultLogo.pop();
      defaultLogo.push({
        id: '1',
        name: model.label,
        status: 'finished',
        url: model.logo
      });
    } else {
      defaultLogo.push({
        id: '1',
        name: model.label,
        status: 'finished',
        url: model.logo
      });
    }
  }
}

function closeDrawer() {
  visible.value = false;
}

async function handleSubmit() {
  await validate();
  // request
  console.log('model...', model, logo);
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

function handleChange(e) {
  console.log('change...', e, uploadRef.value);
}
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model">
        <NFormItem :label="$t('page.matrix.coinLebel')" path="label">
          <NInput v-model:value="model.label" :placeholder="$t('page.matrix.inputCoin')" />
        </NFormItem>
        <NFormItem :label="$t('page.matrix.tradePair')" path="tradePair">
          <NInput v-model:value="model.tradePair" :placeholder="$t('page.matrix.inputPair')" />
        </NFormItem>
        <NFormItem :label="$t('page.matrix.price')" path="price">
          <NInput v-model:value="model.price" />
        </NFormItem>
        <NUpload
          ref="uploadRef"
          :default-file-list="defaultLogo"
          list-type="image-card"
          :max="1"
          :on-change="handleChange"
        >
          点击上传
        </NUpload>
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
