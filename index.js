import Vue from "vue";

import App from "./App.vue";

import added from "./.added";
import router from "./.router";

// eslint-disable-next-line no-new
/*new Vue({
  el: '#app',
  route: router,
  render: h => h(App),
});*/
new Vue(
  Vue.util.extend(App, {
    router
  })
).$mount("#app");
