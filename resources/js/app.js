require("./bootstrap");

import router from "./routes";
import VueRouter from "vue-router";

window.Vue = require("vue");

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router // (縮寫) 相當於 router: router
});
