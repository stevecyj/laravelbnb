import VueRouter from "vue-router";
import ExampleComponent from "./components/ExampleComponent";
import Bookables from "./bookables/Bookables";
import Bookable from "./bookable/Bookable";

const routes = [
    {
        path: "/",
        component: Bookables,
        name: "home"
    },
    {
        path: "/bookable/:id",
        component: Bookable,
        name: "bookable"
    }
];

const router = new VueRouter({
    mode: "history",
    routes, // (縮寫) 相當於 routes: routes
    base: "/laravelbnb/public/"
});

export default router;
