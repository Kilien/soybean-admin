/* eslint-disable */
/* prettier-ignore */
// Generated by elegant-router
// Read more: https://github.com/soybeanjs/elegant-router

import type { RouteComponent } from "vue-router";
import type { LastLevelRouteKey, RouteLayout } from "@elegant-router/types";

import BaseLayout from "@/layouts/base-layout/index.vue";
import BlankLayout from "@/layouts/blank-layout/index.vue";

export const layouts: Record<RouteLayout, RouteComponent | (() => Promise<RouteComponent>)> = {
  base: BaseLayout,
  blank: BlankLayout,
};

export const views: Record<LastLevelRouteKey, RouteComponent | (() => Promise<RouteComponent>)> = {
  403: () => import("@/views/_builtin/403/index.vue"),
  404: () => import("@/views/_builtin/404/index.vue"),
  500: () => import("@/views/_builtin/500/index.vue"),
  login: () => import("@/views/_builtin/login/index.vue"),
  agent_account: () => import("@/views/agent/account/index.vue"),
  "agent_manual-order": () => import("@/views/agent/manual-order/index.vue"),
  "agent_test-order": () => import("@/views/agent/test-order/index.vue"),
  home: () => import("@/views/home/index.vue"),
  manage_coin: () => import("@/views/manage/coin/index.vue"),
  manage_contract: () => import("@/views/manage/contract/index.vue"),
  manage_fee: () => import("@/views/manage/fee/index.vue"),
  manage_level: () => import("@/views/manage/level/index.vue"),
  manage_role: () => import("@/views/manage/role/index.vue"),
  manage_system: () => import("@/views/manage/system/index.vue"),
  "manage_user-detail": () => import("@/views/manage/user-detail/[id].vue"),
  manage_user: () => import("@/views/manage/user/index.vue"),
  matrix_coin: () => import("@/views/matrix/coin/index.vue"),
  "project_agent-level": () => import("@/views/project/agent-level/index.vue"),
  project_manage: () => import("@/views/project/manage/index.vue"),
  project_tag: () => import("@/views/project/tag/index.vue"),
  record_bonus: () => import("@/views/record/bonus/index.vue"),
  record_card: () => import("@/views/record/card/index.vue"),
  record_point: () => import("@/views/record/point/index.vue"),
  record_reward: () => import("@/views/record/reward/index.vue"),
  record_unblock: () => import("@/views/record/unblock/index.vue"),
  user_manage: () => import("@/views/user/manage/index.vue"),
};
