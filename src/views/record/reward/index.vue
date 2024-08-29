<script setup lang="tsx">
import { NTag } from 'naive-ui';
import { fetchRewardList } from '@/service/api';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable } from '@/hooks/common/table';
import { unblockStatusRecord } from '@/constants/business';

const appStore = useAppStore();

const { columns, columnChecks, data, getData, loading, mobilePagination } = useTable({
  apiFn: fetchRewardList,
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
      key: 'status',
      title: $t('page.record.status'),
      align: 'center',
      minWidth: 100,
      render: row => {
        if (row.status === null) {
          return null;
        }

        const tagMap: Record<Api.Common.UnblockStatus, NaiveUI.ThemeColor> = {
          1: 'warning',
          2: 'success',
          3: 'error'
        };

        const label = $t(unblockStatusRecord[row.status]);

        return <NTag type={tagMap[row.status]}>{label}</NTag>;
      }
    },
    {
      key: 'amount',
      title: $t('page.record.amount'),
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
      key: 'finalTime',
      title: $t('page.record.finalTime'),
      align: 'center',
      minWidth: 200
    }
  ]
});
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('page.record.rewardTitle')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
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
