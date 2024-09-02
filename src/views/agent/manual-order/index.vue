<script setup lang="tsx">
import { NButton, NPopconfirm } from 'naive-ui';
import { fetchOrderList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import UserOperateDrawer from './modules/user-operate-drawer.vue';

const appStore = useAppStore();

const { columns, columnChecks, data, getData, getDataByPage, loading, mobilePagination } = useTable({
  apiFn: fetchOrderList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10
    // if you want to use the searchParams in Form, you need to define the following properties, and the value is null
    // the value can not be undefined, otherwise the property in Form will not be reactive
  },
  columns: () => [
    {
      key: 'address',
      title: $t('page.agent.account'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'orderId',
      title: $t('page.agent.orderId'),
      align: 'center',
      width: 68
    },
    {
      key: 'type',
      title: $t('page.agent.type'),
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
      key: 'buySell',
      title: $t('page.agent.buySell'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'amount',
      title: $t('page.agent.amount'),
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
      key: 'rise',
      title: $t('page.agent.rise'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'curPrice',
      title: $t('page.agent.curPrice'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'buyStatus',
      title: $t('page.agent.buyStatus'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'buyTime',
      title: $t('page.agent.buyTime'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'sellPrice',
      title: $t('page.agent.sellPrice'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'sellStatus',
      title: $t('page.agent.sellStatus'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'sellTime',
      title: $t('page.agent.sellTime'),
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
          <NPopconfirm onPositiveClick={() => handleDelete(row.id)}>
            {{
              default: () => $t('page.agent.shouldSell'),
              trigger: () => (
                <NButton type="error" ghost size="small">
                  {$t('page.agent.sellOrder')}
                </NButton>
              )
            }}
          </NPopconfirm>
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
  onDeleted,
  checkedRowKeys,
  onBatchDeleted
  // closeDrawer
} = useTableOperate(data, getData);

async function handleBatchDelete() {
  // request
  console.log(checkedRowKeys.value);

  onBatchDeleted();
}

function handleDelete(id: number) {
  // request
  console.log(id);

  onDeleted();
}

function edit(id: number) {
  handleEdit(id);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('page.manage.user.title')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
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
