package com.jnv.hlp.helpRequest.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.hlp.helpRequest.service.HelpRequestListDAO;
import com.jnv.hlp.helpRequest.service.HelpRequestListService;
import com.jnv.hlp.vo.HelpRequestVO;

@Service("helpRequestListService")
@Transactional
public class HelpRequestListServiceImpl implements HelpRequestListService {

    @Resource(name = "helpRequestListDAO")
    private HelpRequestListDAO dao;

    /**
     * 요청현황 조회
     */
    @Override
    public List<HelpRequestVO> getHelpRequestList(Map<String, Object> searchMap) {
        return dao.getHelpRequestList(searchMap);
    }

}
