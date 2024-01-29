package com.jnv.common.attach.controller;

import static com.jnv.common.util.Constants.FIELD_DATA;
import static com.jnv.common.util.Constants.RESULT_VIEW;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.OutputStream;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.collections4.SetUtils;
import org.apache.commons.compress.archivers.ArchiveEntry;
import org.apache.commons.compress.archivers.ArchiveException;
import org.apache.commons.compress.archivers.ArchiveInputStream;
import org.apache.commons.compress.archivers.ArchiveStreamFactory;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.tika.Tika;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.PathResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.util.MimeType;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jnv.common.accesslog.annotation.AccessLogging;
import com.jnv.common.accesslog.annotation.ParamInfo;
import com.jnv.common.accesslog.service.AccessLoggerService;
import com.jnv.common.attach.service.FileUploadService;
import com.jnv.common.encrypt.service.FileEncryptService;
import com.jnv.common.util.ArrayUtil;
import com.jnv.common.vo.ThumbnailedFileVO;
import com.jnv.jncore.argumentresolver.JnFileResult;
import com.jnv.jncore.common.file.service.CommonFileService;
import com.jnv.jncore.exception.BusinessException;
import com.jnv.jncore.exception.controller.BaseAjaxController;

import org.egovframe.rte.fdl.cmmn.exception.EgovBizException;

@Controller
public class FileUploadController extends BaseAjaxController {

    private static final String KEY_MESSAGE = "message";

    private static final Logger LOG = LoggerFactory.getLogger(FileUploadController.class);

    @Value("#{systemProp['commonFilePath']}")
    private String commonFilePath;

    @Value("#{systemProp['rootFilePath']}")
    private String rootFilePath;

    @Value("#{systemProp['maxImageSize']}")
    private Long maxImageSize;

    @Resource(name = "fileUploadService")
    private FileUploadService service;

    @Resource(name = "commonFileService")
    private CommonFileService fileService;

    @Resource(name = "fileEncryptService")
    private FileEncryptService encryptService;

    @Resource(name = "accessLoggerService")
    private AccessLoggerService accessLoggerService;

