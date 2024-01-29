package com.jnv.common.editor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TinymceEditorController {

    @RequestMapping("cmn/tinymce.do")
    public String tinymce() {
        return "/common/tinymceEditor";
    }
}
