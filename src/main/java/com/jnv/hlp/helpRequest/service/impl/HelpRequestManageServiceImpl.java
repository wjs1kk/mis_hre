package com.jnv.hlp.helpRequest.service.impl;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.hlp.helpRequest.service.HelpRequestManageDAO;
import com.jnv.hlp.helpRequest.service.HelpRequestManageService;
import com.jnv.hlp.vo.HelpRequestVO;

@Service("helpRequestManageService")
@Transactional
public class HelpRequestManageServiceImpl implements HelpRequestManageService {

    @Resource(name = "helpRequestManageDAO")
    private HelpRequestManageDAO dao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    /**
     * 요청 현황 상세 조회
     */
    @Override
    public HelpRequestVO getHelpRequestManageMap(Map<String, Object> searchMap) {
        return dao.getHelpRequestManage(searchMap);
    }

    /**
     * 요청 현황 상세 저장
     */
    @Override
    public void setHelpRequestManage(HelpRequestVO helpVO) {
        // 요청번호가 없으면
        if (StringUtils.isEmpty(helpVO.getHlpRqstNo())) {
            // 요청번호 만들어줌
            String hlpRqstNo = idGen.nextIdFor("hlpRqstNo");
            helpVO.setHlpRqstNo(hlpRqstNo);
            dao.insertHelpRequestManage(helpVO);
        } else {
            dao.updateHelpRequestManage(helpVO);
        }
    }

    /**
     * 요청 현황 삭제
     */
    @Override
    public void deleteHelpRequestManage(HelpRequestVO helpVO) {
        dao.deleteHelpRequestManage(helpVO);
    }

    /**
     * 처리 내용 답변 등록 / 수정 저장
     */
    @Override
    public void setHelpRequestAnswer(HelpRequestVO helpVO) {
//        if (helpVO.getHlpWkPicId().equals(helpVO.getSessionUserId())) {
        dao.updateHelpRequestAnswer(helpVO);
//        }
    }

    /**
     * 처리 내용 답변 삭제
     */
    @Override
    public void delUpdateHelpRequestAnswer(HelpRequestVO helpVO) {
        dao.delUpdateHelpRequestAnswer(helpVO);
    }

}
