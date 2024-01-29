package com.jnv.bbs.imnotice.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.imnotice.service.ImportantNoticeDAO;
import com.jnv.bbs.imnotice.service.ImportantNoticeService;
import com.jnv.bbs.vo.NoticeBoardVO;
import com.jnv.common.util.Constants;

@Service("importantNoticeService")
@Transactional
public class ImportantNoticeServiceImpl implements ImportantNoticeService {

    @Resource(name = "importantNoticeDAO")
    private ImportantNoticeDAO dao;

    /**
     * 관리메뉴 - 게시판 관리 - 공지사항관리 조회
     */
    @Override
    public List<NoticeBoardVO> getImportNoticeManage(Map<String, Object> searchMap) {
        return dao.getImportNoticeManage(searchMap);
    }

    /**
     * 관리메뉴 - 게시판 관리 - 공지사항관리 저장
     */
    @Override
    public void setImportNoticeManage(List<NoticeBoardVO> noticeBoardVO) {
        for (NoticeBoardVO vo : noticeBoardVO) {
            if ("1".equals(vo.getRowCheck())) {
                switch (StringUtils.defaultString(vo.getRowStatus())) {
                    case Constants.ROW_TYPE_UPDATED:
                        dao.updateImportNoticeManage(vo);
                        break;
                    default:
                        break;
                }
            }
        }
    }
}
