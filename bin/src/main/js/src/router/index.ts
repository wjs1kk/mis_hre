import { createRouter, createWebHistory } from "vue-router";
import { useSessionStore } from "@/stores/session";
import MdiTabContainer from "@/layout/MdiTabContainer.vue";

const baseUrl = new URL(".", document.baseURI);

const router = createRouter({
    history: createWebHistory(baseUrl.pathname),
    routes: [
        {
            path: "/",
            name: "main",
            component: MdiTabContainer,
            meta: {
                authNotRequired: true
            }
        },
        {
            path: "/login",
            name: "login",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../pages/LoginPage.vue"),
            meta: {
                authNotRequired: true,
                isLoginPage: true
            }
        },
        {
            path: "/pts/mif/termsAgree",
            name: "termsAgree",
            component: () => import("../pages/pts/mif/TermsAgree.vue"),
            meta: {
                authNotRequired: true
            }
        },
        {
            path: "/pts/mif/register",
            name: "registerForm",
            component: () => import("../pages/pts/mif/RegisterForm.vue"),
            meta: {
                authNotRequired: true
            }
        },
        {
            path: "/pts/mif/registerComplete",
            name: "registerFinished",
            component: () => import("../pages/pts/mif/RegisterComplete.vue"),
            meta: {
                authNotRequired: true
            }
        },
        {
            path: "/pts/mif/myPage",
            name: "myPage",
            component: () => import("../pages/pts/mif/MyPage.vue")
        },
        {
            path: "/pts/mif/modifyInfo",
            name: "modifyMemberInfo",
            component: () => import("../pages/pts/mif/ModifyMemberInfo.vue")
        },
        {
            path: "/findIdPw",
            name: "findIdPw",
            component: () => import("../pages/FindIdPasswordPage.vue"),
            meta: {
                authNotRequired: true
            }
        }
    ]
});

router.beforeEach((to, _from, next) => {
    const sessionStore = useSessionStore();

    const requiresAuth = to.matched.length > 0 && !to.matched.some(record => record.meta.authNotRequired);
    const isLoginPage = to.matched.some(record => record.meta.isLoginPage);
    const isAuthenticated = sessionStore.isLoggedIn;

    if (requiresAuth && !isAuthenticated) {
        next("/login");
    } else if (isLoginPage && isAuthenticated) {
        router.replace("/");
    } else {
        next();
    }
});

export default router;
