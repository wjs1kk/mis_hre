package com.jnv.common.attach.service;

import java.util.List;
import java.util.Map;

import com.jnv.common.vo.ThumbnailedFileVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("fileUploadDAO")
public interface FileUploadDAO {

    ThumbnailedFileVO selectFile(Map<String, ?> map);

    List<ThumbnailedFileVO> selectFileList(Map<String, ?> map);

    void deleteFile(Map<String, ?> map);

    void deleteFileList(Map<String, ?> map);

    void insertFile(ThumbnailedFileVO vo);

    List<Map<String, Object>> selectDextFileList(Map<String, ?> map);

    void deleteMultipleFile(Map<String, ?> map);
}
