package com.jnv.common.exception;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter.spring.core.data.NexacroResult;

@Controller
public class DummyController {

    /**
     * dummy for localeChangeInterceptor
     * @return
     */
    @RequestMapping("dummy.do")
    public NexacroResult dummy() {
        return new NexacroResult();
    }

}
