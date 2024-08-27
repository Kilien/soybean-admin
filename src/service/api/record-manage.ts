import { request } from '../request';

/** get unblock list */
export function fetchUnblockList(params?: Api.RecordManage.CommonSearchParams) {
  return request<Api.RecordManage.UnblockRecord>({
    url: '/record/getUnblockList',
    method: 'get',
    params
  });
}

/** get point list */
export function fetchPointList(params?: Api.RecordManage.CommonSearchParams) {
  return request<Api.RecordManage.PointRecord>({
    url: '/record/getPointList',
    method: 'get',
    params
  });
}

/** get card list */
export function fetchCardList(params?: Api.RecordManage.CommonSearchParams) {
  return request<Api.RecordManage.CardRecord>({
    url: '/record/getCardList',
    method: 'get',
    params
  });
}

/** get reward list */
export function fetchRewardList(params?: Api.RecordManage.CommonSearchParams) {
  return request<Api.RecordManage.RewardRecord>({
    url: '/record/getRewardList',
    method: 'get',
    params
  });
}

/** get bonus list */
export function fetchBonusList(params?: Api.RecordManage.CommonSearchParams) {
  return request<Api.RecordManage.BonusRecord>({
    url: '/record/getBonusList',
    method: 'get',
    params
  });
}
