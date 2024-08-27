<script setup lang="tsx">
import { fetchTestOrderList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import UserOperateDrawer from './modules/user-operate-drawer.vue';

const appStore = useAppStore();

const { columns, columnChecks, data, getData, getDataByPage, loading, mobilePagination } = useTable({
  apiFn: fetchTestOrderList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    // if you want to use the searchParams in Form, you need to define the following properties, and the value is null
    // the value can not be undefined, otherwise the property in Form will not be reactive
    address: null,
    parts: null
  },
  columns: () => [
    {
      type: 'selection',
      align: 'center',
      width: 48
    },
    {
      key: 'address',
      title: $t('page.agent.address'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'matrix',
      title: $t('page.agent.matrix'),
      align: 'center',
      minWidth: 200,
      render: row => {
        if (row.status === null) {
          return null;
        }
        return (
          <n-space justify="space-around">
            <span class="text-14px">#{row.matrix.id}</span>
            <n-image width="28" src={row.matrix.logo} />
            <span class="text-14px">{row.matrix.store}</span>
          </n-space>
        );
      }
    },
    {
      key: 'parts',
      title: $t('page.agent.parts'),
      align: 'center',
      width: 68
    },
    {
      key: 'actualAmount',
      title: $t('page.agent.actualAmount'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'price',
      title: $t('page.agent.price'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'totalAmount',
      title: $t('page.agent.totalAmount'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'cash',
      title: $t('page.agent.cash'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'actualClaim',
      title: $t('page.agent.actualClaim'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'estimatedRevenue',
      title: $t('page.agent.estimatedRevenue'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'surplus',
      title: $t('page.agent.surplus'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'status',
      title: $t('page.agent.status'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'timeline',
      title: $t('page.agent.timeline'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'addTime',
      title: $t('page.agent.addTime'),
      align: 'center',
      minWidth: 100
    }
  ]
});

const {
  drawerVisible,
  operateType,
  editingData,
  handleAdd,
  checkedRowKeys,
  onBatchDeleted
  // closeDrawer
} = useTableOperate(data, getData);

async function handleBatchDelete() {
  // request
  console.log(checkedRowKeys.value);

  onBatchDeleted();
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('订单列表')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
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
