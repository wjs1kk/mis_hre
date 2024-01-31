import type { Component, Ref } from "vue";

export type TabInfo = {
    tabId: string;
    tabTitle: string;
    menuId?: string;
    url?: string;
    args?: Record<string, unknown>;
    menuPath: string[];
    domNode?: Element;
    component: Component | null;
    ref: Ref<InstanceType<any> | null>;
    hideMenuPath?: boolean;
};

export const tabbarStateKey = Symbol("tabbarState");
