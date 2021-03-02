import { AppRouteModule } from 'src/router/typesRoute'
import RouterViewContainer from 'components/business/router-view/index.vue'

const customer: AppRouteModule = {
  path: '/customer',
  name: 'Customer',
  title: 'Customer',
  component: RouterViewContainer,
  // component: () => import('views/customer/mine/index.vue'),
  meta: { icon: 'uil:setting', title: '客户管理' },

  children: [
    {
      title: 'mine',
      name: 'Mine',
      path: 'mine',
      component: () => import('views/customer/mine/index.vue'),
      meta: { title: '我的客户' /* auth: false, global: false, refreshable: false, userInfo: true, keepAlive: true */ }
    }
  ]
}

export default customer
