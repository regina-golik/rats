import { createRouter, RouterHistory } from "vue-router";
import Account from "../pages/Account.vue";

const router = [{ path: "/account", component: Account }];

export default function (history: RouterHistory) {
    return createRouter({
        history,
        routes: router,
    });
}