    @Autowired
    private ObjectMapper objectMapper;

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "첨부파일 목록 조회",
        paramInfo = {
            @ParamInfo(paramName = "fileId", displayName = "첨부파일 목록 ID"),
            @ParamInfo(paramName = "fileSeq", displayName = "첨부파일 순번"),
            @ParamInfo(paramName = "uploadType", displayName = "업로드 유형") })
    @RequestMapping("attach/list.do")
    public String searchAttachList(@RequestParam Map<String, Object> param, HttpServletRequest req, ModelMap model) {
        List<ThumbnailedFileVO> list = service.selectFileList(param);
        model.addAttribute(FIELD_DATA, list);

        return RESULT_VIEW;
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "첨부파일 목록 조회",
        paramInfo = {
            @ParamInfo(paramName = "fileId", displayName = "첨부파일 목록 ID"),
            @ParamInfo(paramName = "fileSeq", displayName = "첨부파일 순번"),
            @ParamInfo(paramName = "uploadType", displayName = "업로드 유형") })
    @RequestMapping("attach/dextList.do")
    public String searchDextAttachList(
        @RequestParam Map<String, Object> param, HttpServletRequest req, ModelMap model) {
        List<Map<String, Object>> list = service.selectDextFileList(param);
        model.addAttribute(FIELD_DATA, list);

        return RESULT_VIEW;
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "첨부파일 업로드")
    @RequestMapping("attach/uploadFile.do")
    public ModelAndView uploadFile(
        @RequestParam Map<String, String> param,
        HttpServletRequest req)
            throws IOException, EgovBizException {
        ModelAndView modelAndView = new ModelAndView(RESULT_VIEW);
        String fileId = param.get("fileId");
        MultipartHttpServletRequest multipartReq = (MultipartHttpServletRequest) req;
        MultipartFile multipartFile = multipartReq.getFile("file");

        String noEncrypt = param.get("noEncrypt");

        try {
            ThumbnailedFileVO vo = saveUploadedFile(
                param.get("uploadType"), fileId, multipartFile, !Objects.equals(noEncrypt, "1"));
            modelAndView.addObject("data", Arrays.asList(vo));
        } catch (Exception e) {
            LOG.error("파일 업로드 실패", e);
            modelAndView.addObject("fileType", "파일을 업로드하는 중 오류가 발생하였습니다.");
            modelAndView.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return modelAndView;
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "대용량 첨부파일 업로드")
    @RequestMapping("attach/uploadDextFile.do")
    public ModelAndView uploadDextFile(@RequestParam Map<String, String> param, HttpServletRequest req) {
        ModelAndView modelAndView = new ModelAndView(RESULT_VIEW);
        String fileId = param.get("fileId");
        MultipartHttpServletRequest multipartReq = (MultipartHttpServletRequest) req;
        MultipartFile multipartFile = multipartReq.getFile("DEXTUploadX5_FileData");

        try {
            ThumbnailedFileVO vo = saveUploadedFile(
                param.get("uploadType"), fileId, multipartFile, false);
            modelAndView.addObject("data", Arrays.asList(vo));
        } catch (Exception e) {
            LOG.error("파일 업로드 실패", e);
            modelAndView.addObject("fileType", "파일을 업로드하는 중 오류가 발생하였습니다.");
            modelAndView.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return modelAndView;
    }

    @RequestMapping("attach/uploadImage.do")
    @ResponseBody
    public ResponseEntity<Map<String, Object>> uploadImage(MultipartHttpServletRequest req)
        throws IOException {
        Iterator<String> names = req.getFileNames();
        Map<String, Object> data = new HashMap<>();

        if (names.hasNext()) {
            String fieldName = names.next();
            MultipartFile multipartFile = req.getFile(fieldName);

            if (multipartFile == null) {
                data.put(KEY_MESSAGE, "파일이 없습니다.");
                return ResponseEntity.badRequest()
                        .build();
            }

            Date date = new Date();
            SimpleDateFormat monthFormat = new SimpleDateFormat("yyyyMM");
            SimpleDateFormat dayFormat = new SimpleDateFormat("dd");
            SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
            String month = monthFormat.format(date);
            String day = dayFormat.format(date);

            // 업로드한 파일이 저장되는 경로를 생성한다.
            Path uploadPath = Paths.get("images", month, day);
            Path fileFullPath = Paths.get(commonFilePath).getParent().resolve(uploadPath);
            String originalFileName = multipartFile.getOriginalFilename();

            if (StringUtils.isEmpty(originalFileName)) {
                data.put(KEY_MESSAGE, "파일명을 확인할 수 없습니다.");
                return ResponseEntity.badRequest()
                        .build();
            }

            int dot = originalFileName.lastIndexOf('.');
            if (dot < 0) {
                data.put(KEY_MESSAGE, "확장자가 bmp, jpg, gif, png, webp, heif인 파일만 업로드할 수 있습니다.");
                return ResponseEntity.badRequest()
                    .body(data);
            }
            String extension = originalFileName.substring(originalFileName.lastIndexOf('.'));

            if (!SetUtils.hashSet(".bmp", ".jpg", ".gif", ".png", ".webp", ".heif").contains(extension)) {
                data.put(KEY_MESSAGE, "확장자가 bmp, jpg, gif, png, webp, heif인 파일만 업로드할 수 있습니다.");
                return ResponseEntity.badRequest()
                    .body(data);
            }

            if (maxImageSize != null && maxImageSize > 0) {
                long size = multipartFile.getSize();
                if (maxImageSize.compareTo(size) <= 0) {
                    data.put("KEY_MESSAGE", String.format("이미지 크기를 %s 이내로 조절해주세요.", FileUtils.byteCountToDisplaySize(size)));
                }
            }

            try {
                Files.createDirectories(fileFullPath);

                String fileMask = UUID.randomUUID().toString() + extension;
                Path realFilePath = fileFullPath.resolve(fileMask);

                while (Files.exists(realFilePath)) {
                    fileMask = UUID.randomUUID().toString() + extension;
                    realFilePath = fileFullPath.resolve(fileMask);
                }

                File realFile = realFilePath.toFile();
                multipartFile.transferTo(realFile);

                String url = UriComponentsBuilder.fromPath(req.getContextPath())
                        .pathSegment("attach", "image.do")
                        .queryParam("d", dateFormat.format(date))
                        .queryParam("f", fileMask)
                        .build()
                        .encode()
                        .toString();
                data.put("location", url);
            } catch (IOException e) {
                data.put(KEY_MESSAGE, "파일을 업로드하는 중 오류가 발생하였습니다.");
                return ResponseEntity.badRequest()
                    .body(data);
            }
        } else {
            return ResponseEntity.badRequest()
                .body(data);
        }
        return ResponseEntity.ok(data);
    }

    @RequestMapping("attach/image.do")
    public JnFileResult image(@RequestParam("d") String date, @RequestParam("f") String fileName) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat monthFormat = new SimpleDateFormat("yyyyMM");
        SimpleDateFormat dayFormat = new SimpleDateFormat("dd");

        Date dt;
        try {
            dt = dateFormat.parse(date);
        } catch (ParseException e) {
            throw new BusinessException("fail.common.msg");
        }
        String month = monthFormat.format(dt);
        String day = dayFormat.format(dt);

        Path path = Paths.get(commonFilePath).getParent().resolve(Paths.get("images", month, day, fileName));
        if (!Files.exists(path)) {
            throw new BusinessException("fail.common.msg");
        }

        Tika tika = new Tika();
        String mimeType;
        try {
            mimeType = tika.detect(path);
        } catch (IOException e) {
            mimeType = MimeTypeUtils.APPLICATION_JSON_VALUE;
        }

        JnFileResult result = new JnFileResult();
        PathResource resource = new PathResource(path);
        result.setContentType(mimeType);
        result.setFilename(fileName);
        result.setFileData(resource);
        return result;
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "파일 다운로드",
        paramInfo = {
            @ParamInfo(paramName = "fileId", displayName = "첨부파일 목록 ID"),
            @ParamInfo(paramName = "fileSeq", displayName = "첨부파일 순번"),
            @ParamInfo(paramName = "force", displayName = "항상 다운로드") })
    @RequestMapping("attach/download.do")
    public void download(
        @RequestParam Map<String, String> param,
        HttpServletRequest req,
        HttpServletResponse resp)
            throws IOException {
        String fileId = param.get("fileId");
        String fileSeq = param.get("fileSeq");

        boolean forceDownload = req.getParameterMap().containsKey("force");

        // 파일 정보를 불러온다.
        ThumbnailedFileVO fileVO = service.selectFile(fileId, fileSeq);
        if (fileVO == null)
            throw new FileNotFoundException();

        File file = new File(fileVO.getLink());

        if (!file.exists())
            throw new FileNotFoundException();

        File originalFile;
        if (fileVO.isEncrypted()) {
            Date start = new Date();
            try {
                // 파일을 복호화한다.
                originalFile = File.createTempFile("dec", null);
                originalFile.deleteOnExit();
                encryptService.decryptFile(file, originalFile);
                accessLoggerService.insertDecryptLog(start, true, fileId, fileSeq, fileVO.getName(), fileVO.getLink());
            } catch (Exception e) {
                accessLoggerService.insertDecryptLog(start, false, fileId, fileSeq, fileVO.getName(), fileVO.getLink());
                throw e;
            }
        } else {
            originalFile = file;
        }

        // 파일 크기를 확인한다.
        String mime = req.getServletContext().getMimeType(fileVO.getName());
        if (StringUtils.isEmpty(mime)) {
            mime = MimeTypeUtils.APPLICATION_OCTET_STREAM_VALUE;
        }
        long size = originalFile.length();

        // 응답 헤더를 설정한다.
        resp.setContentLengthLong(size);
        resp.setContentType(mime);

        String fileNameEncoded = UriComponentsBuilder.fromPath(fileVO.getName())
            .build()
            .encode()
            .toString();

        List<MimeType> inlineMimeTypes = MimeTypeUtils.parseMimeTypes("image/*,application/pdf");

        String mimeType = mime;
        if (!forceDownload
            && inlineMimeTypes.stream().anyMatch(m -> m.includes(MimeTypeUtils.parseMimeType(mimeType)))) {
            resp.setHeader(HttpHeaders.CONTENT_DISPOSITION, String.format("inline; filename=\"%s\"", fileNameEncoded));
        } else {
            resp.setHeader(
                HttpHeaders.CONTENT_DISPOSITION, String.format("attachment; filename=\"%s\"", fileNameEncoded));
        }

        resp.setHeader(HttpHeaders.CONTENT_ENCODING, "binary");
        resp.addHeader("Access-Control-Allow-Origin", "*");

        // 파일을 응답의 출력 스트림으로 전달한다.
        try (FileInputStream in = new FileInputStream(originalFile);
            BufferedInputStream bin = new BufferedInputStream(in);
            OutputStream out = resp.getOutputStream();
            BufferedOutputStream bout = new BufferedOutputStream(out)) {
            IOUtils.copy(bin, bout);
        } finally {
            if (fileVO.isEncrypted()) {
                try {
                    Files.deleteIfExists(originalFile.toPath());
                } catch (IOException e) {
                    LOG.warn("Could not delete temporary file.", e);
                }
            }
        }
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "첨부파일 삭제",
        paramInfo = {
            @ParamInfo(paramName = "fileId", displayName = "첨부파일 목록 ID"),
            @ParamInfo(paramName = "fileSeq", displayName = "첨부파일 순번") })
    @RequestMapping("attach/delete.do")
    public ModelAndView deleteFile(@RequestParam Map<String, String> map, HttpServletRequest req) {
        ModelAndView modelAndView = new ModelAndView(RESULT_VIEW);
        String fileId = StringUtils.unwrap(map.get("fileId"), '"');
        String fileSeq = StringUtils.unwrap(map.get("fileSeq"), '"');

        if (StringUtils.isEmpty(fileId) || StringUtils.isEmpty(fileSeq)) {
            modelAndView.setStatus(HttpStatus.BAD_REQUEST);
            return modelAndView;
        }

        try {
            service.deleteFile(fileId, fileSeq);
        } catch (IOException e) {
            modelAndView.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return modelAndView;
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "여러 첨부파일 삭제",
        paramInfo = {
            @ParamInfo(paramName = "list", displayName = "삭제 대상 목록") })
    @RequestMapping("attach/deleteMultiple.do")
    public ModelAndView deleteMultiple(@RequestParam Map<String, String> map, HttpServletRequest req) {
        ModelAndView modelAndView = new ModelAndView(RESULT_VIEW);
        List<Map<String, String>> list;
        try {
            list = parseNullableJson(map.get("list"), new TypeReference<List<Map<String, String>>>() {
            });
        } catch (JsonProcessingException e) {
            modelAndView.setStatus(HttpStatus.BAD_REQUEST);
            return modelAndView;
        }

        service.deleteMultipleFile(list);

        return modelAndView;
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "첨부파일 전체 삭제",
        paramInfo = { @ParamInfo(paramName = "fileId", displayName = "첨부파일 목록 ID") })
    @RequestMapping("attach/deleteAll.do")
    public ModelAndView deleteFileList(@RequestParam Map<String, String> map, HttpServletRequest req) {
        ModelAndView modelAndView = new ModelAndView(RESULT_VIEW);
        String fileId = StringUtils.unwrap(map.get("fileId"), '"');

        if (StringUtils.isEmpty(fileId)) {
            modelAndView.setStatus(HttpStatus.BAD_REQUEST);
            return modelAndView;
        }

        service.deleteFileList(fileId);

        return modelAndView;
    }

    private ThumbnailedFileVO saveUploadedFile(
        String saveType, String fileId, MultipartFile multipartFile, boolean encrypt)
        throws IOException, InvocationTargetException {
        Date date = new Date();
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        SimpleDateFormat monthFormat = new SimpleDateFormat("yyyyMM");
        SimpleDateFormat dayFormat = new SimpleDateFormat("dd");

        // 업로드한 파일이 저장되는 경로를 생성한다.
        String fileMask = format.format(date) + UUID.randomUUID().toString().substring(20);
        String uploadPath = Paths.get(monthFormat.format(date), dayFormat.format(date)).toString();
        String fileFullPath = Paths.get(commonFilePath, uploadPath).toString();
        String originalFileName = multipartFile.getOriginalFilename();

        File dir = new File(fileFullPath);

        if (!dir.exists()) {
            Files.createDirectories(dir.toPath());
        }

        // 파일 업로드 정보를 생성한다.
        ThumbnailedFileVO fileVO = new ThumbnailedFileVO();
        fileVO.setFileId(fileId);
        fileVO.setFileName(originalFileName);
        fileVO.setFileMask(fileMask);
        fileVO.setFileSize(multipartFile.getSize());
        fileVO.setFileUploadPath(uploadPath);
        fileVO.setFileUploadFullPath(fileFullPath);
        fileVO.setUploadType(saveType);
        fileVO.setLink(Paths.get(fileFullPath, fileMask).toString());
        fileVO.setEncrypted(encrypt);

        File distFile = new File(fileFullPath, fileMask);

        // 암호화해야 하는 경우
        if (encrypt) {
            // 업로드한 파일을 임시 파일에 저장한다.
            File tempFile = File.createTempFile("enc", null);
            tempFile.deleteOnExit();
            copyFile(multipartFile, tempFile);
            // 임시 파일을 암호화하여 최종 업로드 경로에 저장한다.
            encryptService.encryptFile(tempFile, distFile);
            Files.delete(tempFile.toPath());
        } else {
            // 암호화하지 않는 경우 바로 저장한다.
            copyFile(multipartFile, distFile);
        }

        return fileVO;
    }

    private void copyFile(MultipartFile source, File destination) throws IOException, InvocationTargetException {
        File canonical = destination.getCanonicalFile();
        try {
            File parent = canonical.getParentFile();
            Method saveAs = source.getClass()
                .getMethod("saveAs", String.class, String.class, Boolean.TYPE, Boolean.TYPE);
            if (saveAs != null) {
                saveAs.invoke(source, parent.getCanonicalPath(), canonical.getName(), true, false);
            } else {
                source.transferTo(destination);
            }
        } catch (NoSuchMethodException | IllegalAccessException | IllegalArgumentException e) {
            source.transferTo(destination);
        }
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "압축파일 내용 조회",
        paramInfo = {
            @ParamInfo(paramName = "fileId", displayName = "첨부파일 목록 ID"),
            @ParamInfo(paramName = "fileSeq", displayName = "첨부파일 순번") })
    @RequestMapping("attach/archivedFileContentsList.do")
    public ModelAndView archivedFileContentsList(@RequestParam String fileId, @RequestParam String fileSeq)
        throws IOException {
        ModelAndView modelAndView = new ModelAndView(RESULT_VIEW);
        // 0. 파일 정보 조회
        ThumbnailedFileVO fileVO = service.selectFile(fileId, fileSeq);

        if (fileVO == null)
            throw new FileNotFoundException();

        File file = new File(fileVO.getLink());

        if (!file.exists())
            throw new FileNotFoundException();

        // 1. 복호화
        File tempFile;
        if (fileVO.isEncrypted()) {
            Date start = new Date();
            try {
                tempFile = File.createTempFile("dec", null);
                tempFile.deleteOnExit();
                encryptService.decryptFile(file, tempFile);
                accessLoggerService.insertDecryptLog(start, true, fileId, fileSeq, fileVO.getName(), fileVO.getLink());
            } catch (Exception e) {
                accessLoggerService.insertDecryptLog(start, false, fileId, fileSeq, fileVO.getName(), fileVO.getLink());
                throw e;
            }
        } else {
            tempFile = file;
        }

        List<Map<String, Object>> list = new ArrayList<>();

        // 2. 파일 목록 확인
        try (FileInputStream in = new FileInputStream(tempFile);
            BufferedInputStream bi = new BufferedInputStream(in);
            ArchiveInputStream ais = new ArchiveStreamFactory().createArchiveInputStream(bi)) {
            Map<String, Object> zipEntry = new HashMap<>();

            zipEntry.put("path", fileVO.getFileId() + "/" + fileVO.getFileSeq() + "/");
            zipEntry.put("name", fileVO.getName());
            zipEntry.put("isDirectory", true);
            zipEntry.put("segments", new String[] { fileVO.getFileId(), fileVO.getFileSeq() });
            list.add(zipEntry);

            for (ArchiveEntry entry = ais.getNextEntry(); entry != null; entry = ais.getNextEntry()) {
                String entryName = fileVO.getFileId() + "/" + fileVO.getFileSeq() + "/" + entry.getName();
                Map<String, Object> map = new HashMap<>();
                map.put("path", entryName);
                map.put("isDirectory", entry.isDirectory());
                String[] segments = StringUtils.removeEnd(entryName, "/").split("/");
                map.put("segments", segments);
                map.put("name", segments[segments.length - 1]);
                list.add(map);
            }

            List<Map<String, Object>> fileList = list.stream()
                .sorted(
                    (a, b) -> ArrayUtil.compare(
                        (String[]) a.get("segments"), (String[]) b.get("segments"),
                        StringUtils::compare))
                .map(e -> {
                    String[] segments = (String[]) e.get("segments");
                    if (segments.length > 2) {
                        String[] parentSegments = Arrays.copyOf(segments, segments.length - 1);
                        String parent = Arrays.stream(parentSegments)
                            .collect(Collectors.joining("/", "", "/"));
                        e.put("parent", parent);
                    }
                    e.remove("segments");
                    return e;
                })
                .collect(Collectors.toList());
            modelAndView.addObject(FIELD_DATA, fileList);
        } catch (ArchiveException e) {
            modelAndView.setStatus(HttpStatus.INTERNAL_SERVER_ERROR);
        } finally {
            // 3. 임시파일 제거
            if (fileVO.isEncrypted()) {
                try {
                    Files.deleteIfExists(tempFile.toPath());
                } catch (IOException e) {
                    LOG.warn("Could not delete temporary file.", e);
                }
            }
        }

        return modelAndView;
    }

    @AccessLogging(
        menuNm = "첨부파일",
        progNm = "첨부파일",
        actionName = "압축파일 내용 다운로드",
        paramInfo = {
            @ParamInfo(paramName = "fileId", displayName = "첨부파일 목록 ID"),
            @ParamInfo(paramName = "fileSeq", displayName = "첨부파일 순번") })
    @RequestMapping("attach/selectArchivedFileContents.do")
    public void selectArchivedFileContents(
        @RequestParam String fileId,
        @RequestParam String fileSeq,
        @RequestParam String path,
        HttpServletRequest req,
        HttpServletResponse resp)
            throws IOException, ArchiveException {
        // 0. 파일 정보 조회
        ThumbnailedFileVO fileVO = service.selectFile(fileId, fileSeq);
        path = path.replace(fileId + "/" + fileSeq + "/", "");
        String[] arr = StringUtils.unwrap(path, '"').split("/");
        String fileName = arr[arr.length - 1];

        File file = Optional.of(fileVO)
                .map(vo -> new File(vo.getLink()))
                .filter(File::exists)
                .orElse(null);

        if (file == null) {
            throw new FileNotFoundException();
        }

        // 1. 복호화
        File tempFile;
        if (fileVO.isEncrypted()) {
            Date start = new Date();
            boolean result = true;
            try {
                tempFile = File.createTempFile("dec", null);
                tempFile.deleteOnExit();
                encryptService.decryptFile(file, tempFile);
            } catch (Exception e) {
                result = false;
                throw e;
            } finally {
                accessLoggerService.insertDecryptLog(start, result, fileId, fileSeq, fileVO.getName(), fileVO.getLink());
            }
        } else {
            tempFile = file;
        }

        try (FileInputStream in = new FileInputStream(tempFile);
            BufferedInputStream bin = new BufferedInputStream(in);
            ArchiveInputStream ain = new ArchiveStreamFactory().createArchiveInputStream(bin)) {
            ArchiveEntry entry = null;
            while ((entry = ain.getNextEntry()) != null) {
                // 압축 파일안 선택한 파일 읽어오기
                if (entry.getName().equals(path)) {
                    // 1. 선택한 파일에 대한 resp 세팅
                    String mime = req.getServletContext().getMimeType(fileName);
                    if (StringUtils.isEmpty(mime)) {
                        mime = MimeTypeUtils.APPLICATION_OCTET_STREAM_VALUE;
                    }

                    resp.setHeader(HttpHeaders.CONTENT_ENCODING, "binary");
                    resp.addHeader("Access-Control-Allow-Origin", "*");
                    String fileNameEncoded = UriComponentsBuilder.fromPath(path)
                        .build()
                        .encode()
                        .toString();
                    resp.setHeader(
                        HttpHeaders.CONTENT_DISPOSITION,
                        String.format("attachment; filename=%s", fileNameEncoded));

                    long entrySize = entry.getSize();
                    if (entrySize > 0) {
                        resp.setContentLengthLong(entrySize);
                    }

                    // 2. 선택한 파일 카피해 읽기
                    try (OutputStream out = resp.getOutputStream();
                        BufferedOutputStream bout = new BufferedOutputStream(out)) {
                        IOUtils.copy(ain, bout);
                    }
                    break;
                }
            }
        } finally {
            // 3. 임시파일 제거
            if (fileVO.isEncrypted()) {
                try {
                    Files.deleteIfExists(tempFile.toPath());
                } catch (IOException e) {
                    LOG.warn("Could not delete temporary file.", e);
                }
            }
        }
    }

    private <T> T parseNullableJson(String json, TypeReference<T> typeRef)
        throws JsonProcessingException {
        if (StringUtils.isEmpty(json))
            return null;
        return objectMapper.readValue(json, typeRef);
    }
}
