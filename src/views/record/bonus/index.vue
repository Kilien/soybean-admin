<script setup lang="tsx">
import { fetchBonusList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable } from '@/hooks/common/table';

const appStore = useAppStore();

const { columns, columnChecks, data, getData, loading, mobilePagination } = useTable({
  apiFn: fetchBonusList,
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
      title: $t('common.index'),
      align: 'center',
      width: 64
    },
    {
      key: 'address',
      title: $t('page.record.address'),
      align: 'center',
      width: 400
    },
    {
      key: 'type',
      title: $t('page.record.type'),
      align: 'center',
      minWidth: 100
    },
    {
      key: 'amount',
      title: $t('page.record.actualAmount'),
      align: 'center',
      minWidth: 200
    },
    {
      key: 'createTime',
      title: $t('page.record.createTime'),
      align: 'center',
      minWidth: 200
    },
    {
      key: 'relatedOrders',
      title: $t('page.record.relatedOrders'),
      align: 'center',
      minWidth: 200
    }
  ]
});
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('page.record.bonusTitle')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation
          v-model:columns="columnChecks"
          :disabled-delete="true"
          :disabled-add="true"
          :loading="loading"
          @refresh="getData"
        />
      </template>
      <NDataTable
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
    </NCard>
  </div>
</template>

<style scoped></style>
