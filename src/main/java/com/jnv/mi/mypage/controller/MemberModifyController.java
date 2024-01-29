package com.jnv.mi.mypage.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.jnv.jncore.annotation.JnRequestDataset;
import com.jnv.jncore.argumentresolver.JnResult;
import com.jnv.mi.mypage.service.MemberModifyService;
import com.jnv.mi.vo.MemberModifyVO;

@Controller
public class MemberModifyController {

    public static final String CALLBACK_MSG = "callbackMsg";

    @Resource(name = "memberModifyService")
    private MemberModifyService service;

    @RequestMapping("pts/mif/myPage")
    public String goMyPage() {
        return "/index-web";
    }

    @RequestMapping("pts/mif/modifyInfo")
    public String goModifyMemberInfo() {
        return "/index-web";
    }


    /**
     * 개인정보 수정 화면 정보 조회
     *
     * @return 조회 결과
     */
    @RequestMapping("mi/myPage/getMemberInfo.do")
    public JnResult getMemberInfo() {
        JnResult result = new JnResult();
        result.addDataSet("dsMemberInfo", service.getMemberInfo());
        return result;
    }

    /**
     * 비밀번호 검증
     *
     * @return 비밀번호 검증 결과
     */
    @RequestMapping("mi/myPage/checkPassword.do")
    public JnResult checkPassword(@JnRequestDataset(name = "dsPassword") Map<String, Object> map) {
        JnResult result = new JnResult();
        String msg = service.confirmPassword(map);
        result.addVariable(CALLBACK_MSG, msg);
        return result;
    }

    /**
     * 개인정보 수정 후 저장
     *
     * @param member 변경된 회원 정보
     *
     * @return 처리 결과
     */

    @RequestMapping("mi/myPage/setMemberInfo.do")
    public JnResult setMemberInfo(@JnRequestDataset(name = "dsMemberInfo") MemberModifyVO member) {
        JnResult result = new JnResult();
        service.setMemberInfo(member);
        result.addVariable(CALLBACK_MSG, "success");
        return result;
    }

    /**
     * 비밀번호 변경
     *
     * @param ds 변경할 비밀번호
     *
     * @return 처리 결과
     */
    @RequestMapping("mi/myPage/changePassword.do")
    public JnResult changePassword(@JnRequestDataset(name = "dsPasswd") Map<String, Object> ds) {
        JnResult result = new JnResult();
        String message = service.updatePassword(ds);
        result.addVariable(CALLBACK_MSG, message);
        return result;
    }

    /**
     * 회원 탈퇴 처리
     *
     * @param map 사용자의 비밀번호
     *
     * @return 처리 결과
     */
    @RequestMapping("mi/myPage/withdraw.do")
    public JnResult withdraw(@JnRequestDataset(name = "dsPassword") Map<String, Object> map) {
        JnResult result = new JnResult();
        String message = service.withdraw(map);
        result.addVariable(CALLBACK_MSG, message);

        return result;
    }
}
