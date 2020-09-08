import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";

const routes = [
    {
        path: "/",
        component: ExampleComponent
    }
];

const router = new VueRouter({
    routes // (縮寫) 相當於 routes: routes
});

export default router;
