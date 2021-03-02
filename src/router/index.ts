
import { Component } from 'vue';
import { createRouter, RouteRecordRaw, createWebHashHistory } from 'vue-router';

const modules = import.meta.globEager('./modules/**/*.ts');

const basicRoutes: Component[] = [
  {
    title: 'root',
    name: 'Root',
    path: '/',
    component: () => import('components/HelloWorld.vue'),
    meta: { title: 'root', /* auth: false, global: false, refreshable: false, userInfo: true, keepAlive: true */ }
  },
]

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  basicRoutes.push(...modList);
})

// app router
const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
  // scrollBehavior: scrollBehavior,
});

export default router;
