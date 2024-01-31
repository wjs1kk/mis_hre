import { type Component, defineAsyncComponent, inject } from "vue";
import { useGlobalUiState } from "@/stores/ui";
import { pageContextKey } from "@/components/layout/TabPage.vue";

const pages = import.meta.glob("@/pages/**/*.vue", { import: "default" });

/**
 * 지정한 모듈 이름으로 컴포넌트를 찾는다.
 *
 * @param path 컴포넌트 파일 이름
 * @returns 해당하는 페이지 컴포넌트
 */
export function getPageComponent(path: string): Component {
    let key = path;
    if (!key.startsWith("/src/")) {
        if (key.startsWith("/")) {
            key = "/src" + key;
        } else {
            key = "/src/" + key;
        }
    }

    return defineAsyncComponent(pages[key] as any);
}

export function closeTab(tabId?: string) {
    const ui = useGlobalUiState();
    const ctx = inject(pageContextKey);

    if (tabId == null && ctx == null) {
        console.warn(`Cannot find current tab ID.`);
        return;
    }

    const id = tabId ?? (ctx as { tabId: string; }).tabId;
    ui.closeTab(id);
}

export function invoke(tabId: string, method: string, args: unknown[]) {
    const ui = useGlobalUiState();
    ui.invokeMethod(tabId, method, args);
}
