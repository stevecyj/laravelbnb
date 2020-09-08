require("./bootstrap");

import VueRouter from "vue-router";
import router from "./routes";
import Index from "./pageviews/index";

window.Vue = require("vue");

// 這邊不需註冊了
// Vue.component(
//     "example-component",
//     require("./components/ExampleComponent.vue").default
// );

// Vue.component("example-2", require("./components/Example2.vue").default);

Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router, // (縮寫) 相當於 router: router
    comments: {
        index: Index
    }
});
