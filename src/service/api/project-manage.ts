import { request } from '../request';

/** get agent list */
export function fetchInvestmentTag(params?: Api.ProjectManage.InvestmentTagSearchParams) {
  return request<Api.ProjectManage.InvestmentTag>({
    url: '/parojectManage/getInvestmentTag',
    method: 'get',
    params
  });
}

/** get project list */
export function fetchProjectList(params?: Api.ProjectManage.CommonSearchParams) {
  return request<Api.ProjectManage.ProjectList>({
    url: '/parojectManage/getProjectList',
    method: 'get',
    params
  });
}
