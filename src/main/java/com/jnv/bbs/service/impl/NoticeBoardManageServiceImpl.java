package com.jnv.bbs.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.bbs.service.NoticeBoardManageDAO;
import com.jnv.bbs.service.NoticeBoardManageService;
import com.jnv.bbs.vo.NoticeBoardCommentVO;
import com.jnv.bbs.vo.NoticeBoardVO;

@Service("noticeBoardManageService")
@Transactional
public class NoticeBoardManageServiceImpl implements NoticeBoardManageService {

    @Resource(name = "noticeBoardManageDAO")
    private NoticeBoardManageDAO dao;

    @Resource(name = "passwordEncoder")
    private PasswordEncoder passwordEncoder;

    /**
     * 소통광장 - 게시물 목록 - 게시물(입력/수정) 조회
     */
    @Override
    public List<NoticeBoardVO> getNoticeBoard(Map<String, Object> searchMap) {
        return dao.getNoticeBoard(searchMap);
    }

    /**
     * 소통광장 - 게시물 입력
     */
    @Override
    public void setNoticeBoard(NoticeBoardVO noticeBoardVO) {

        // String encodePasswd
        // vo.passwd
        if ("Y".equals(noticeBoardVO.getScrtYn())) {
            if (StringUtils.isEmpty(noticeBoardVO.getNttNo())) {
                String encodedPasswd = passwordEncoder.encode(noticeBoardVO.getPasswd());
                noticeBoardVO.setPasswd(encodedPasswd);

                dao.insertNoticeBoard(noticeBoardVO);
            } else {
                if (StringUtils.isNotEmpty(noticeBoardVO.getPasswd())) {
                    String encodedPasswd = passwordEncoder.encode(noticeBoardVO.getPasswd());
                    noticeBoardVO.setPasswd(encodedPasswd);
                }
                dao.updateNoticeBoard(noticeBoardVO);
            }
        } else if ("N".equals(noticeBoardVO.getScrtYn())) {
            if (StringUtils.isEmpty(noticeBoardVO.getNttNo())) {
                dao.insertNoticeBoard(noticeBoardVO);
            } else {
                dao.updateNoticeBoard(noticeBoardVO);
            }
        }
    }

    /**
     * 소통광장 - 게시물 삭제
     */
    @Override
    public void deleteNoticeBoard(NoticeBoardVO noticeBoardVO) {

        dao.deleteNoticeBoard(noticeBoardVO);
    }

    @Override
    public void deleteNoticeBoardComment(NoticeBoardCommentVO noticeBoardCommentVO) {
        dao.deleteNoticeBoardComment(noticeBoardCommentVO);
    }

    /**
     * 소통광장 - 게시물 목록 - 게시물 상세조회
     */
    @Override
    public List<NoticeBoardVO> getNoticeBoardDetail(Map<String, Object> searchMap) {

        // 조회수 CNT updateCnt
        if ("Y".equals(searchMap.get("isRead"))) {
            dao.updateDetailReadCount(searchMap); // 조회수 CNT
        }
        return dao.getNoticeBoardDetail(searchMap);
    }

    /**
     * 소통광장 - 게시물 상세조회 - 추천
     */
    @Override
    public void setNBRecommend(NoticeBoardVO noticeBoardVO) {

        dao.updateNBRecommend(noticeBoardVO);

    }

    /**
     * 소통광장 - 게시물 상세조회 - 비추천
     */
    @Override
    public void setNBDisrecommend(NoticeBoardVO noticeBoardVO) {

        dao.updateNBDisrecommend(noticeBoardVO);

    }

    /**
     * 소통광장 - 게시물 상세조회 비밀글 - 비밀번호 검증
     */
    @Override
    public String checkPassword(Map<String, Object> searchMap) {
        String password = (String) searchMap.get("oldPasswd");
        String encodedPassword = dao.getCheckPassword(searchMap);

        boolean matches = passwordEncoder.matches(password, encodedPassword);

        return matches ? RESULT_SUCCESS : RESULT_FAILURE;

    }
}
