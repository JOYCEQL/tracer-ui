/*
 * @Author: yuguangzhou
 * @Date: 2022-01-19 14:37:00
 * @LastEditTime: 2022-01-26 16:00:08
 * @LastEditors: yuguangzhou
 * @Description: 路由文件
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Prism from 'prismjs';

import docRoutes from './routes';
let routes = [
  {
    path: '/',
    redirect: '/components/introduce',
  }
];
for (let i in docRoutes) {
  routes = [...routes, ...docRoutes[i]];
}
const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },

};

const router = createRouter(routerConfig);
// router.beforeResolve((to, from) => {
//   setTimeout(() => {
//     Prism.highlightAll();
//   }, 0);
// })
export default router;
