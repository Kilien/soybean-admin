import { request } from '../request';

/** get user list */
export function fetchUserList(params?: Api.UserManage.UserSearchParams) {
  return request<Api.UserManage.UserList>({
    url: '/userManage/getUserList',
    method: 'get',
    params
  });
}
