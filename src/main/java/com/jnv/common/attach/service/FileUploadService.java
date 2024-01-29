package com.jnv.common.attach.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.function.UnaryOperator;

import com.jnv.common.vo.ThumbnailedFileVO;
import com.jnv.jncore.vo.CommonFileVO;

public interface FileUploadService {

    ThumbnailedFileVO selectFile(String fileId, String fileSeq);

    List<ThumbnailedFileVO> selectFileList(Map<String, Object> map);

    List<Map<String, Object>> selectDextFileList(Map<String, Object> map);

    void deleteFile(String fileId, String fileSeq) throws IOException;

    void deleteFileList(String fileId);

    void insertFile(ThumbnailedFileVO map);

    void deleteMultipleFile(List<Map<String, String>> list);

    void saveFileList(List<CommonFileVO> files, boolean append);

    List<ThumbnailedFileVO> selectFileList(Map<String, Object> map, String contextPath,
        UnaryOperator<String> mimeResolver);
}
