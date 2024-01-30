<script lang="ts" setup>
import { computed } from "vue";
import { v4 as uuidV4 } from "uuid";

export interface Props {
    name: string;
    type: "text" | "password" | "email" | "number" | "search" | "tel" | "url";
    placeholder: string;
    label: string;
    modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
    placeholder: "",
    label: "",
    value: "",
    type: "text"
});

const emits = defineEmits<{
    (e: "update:modelValue", value: string): void;
    (e: "input", event: Event): void;
    (e: "change", event: Event): void;
}>();

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emits('update:modelValue', value);
    }
});

function onInput(e: Event): void {
    emits("input", e);
    emits("update:modelValue", (e.target as HTMLInputElement).value);
}

function onChange(e: Event): void {
    emits("change", e);
}

const id = `text-input-${uuidV4().replace(/-/g, "")}`;
</script>

<template>
    <div class="jn-text-input">
        <input :id="id" :name="name" :placeholder="placeholder" :value="value" :type="type" @change="onChange"
            @input="onInput" />
        <label :for="id">{{ label }}</label>
    </div>
</template>

<style lang="scss" scoped>
.jn-text-input {
    background-color: white;
    border-radius: var(--border-radius-small) var(--border-radius-small) 0 0;
    display: inline-flex;

    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.03125rem;
    line-height: 1.5rem;

    min-height: 56px;
    position: relative;

    &>* {
        transition:
            border-bottom 0.18s linear,
            font-size 0.18s ease-out,
            padding-top 0.18s ease-out,
            padding-right 0.18s ease-out,
            padding-bottom 0.18s linear,
            padding-left 0.18s ease-out,
            color 0.18s ease-out,
            line-height 0.18s ease-out;
    }

    &>input,
    &>textarea {
        align-self: stretch;
        background-color: white;

        border: 0 none;
        border: 1px solid rgb(222, 222, 222);
        border-radius: var(--border-radius-small);
        flex: 1 0 0;

        padding: 16px 16px 15px;

        &:not(:placeholder-shown),
        &:focus {
            outline: none;

            padding-top: 24px;

            &+label {
                font-size: 0.75rem;
                line-height: 1rem;
                padding: 8px 16px 0;
            }
        }

        &:not(:placeholder-shown) {
            padding-bottom: 7px;
        }

        &:focus {
            border: 1px solid #5473E0;

            &+label {
                color: #5473E0;
            }
        }

        &+label {
            padding: 16px;
            position: absolute;
            width: 100%;
        }
    }
}
</style>
