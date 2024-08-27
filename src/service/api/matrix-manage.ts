import { request } from '../request';

/** get coin list */
export function fetchCoinList(params?: Api.MatrixManage.CommonSearchParams) {
  return request<Api.MatrixManage.CoinList>({
    url: '/matrixManage/getCoinList',
    method: 'get',
    params
  });
}
