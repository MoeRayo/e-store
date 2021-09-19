import Vue from 'vue'
import App from './App.vue'
import 'tachyons/css/tachyons.css'
import router from './router'
import Cloudinary from "cloudinary-vue";
import store from '@/store/index'


Vue.use(Cloudinary, {
  configuration: { 
    cloudName: "moerayo",
    secure: true }
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
