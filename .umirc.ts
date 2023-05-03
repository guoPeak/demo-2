import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '信息管理',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/login',
      name: '登录',
      layout: false,
      component: './Login',
    },
    {
      name: '收据管理',
      path: '/home',
      component: './Home',
    },
    {
      name: '表单创建',
      path: '/createForm',
      component: './createForm',
      hideInMenu: true
    },
    
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    // {
    //   name: ' CRUD 示例',
    //   path: '/table',
    //   component: './Table',
    // },
  ],
  npmClient: 'npm',
});

