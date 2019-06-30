import Vue from "vue";
import Checklist from "./Checklist.vue";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Checklist)
}).$mount("#checklist");
