package com.jnv.bbs.imnotice.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.NoticeBoardVO;

public interface ImportantNoticeService {

    List<NoticeBoardVO> getImportNoticeManage(Map<String, Object> searchMap);

    void setImportNoticeManage(List<NoticeBoardVO> noticeBoardVO);
}
