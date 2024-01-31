import type { Component } from "vue";
import { inject, reactive } from "vue";
import mitt, { type Emitter } from "mitt";

const store = reactive({
    modals: [] as IModalData[]
});

interface IModalData {
    id: string;
    component: Component;
    props: any;
    events: Emitter<{
        closed: any;
    }>;
}

interface IModalOptions {
    props: any;
}

export interface IModalContext {
    close(result?: any): void;
}

export const modalIdKey = Symbol("modalId");

export function openModal<T>(component: Component, options?: IModalOptions) {
    const props = options?.props ?? {};
    const id = Date.now().toString();

    return new Promise<T>(resolve => {
        const data: IModalData = {
            id,
            component,
            props,
            events: mitt()
        };

        data.events.on("closed", result => {
            window.setTimeout(() => {
                resolve(result);
            });
        });

        store.modals.push(data);
    });
}

export function closeModal(id: string, result?: any) {
    const index = store.modals.findIndex(item => item.id == id);
    const removed = store.modals.splice(index, 1);
    removed[0].events.emit("closed", result);
}

export function useModalContext(): IModalContext {
    return inject(modalIdKey);
}

export function useModalStore() {
    return store;
}
