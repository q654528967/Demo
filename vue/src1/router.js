import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
//1:引入Test组件
import Test from "./components/Test.vue"
import List from "./components/List.vue"
import Login from "./components/tabbar/Login.vue"
import Exam01 from "./components/Exam01.vue"
import ExamMessageBox02 from "./components/ExamMessageBox02.vue"
import ExamField03 from "./components/ExamField03.vue"
import ExamTaobao from './components/ExamTaobao04.vue'
import ExamTaobao05 from './components/Exam_taobao05.vue'
import ExamContainer from "./components/ExamContainer.vue"
import ExamTabbar from './components/ExamTabbar'
import home from './components/weixin/home.vue'
Vue.use(Router)
//2:为Test组件配置访问路径 /Login
export default new Router({
  routes: [
    {path:"/ExamTabbar",component:ExamTabbar},
    {path:"/ExamContainer",component:ExamContainer},
    {path:'/Login',component:Login},
    {path:'/Examtaobao05',component:ExamTaobao05},
    {path:'/',component:HelloContainer},
    {path:'/Test',component:Test},
    {path:'/List',component:List},
    {path:'/Exam01',component:Exam01},
    {path:'/ExamMessageBox02',component:ExamMessageBox02},
    {path:'/ExamField03',component:ExamField03},
    {path:'/ExamTaobao04',component:ExamTaobao},
    {path:'/home',component:home}
  ]
})