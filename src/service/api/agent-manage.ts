import { request } from '../request';

/** get agent list */
export function fetchAgentList(params?: Api.AgentManage.UserSearchParams) {
  return request<Api.AgentManage.UserList>({
    url: '/agentManage/getUserList',
    method: 'get',
    params
  });
}

/** get agent level */
export function fetchAgentLevel(params?: Api.AgentManage.UserLevelSearchParams) {
  return request<Api.AgentManage.UserLevel>({
    url: '/agentManage/getUserLevel',
    method: 'get',
    params
  });
}
