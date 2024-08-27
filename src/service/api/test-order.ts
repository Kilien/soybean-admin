import { request } from '../request';

/** get test order list */
export function fetchTestOrderList(params?: Api.TestOrder.OrderSearchParams) {
  return request<Api.TestOrder.OrderList>({
    url: '/testOrder/getOrderList',
    method: 'get',
    params
  });
}
