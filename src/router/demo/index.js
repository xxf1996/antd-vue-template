export default {
  path: 'demo',
  name: 'demo',
  meta: {
    auth: true,
    title: 'Demo',
    icon: 'file-text'
  },
  redirect: { name: 'demo1' },
  component: () => import('@/layout/RoutePage'),
  children: [
    {
      path: 'demo1',
      name: 'demo1',
      meta: {
        auth: true,
        title: 'Demo1'
      },
      component: () => import('@/pages/demo/Demo1')
    },
    {
      path: 'demo2',
      name: 'demo2',
      meta: {
        auth: true,
        title: 'Demo2'
      },
      component: () => import('@/pages/demo/Demo2')
    },
    {
      path: 'demo3',
      name: 'demo3',
      meta: {
        auth: true,
        title: 'Demo3'
      },
      component: () => import('@/pages/demo/Demo3')
    },
    {
      path: 'form',
      name: 'formDemo',
      meta: {
        auth: true,
        title: '表单组件示例'
      },
      component: () => import('@/pages/demo/FormDemo')
    }
  ]
}
