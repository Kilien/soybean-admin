<script setup lang="tsx">
import { h, onMounted, ref } from 'vue';
import { NButton, NIcon, NTag } from 'naive-ui';
import Sortable from 'sortablejs';
import Move from '@vicons/ionicons5/es/Move';
import { fetchInvestmentTag } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { enableStatusRecord } from '@/constants/business';
import UserOperateDrawer from './modules/user-operate-drawer.vue';

const appStore = useAppStore();
const tableRef = ref();
const sortable = ref();
const { columns, columnChecks, data, getData, getDataByPage, loading, mobilePagination } = useTable({
  apiFn: fetchInvestmentTag,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    // if you want to use the searchParams in Form, you need to define the following properties, and the value is null
    // the value can not be undefined, otherwise the property in Form will not be reactive
    label: null,
    status: null
  },
  columns: () => [
    {
      title: $t('page.project.drag'),
      key: 'index',
      width: 70,
      align: 'center',
      render: () =>
        h('div', { class: 'my-handle' }, h(NIcon, {}, { default: () => h(Move, { style: { color: '#333333' } }) }))
    },
    {
      key: 'id',
      title: $t('page.project.tagId'),
      align: 'center',
      width: 64
    },
    {
      key: 'label',
      title: $t('page.project.tagLabel'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'status',
      title: $t('page.project.tagStatus'),
      align: 'center',
      minWidth: 100,
      render: row => {
        if (row.status === null) {
          return null;
        }

        const tagMap: Record<Api.Common.EnableStatus, NaiveUI.ThemeColor> = {
          1: 'success',
          2: 'warning'
        };

        const label = $t(enableStatusRecord[row.status]);

        return <NTag type={tagMap[row.status]}>{label}</NTag>;
      }
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 130,
      render: row => (
        <div class="flex-center gap-8px">
          <NButton type="primary" ghost size="small" onClick={() => edit(row.id)}>
            {$t('common.edit')}
          </NButton>
        </div>
      )
    }
  ]
});

const {
  drawerVisible,
  operateType,
  editingData,
  handleAdd,
  handleEdit,
  checkedRowKeys,
  onBatchDeleted
  // closeDrawer
} = useTableOperate(data, getData);

function setSort() {
  const el = tableRef.value.$el.querySelectorAll('.n-data-table-table >   .n-data-table-tbody')[0];
  sortable.value = Sortable.create(el, {
    ghostClass: 'sortable-ghost',
    handle: '.my-handle',
    setData(dataTransfer) {
      dataTransfer.setData('Text', '');
    },
    onEnd: e => {
      const cloneData = data.value;
      const swapElements = (array: any, index1: number, index2: number) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
        const temp = array[index1].index;
        array[index1].index = array[index2].index;
        array[index2].index = temp;
        return array;
      };
      // console.log('swap...', swapElements(cloneData, e?.oldIndex, e.newIndex));
      swapElements(cloneData, e?.oldIndex, e.newIndex);
    }
  });
}

onMounted(async () => {
  await getData();
  setSort();
});

async function handleBatchDelete() {
  // request
  console.log(checkedRowKeys.value);

  onBatchDeleted();
}

function edit(id: number) {
  handleEdit(id);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('标签管理')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation
          v-model:columns="columnChecks"
          :disabled-delete="true"
          :loading="loading"
          @add="handleAdd"
          @delete="handleBatchDelete"
          @refresh="getData"
        />
      </template>
      <NDataTable
        ref="tableRef"
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="!appStore.isMobile"
        :scroll-x="962"
        :loading="loading"
        remote
        :row-key="row => row.id"
        :pagination="mobilePagination"
        class="sm:h-full"
      />
      <UserOperateDrawer
        v-model:visible="drawerVisible"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getDataByPage"
      />
    </NCard>
  </div>
</template>

<style lang="scss" scoped>
:deep(.sortable-ghost) {
  opacity: 0.8;
  color: #fff !important;
  background: #42b983 !important;
}

:deep(.n-data-table .n-data-table-td .my-handle) {
  display: block;
  cursor: move;
  cursor: -webkit-grabbing;
}
</style>
