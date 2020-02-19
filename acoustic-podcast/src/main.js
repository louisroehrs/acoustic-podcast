import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Analytics from './views/Analytics.vue'
import Subscriptions from './views/Subscriptions.vue'
import Woofie from './views/Woofie.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

const routes = [
    { path: '/helloworld', component: HelloWorld, name: 'hello' },
    { path: '/woofie', component: Woofie, name: 'woofie' },
    { path: '/analytics', component: Analytics, name: 'analytics' },
    { path: '/subscriptions', component: Subscriptions, name: 'subscriptions' }
    
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter)

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')



