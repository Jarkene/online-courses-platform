import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import store from './store/index'
import Home from './components/Home.vue'
import User from './components/User.vue'
import Materials from './components/Materials.vue'
import Lesson from './components/Lesson.vue'
import GeneralChat from './components/GeneralChat.vue'
import TeacherChat from './components/TeacherChat.vue'
import Webinars from './components/Webinars.vue'
import VueYoutube from 'vue-youtube'
import './main.scss'

Vue.use(VueYoutube, {global: true})

import Localize from './localize'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Localize);

const routes = [
  { path: '/', component: Home},
  { path: '/user', component: User},
  { path: '/materials', component: Materials},
  { path: '/webinars', component: Webinars},
  { path: '/teacher_chat', component: TeacherChat},
  { path: '/general_chat', component: GeneralChat},
  { path: '/lesson/:number', component: Lesson, props: true}
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
