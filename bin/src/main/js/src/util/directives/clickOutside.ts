import type { DirectiveBinding, ObjectDirective } from "vue";

export const ClickOutsideDirective: ObjectDirective<HTMLElement, (e: MouseEvent) => void> = {
    beforeMount(el: HTMLElement & { handleOutsideClick: (e: MouseEvent) => void; }, binding: DirectiveBinding) {
        el.handleOutsideClick = function (e: MouseEvent) {
            if (el !== e.target && !el.contains(e.target as Node)) {
                binding.value(e);
            }
        };

        document.addEventListener('click', el.handleOutsideClick);
    },
    unmounted(el: any) {
        document.removeEventListener('click', el.handleOutsideClick);
    }
};
