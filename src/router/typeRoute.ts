
import { Component } from "vue";
// import { RouteRecordRaw } from 'vue-router';

export interface RouteMeta {
  // title
  title: string;
  // icon on tab
  icon?: string;

  frameSrc?: string;

  // Never show in menu
  hideMenu?: boolean;
}

// @ts-ignore
export interface AppRouteRecordRaw {
  title: string;
  name: string;
  path: string,
  meta: RouteMeta;
  component?: Component | string;
  components?: Component;
  children?: AppRouteRecordRaw[];
  props?: Record<string, any>;
  fullPath?: string;
}

export type AppRouteModule = AppRouteRecordRaw;
