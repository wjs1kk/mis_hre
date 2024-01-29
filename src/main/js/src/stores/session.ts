import { ref, watch } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export type User = {
    userId: string;
    memberId: string;
    userNmKr: string;
    userNmEn: string;
    passwd: string;
    emailAddr: string;
    telNo: string;
    phoneNo: string;
    useYn: string;
    sysId: string;
    rgstId: string;
    rgstIp: string;
    rgstDt: string;
    updtId: string;
    updtIp: string;
    updtDt: string;
    pwExpireDt: string;
};

export const useSessionStore = defineStore("session", () => {
    const user = ref<User | null>(null);
    const isLoggedIn = ref(Boolean(sessionStorage.getItem("auth")));

    watch(isLoggedIn, (value) => {
        value ? sessionStorage.setItem("auth", String(value)) : sessionStorage.removeItem("auth");
    });

    async function login(username: string, password: string) {
        const data = {
            username,
            password
        };

        const loginUrl = new URL("login", document.baseURI);

        try {
            await axios.post(loginUrl.toString(), new URLSearchParams(data));
            await router.replace("/");
            router.go(0);
        } catch (e) {
            console.error("failed to logging in");
            throw e;
        }
    }

    async function logout() {
        const logoutUrl = new URL("logout", document.baseURI);
        try {
            await axios.get(logoutUrl.toString());
            isLoggedIn.value = false;
            router.go(0);
        } catch (e) {
            console.error("error occured while logging out", e);
        }
    }

    async function refreshUserInfo(appOnLoad?: boolean) {
        try {
            await refreshUserInfoCore();
        } catch (e) {
            if (!appOnLoad) {
                logout();
            } else {
                user.value = null;
                isLoggedIn.value = false;
            }
        }
    }

    async function refreshUserInfoCore() {
        const userResponse = await axios({
            url: "cmn/getSessionUserInfo.do",
            responseType: "json",
            method: "POST"
        });
        const data = userResponse.data;
        if (data.data) {
            user.value = data.data;
            isLoggedIn.value = true;
        } else {
            throw Error("No user info");
        }
    }

    return {
        user,
        isLoggedIn,
        login,
        logout,
        refreshUserInfo
    };
});
