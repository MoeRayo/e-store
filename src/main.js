import Vue from 'vue'
import App from './App.vue'
import 'tachyons/css/tachyons.css'
import router from './router'
import Cloudinary from "cloudinary-vue";
import store from '@/store/index'
// import authConfigTemplate from "../auth_config.json";

// Import auth0 plugin here
import { Auth0Plugin } from "./auth";

Vue.use(Cloudinary, {
  configuration: { 
    cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
    secure: true }
});

Vue.use(Auth0Plugin, {
  clientId: process.env.VUE_APP_AUTH0_CLIENTID,
  domain: process.env.VUE_APP_AUTH0_DOMAIN,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
