import "dhx-suite-package/codebase/suite.css";
import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { ClickOutsideDirective } from "@/util/directives";
import axios from "axios";
import { useSessionStore } from "@/stores/session";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.directive("click-outside", ClickOutsideDirective);

app.mount("#app");

axios.interceptors.response.use(
    response => response,
    async (error) => {
        const sessionStore = useSessionStore();
        const currentRoute = router.currentRoute;
        if (error?.response.status === 401) {
            console.log("Unauthorized.");

            if (currentRoute.value.path !== "/login" && toRelative(error.toJSON().config.url) !== "login") {
                console.log(1);
                await sessionStore.logout();
                await router.replace("/login");
            }

            throw error;
        } else {
            throw error.response;
        }
    });

function toRelative(url: string) {
    const base = document.baseURI;
    if (url.startsWith(base)) {
        return url.substring(0, base.length);
    } else {
        return;
    }
}
