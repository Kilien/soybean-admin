<script setup lang="tsx">
import { NButton } from 'naive-ui';
import { fetchUserList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import UserOperateDrawer from './modules/user-operate-drawer.vue';

const appStore = useAppStore();

const { columns, columnChecks, data, getData, getDataByPage, loading, mobilePagination } = useTable({
  apiFn: fetchUserList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10
    // if you want to use the searchParams in Form, you need to define the following properties, and the value is null
    // the value can not be undefined, otherwise the property in Form will not be reactive
  },
  columns: () => [
    {
      key: 'id',
      title: $t('page.user.id'),
      align: 'center',
      width: 64
    },
    {
      key: 'address',
      title: $t('page.user.address'),
      align: 'center',
      minWidth: 200
    },
    {
      key: 'unblock',
      title: $t('page.user.unblock'),
      align: 'center',
      width: 50
    },
    {
      key: 'proxyLevel',
      title: $t('page.user.proxyLevel'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'teamLevel',
      title: $t('page.user.teamLevel'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'invsterAddress',
      title: $t('page.user.invsterAddress'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'bondTime',
      title: $t('page.user.bondTime'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'teamAmount',
      title: $t('page.user.teamAmount'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'point',
      title: $t('page.user.point'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'card',
      title: $t('page.user.card'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'gridGain',
      title: $t('page.user.gridGain'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'proxyGain',
      title: $t('page.user.proxyGain'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'teamGain',
      title: $t('page.user.teamGain'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'unblockGain',
      title: $t('page.user.unblockGain'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'createTime',
      title: $t('page.user.creactTime'),
      align: 'center',
      minWidth: 100
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
  checkedRowKeys
  // closeDrawer
} = useTableOperate(data, getData);

function edit(id: number) {
  handleEdit(id);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('用户管理')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation
          v-model:columns="columnChecks"
          :disabled-delete="true"
          :disabled-add="true"
          :loading="loading"
          @add="handleAdd"
          @refresh="getData"
        />
      </template>
      <NDataTable
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

<style scoped></style>
