package com.jnv.common.attach.service.impl;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.UnaryOperator;

import javax.annotation.Resource;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.jnv.common.attach.service.FileUploadDAO;
import com.jnv.common.attach.service.FileUploadService;
import com.jnv.common.vo.ThumbnailedFileVO;
import com.jnv.jncore.vo.CommonFileVO;

@Service("fileUploadService")
@Transactional
public class FileUploadServiceImpl implements FileUploadService {

    private static Logger LOG = LoggerFactory.getLogger(FileUploadServiceImpl.class);

    @Resource(name = "fileUploadDAO")
    private FileUploadDAO dao;

    @Override
    public ThumbnailedFileVO selectFile(String fileId, String fileSeq) {
        Map<String, String> map = new HashMap<>();
        map.put("fileId", fileId);
        map.put("fileSeq", fileSeq);
        return dao.selectFile(map);
    }

    @Override
    public List<ThumbnailedFileVO> selectFileList(Map<String, Object> map) {
        ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        ServletContext ctx = attrs.getRequest().getServletContext();

        return selectFileList(map, ctx.getContextPath(), name -> ctx.getMimeType(name));
    }

    @Override
    public List<ThumbnailedFileVO> selectFileList(Map<String, Object> map, String contextPath,
        UnaryOperator<String> mimeResolver) {
        map.put("contextPath", contextPath);
        map.put("delete", false);
        UnaryOperator<String> resolver = (mimeResolver == null) ? FileUploadServiceImpl::defaultMimeResolver
            : mimeResolver;

        List<ThumbnailedFileVO> list = dao.selectFileList(map);

        for (ThumbnailedFileVO file : list) {
            String mime = resolver.apply(file.getName());
            if (mime == null) {
                mime = MimeTypeUtils.APPLICATION_OCTET_STREAM_VALUE;
            }
            file.setType(mime);
        }

        return list;
    }

    @Override
    public List<Map<String, Object>> selectDextFileList(Map<String, Object> map) {
        ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest req = attrs.getRequest();
        ServletContext ctx = req.getServletContext();

        map.put("contextPath", attrs.getRequest().getContextPath());
        map.put("delete", false);

        List<Map<String, Object>> list = dao.selectDextFileList(map);

        for (Map<String, Object> item : list) {
            String mime = ctx.getMimeType((String) item.get("name"));
            String url = String.format("%s%s", req.getContextPath(), item.get("url"));
            item.put("url", url);
            item.put("downUrl", url + "&force");

            if (mime == null) {
                mime = MimeTypeUtils.APPLICATION_OCTET_STREAM_VALUE;
            } else if (MimeTypeUtils.parseMimeType("image/*").includes(MimeTypeUtils.parseMimeType(mime))) {
                item.put("thumbUrl", url);
            }
        }

        return list;
    }

    @Override
    public void deleteFile(String fileId, String fileSeq) {
        CommonFileVO fileVO = selectFile(fileId, fileSeq);

        try {
            Files.deleteIfExists(Paths.get(fileVO.getLink()));
        } catch (IOException e) {
            LOG.warn("파일을 삭제할 수 없습니다. 경로: {}", fileVO.getLink(), e);
        }

        Map<String, Object> map = new HashMap<>();
        map.put("fileId", fileId);
        map.put("fileSeq", fileSeq);
        dao.deleteFile(map);
    }

    @Override
    public void deleteFileList(String fileId) {
        Map<String, Object> map = new HashMap<>();
        map.put("fileId", fileId);
        map.put("delete", true);

        List<ThumbnailedFileVO> list = dao.selectFileList(map);

        dao.deleteFileList(map);

        for (ThumbnailedFileVO fileItem : list) {
            try {
                Files.deleteIfExists(Paths.get(fileItem.getLink()));
            } catch (IOException e) {
                LOG.warn("파일을 삭제할 수 없습니다. 경로: {}", fileItem.getLink(), e);
            }
        }
    }

    @Override
    public void insertFile(ThumbnailedFileVO map) {
        dao.insertFile(map);
    }

    @Override
    public void deleteMultipleFile(List<Map<String, String>> list) {
        Map<String, List<Map<String, String>>> map = new HashMap<>();
        map.put("list", list);

        for (Map<String, String> item : list) {
            String fileId = item.get("fileId");
            String fileSeq = item.get("fileSeq");
            CommonFileVO fileVO = selectFile(fileId, fileSeq);
            try {
                Files.deleteIfExists(Paths.get(fileVO.getLink()));
            } catch (IOException e) {
                LOG.warn("파일을 삭제할 수 없습니다. 경로: {}", fileVO.getLink(), e);
            }
        }

        dao.deleteMultipleFile(map);
    }

    @Override
    public void saveFileList(List<CommonFileVO> files, boolean append) {

    }

    private static String defaultMimeResolver(String fileName) {
        return MimeTypeUtils.APPLICATION_OCTET_STREAM_VALUE;
    }
}
