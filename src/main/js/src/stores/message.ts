import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import { postData } from "@/util/ajax";
import mitt from "mitt";
import { format } from "@/util/message";
import postposition from "cox-postposition";

type Message = {
    msgId: string;
    msg: string;
    engMsg: string;
    msgType: "C" | "A";
    useYn: "Y" | "N";
};

type MessageResponse = {
    dsMessage: Message[];
};

export const useMessageStore = defineStore("message", () => {
    const states = reactive({
        messages: new Map<string, Message>(),
        language: new Intl.Locale(navigator.language).language
    });

    const events = mitt<{
        localeChanged: string;
    }>();

    const language = computed(() => states.language);

    async function load() {
        const response = await postData<MessageResponse>("cmn/getMessage.do");
        const data = response.dsMessage;

        states.messages.clear();

        for (const item of data) {
            states.messages.set(item.msgId, item);
        }
    }

    function getMessage(id: string, ...args: any[]) {
        const item = states.messages.get(id);

        let message: string;

        if (item == null) {
            message = id;
        } else if (states.language == "en") {
            message = item.engMsg;
        } else {
            message = item.msg;
        }

        const result = format(message.replace("'", "''"), ...args);
        return (language.value === "ko") ? postposition.parse(result) : result;
    }

    function setLanguage(language: string) {
        states.language = language;
    }

    return {
        language,
        load,
        getMessage,
        setLanguage,
        events
    };
});
