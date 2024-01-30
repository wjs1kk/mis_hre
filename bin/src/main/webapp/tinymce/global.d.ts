/// <reference lib="dom" />
/// <reference path="./js/tinymce/tinymce.d.ts" />

import type t from "./js/tinymce/tinymce";

declare global {
    declare const tinymce: typeof t;
    declare namespace tinymce {
        export * from "./js/tinymce/tinymce";
    }
}

