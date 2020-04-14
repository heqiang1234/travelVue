import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register/register'
import home from '@/components/home'
import scenic from '@/components/scenic'
// import careerTalk from '@/components/careerTalk'
import scenic_detail from '@/components/scenic_detail'
import personalCenter from '@/components/personalCenter'
import dataView from '@/components/dataView'
import blank from '@/components/blank'
import userfocus from '@/components/userfocus'
import postAI from '@/components/postAI'
import recordQuery from '@/components/recordQuery'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/scenic',
      name: 'scenic',
      component: scenic
    },
    // {
    //   path: '/careerTalk',
    //   name: 'careerTalk',
    //   component: careerTalk
    // },
    {
      path: '/scenic_detail',
      name: 'scenic_detail',
      component: scenic_detail
    },
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    },
    {
      path:'/dataView',
      name:'dataView',
      component:dataView
    },
    {
      path:'/blank',
      name:'blank',
      component:blank
    },
    {
      path:'/userfocus',
      name:'userfocus',
      component:userfocus
    },
    {
      path:'/postAI',
      name:'postAI',
      component:postAI
    },
    {
      path:'/recordQuery',
      name:'recordQuery',
      component:recordQuery
    }
  ]
})
