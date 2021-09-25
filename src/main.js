import Vue from 'vue'
import App from './App.vue'
import 'tachyons/css/tachyons.css'
import router from './router'
import Cloudinary from "cloudinary-vue";
import store from '@/store/index'
import { domain, clientId } from "../auth_config.json";

// Import auth0 plugin here
import { Auth0Plugin } from "./auth";

Vue.use(Cloudinary, {
  configuration: { 
    cloudName: "moerayo",
    secure: true }
});

Vue.use(Auth0Plugin, {
  domain,
  clientId,
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
