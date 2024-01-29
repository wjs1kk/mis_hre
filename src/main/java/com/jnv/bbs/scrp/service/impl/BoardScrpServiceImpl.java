package com.jnv.bbs.scrp.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.scrp.service.BoardScrpDAO;
import com.jnv.bbs.scrp.service.BoardScrpService;
import com.jnv.bbs.vo.BoardScrpVO;
import com.jnv.common.seq.service.IdGeneratorService;
import com.jnv.jncore.exception.BusinessException;

@Service("boardScrpService")
@Transactional
public class BoardScrpServiceImpl implements BoardScrpService {

    @Resource(name = "boardScrpDAO")
    private BoardScrpDAO dao;

    @Resource(name = "idGeneratorService")
    private IdGeneratorService idGen;

    /**
     * 소통광장 - 게시판 - 스크랩 목록
     */
    @Override
    public List<BoardScrpVO> getBoardScrapList(Map<String, Object> searchMap) {
        return dao.getBoardScrapList(searchMap);
    }

    /**
     * 소통광장 - 게시판 - 스크랩 목록 추가
     */
    @Override
    public void setBoardScrapManage(List<BoardScrpVO> boardScrpVO) {

        for (BoardScrpVO vo : boardScrpVO) {
            int cntDupl = dao.getDuplicateKeyCnt(vo);
            if (cntDupl > 0) {
                throw new BusinessException("errors.duplication", new String[] { "게시물" });
            } else if (StringUtils.isEmpty(vo.getScrpId())) {
                String scrpId = idGen.nextIdFor("scrpId");
                vo.setScrpId(scrpId);

                dao.insertBoardScrap(vo);
            }
        }
    }

    /**
     * 소통광장 - 게시판 - 스크랩 목록 삭제
     */
    @Override
    public void deleteBoardScrapManage(BoardScrpVO boardScrpVO) {
        dao.deleteBoardScrap(boardScrpVO);
    }

}
