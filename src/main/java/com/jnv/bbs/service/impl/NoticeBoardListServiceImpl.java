package com.jnv.bbs.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.service.NoticeBoardListDAO;
import com.jnv.bbs.service.NoticeBoardListService;
import com.jnv.bbs.vo.NoticeBoardVO;

@Service("noticeBoardListService")
@Transactional
public class NoticeBoardListServiceImpl implements NoticeBoardListService {

    @Resource(name = "noticeBoardListDAO")
    private NoticeBoardListDAO dao;

    /**
     * 소통광장 - 게시물 목록 조회
     */
    @Override
    public List<NoticeBoardVO> getNoticeBoardList(Map<String, Object> searchMap) {
        return dao.getNoticeBoardList(searchMap);
    }
}
