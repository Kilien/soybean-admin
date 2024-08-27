import { request } from '../request';

/** get agent list */
export function fetchInvestmentTag(params?: Api.ProjectManage.InvestmentTagSearchParams) {
  return request<Api.ProjectManage.InvestmentTag>({
    url: '/parojectManage/getInvestmentTag',
    method: 'get',
    params
  });
}
