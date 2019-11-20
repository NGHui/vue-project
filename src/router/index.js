import Vue from 'vue'
import Router from 'vue-router'
import main from "../views/Mian"
import Login from '../views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/main',
      name: 'main',
      component: main
    }
  ]
})
