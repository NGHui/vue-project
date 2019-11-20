import Vue from 'vue'
// 导入路由插件
import Router from 'vue-router'
// 导入上面定义的组件
import Content from '../components/Content'
import Main from '../components/main'
import Hui from "../components/Hui";
import Hello from '../components/Hello'
// 安装路由
Vue.use(Router);
// 配置路由
export default new Router({
  routes: [
    {
      // 路由路径
      path: '/content',
      // 路由名称
      name: 'Content',
      // 跳转到组件
      component: Content
    },
    {
      // 路由路径
      path: '/main',
      // 路由名称
      name: 'Main',
      // 跳转到组件
      component: Main
    },
    {
      //路由路径
      path: "/hui",
      //路由名称
      name: "Hui",
      //跳转组件
      component: Hui
    }
    , {
      path: '/hello',
      name: 'hello',
      component:Hello
    }
  ]
});
