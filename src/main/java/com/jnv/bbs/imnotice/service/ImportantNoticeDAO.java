package com.jnv.bbs.imnotice.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.bbs.vo.NoticeBoardVO;

@Mapper("importantNoticeDAO")
public interface ImportantNoticeDAO {

    List<NoticeBoardVO> getImportNoticeManage(Map<String, Object> searchMap);

    void updateImportNoticeManage(NoticeBoardVO noticeBoardVO);

}
