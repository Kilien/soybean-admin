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
    add: $t('page.project.newLogo'),
    edit: $t('page.project.editLogo')
  };
  return titles[props.operateType];
});

type Model = Pick<Api.ProjectManage.Project, 'projectName' | 'projectLogo' | 'shareName' | 'shareLogo' | 'swiper'>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    projectName: '',
    projectLogo: '',
    shareName: '',
    shareLogo: '',
    swiper: []
  };
}

const defaultImageList = reactive<UploadFileInfo[]>([]);
const defaultProjectLogo = reactive<UploadFileInfo[]>([]);
const defaultShareLogo = reactive<UploadFileInfo[]>([]);

const logo = reactive([]);
const uploadRef = ref();

function handleInitModel() {
  Object.assign(model, createDefaultModel());

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model, props.rowData);
    if (defaultImageList.length) {
      defaultProjectLogo.pop();
      defaultProjectLogo.push({
        id: '1',
        name: model.projectName,
        status: 'finished',
        url: model.projectLogo
      });
    } else {
      defaultProjectLogo.push({
        id: '1',
        name: model.projectName,
        status: 'finished',
        url: model.projectLogo
      });
      defaultShareLogo.push({
        id: '1',
        name: model.shareName,
        status: 'finished',
        url: model.shareLogo
      });

      // eslint-disable-next-line no-plusplus
      for (let index = 0; index < model.swiper.length; index++) {
        const element = model.swiper[index];
        defaultImageList.push({
          id: `swiper${index}`,
          name: `swiper${index}`,
          status: 'finished',
          url: element
        });
      }
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

function handleChange(event: Event) {
  console.log('e.target,...', event);
  console.log('uploadRef.value...', uploadRef.value);
}
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="if" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model">
        <NFormItem :label="$t('page.project.projectName')" path="projectName">
          <NInput v-model:value="model.projectName" :placeholder="$t('page.project.inputProject')" />
        </NFormItem>
        <NFormItem :label="$t('page.project.projectLogo')" path="projectLogo">
          <NUpload ref="uploadRef" :default-file-list="defaultProjectLogo" list-type="image-card" :max="1">
            {{ $t('page.common.upload') }}
          </NUpload>
        </NFormItem>
        <NFormItem :label="$t('page.project.shareName')" path="shareName">
          <NInput v-model:value="model.shareName" :placeholder="$t('page.project.inputShare')" />
        </NFormItem>
        <NFormItem :label="$t('page.project.shareLogo')" path="shareLogo">
          <NUpload :default-file-list="defaultShareLogo" list-type="image-card" :max="1">
            {{ $t('page.common.upload') }}
          </NUpload>
        </NFormItem>
        <NFormItem :label="$t('page.project.swiper')" path="swiper">
          <NUpload :default-file-list="defaultImageList" list-type="image-card">{{ $t('page.common.upload') }}</NUpload>
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
