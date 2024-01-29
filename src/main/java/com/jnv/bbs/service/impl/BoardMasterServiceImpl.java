package com.jnv.bbs.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.service.BoardMasterDAO;
import com.jnv.bbs.service.BoardMasterService;
import com.jnv.bbs.vo.BoardMasterVO;
import com.jnv.jncore.exception.BusinessException;

@Service("boardMasterService")
@Transactional
public class BoardMasterServiceImpl implements BoardMasterService {

    @Resource(name = "boardMasterDAO")
    private BoardMasterDAO dao;

    /**
     * 게시판관리 - 게시판 MST 목록 조회
     */
    @Override
    public List<BoardMasterVO> getBoardMasterList(Map<String, Object> searchMap) {
        return dao.getBoardMasterList(searchMap);
    }

    /**
     * 게시판관리 - 게시판 MST 저장
     */
    @Override
    public String saveBoardMasterList(List<BoardMasterVO> boardMasterVO) {
        String rmsg = RESULT_FAILURE;

        for (BoardMasterVO vo : boardMasterVO) {
            if ("1".equals(vo.getRowCheck())) {
                switch (StringUtils.defaultString(vo.getRowStatus())) {
                    case "inserted":
                        // 중복체크
                        int cntDupl = dao.getDuplicateKeyCnt(vo);
                        if (cntDupl > 0) {
                            throw new BusinessException("errors.duplication", new String[] { "field.bbsId" });
                        }
                        dao.insertBoardMaster(vo);
                        dao.insertBoardMSTOption(vo);
                        break;
                    case "updated":
                        dao.updateBoardMaster(vo);
                        dao.updateBoardMSTOption(vo);
                        break;
                    case "deleted":
                        dao.deleteBoardMSTOption(vo);
                        dao.deleteBoardMaster(vo);
                        break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }

}
