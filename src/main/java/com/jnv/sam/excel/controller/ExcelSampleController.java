package com.jnv.sam.excel.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.annotation.Resource;

import com.jnv.common.util.excel.generator.DataType;
import com.jnv.common.util.excel.generator.ExcelFileGenerator;
import com.jnv.common.util.excel.generator.ExcelFileGeneratorOptions;
import com.jnv.common.util.excel.generator.GridCell;
import com.jnv.common.util.excel.generator.GridRow;
import com.jnv.common.util.excel.generator.GridSheet;
import com.jnv.sam.typetwo.service.TypeTwoService;
import com.jnv.sm.program.service.ProgramService;
import com.jnv.sm.vo.ProgramHeaderVO;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import org.apache.poi.ss.usermodel.Workbook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.UriComponentsBuilder;

@Controller
public class ExcelSampleController {

    private static final Logger LOG = LoggerFactory.getLogger(ExcelSampleController.class);

    @Resource(name = "typeTwoService")
    private TypeTwoService service;

    @Resource(name = "programService")
    private ProgramService programService;

    @RequestMapping("/sam/getExcelSampleData.do")
    public NexacroResult getExcelSampleData() throws Exception {
        NexacroResult result = new NexacroResult();

        result.addDataSet("dsTypeTwo", service.getTypeTwoList(new HashMap<>()));
        return result;
    }

    @RequestMapping("sam/excel/downloadLargeExcel.do")
    @ResponseBody
    public ResponseEntity<InputStreamResource> downloadExcel(
            @RequestParam Map<String, Object> params) throws IOException {
        // 자료를 조회한다.
        List<ProgramHeaderVO> programList1 = programService.selectProgramList(params);
        List<ProgramHeaderVO> programList2 = programService.selectProgramList(params);

        // 엑셀 생성기를 초기화한다.
        ExcelFileGenerator generator = ExcelFileGenerator.getInstance("xlsx");
        ExcelFileGeneratorOptions options = new ExcelFileGeneratorOptions();

        // 조회 결과로 어떻게 엑셀 시트를 생성할 것인지 설정한다.
        GridSheet sheet = new GridSheet("예시 1");
        sheet.setTitle("프로그램");
        // 각 열의 너비를 설정한다. 열의 너비는 글자 수(폭이 가장 넓은 숫자가 들어갈 수 있는 개수)로 설정된다.
        sheet.setColumnWidths(11, 11, 11, 13, 21, 14, 21, 14, 20, 20, 20, 11, 11);
        // 머릿말 행의 내용을 설정한다.
        sheet.addHeaderRow(new GridRow().cells(
                GridCell.text("시스템 ID"),        // 제목 행에 표시할 텍스트를 설정한다.
                GridCell.text("프로그램 ID"),
                GridCell.text("프로그램명"),
                GridCell.text("프로그램 유형"),
                GridCell.text("URL"),
                GridCell.text("프로그램 설명"),
                GridCell.text("프로그램 파일명"),
                GridCell.text("대체 URL"),
                GridCell.text("대체URL 사용여부"),
                GridCell.text("권한레벨 사용여부"),
                GridCell.text("권한레벨 사용설명"),
                GridCell.text("등록자"),
                GridCell.text("등록일")
                // 행 높이는 포인트(pt)로 설정한다.
        ).setHeight(16.0f));
        // 본문 행의 내용을 설정한다.
        sheet.addBodyRow(new GridRow().cells(
                GridCell.bind("sysId"),     // 본문 행에 표시할 속성의 이름을 설정한다.
                GridCell.bind("progId"),
                GridCell.bind("progNm"),
                GridCell.bind("progTy"),
                GridCell.bind("progUrl"),
                GridCell.bind("progDc"),
                GridCell.bind("progFileNm"),
                GridCell.bind("substituteUrl"),
                GridCell.bind("substituteUseYn"),
                GridCell.bind("permissionUseYn"),
                GridCell.bind("permissionDc"),
                GridCell.bind("rgstNm"),
                GridCell.bind("rgstDt")
        ));
        // 요약 행의 내용을 설정한다.
        sheet.addSummaryRow(new GridRow().cells(
                GridCell.text("총 개수").setColSpan(11),
                GridCell.text(String.format("%d", programList1.size())).setColSpan(2).setType(DataType.NUMBER)
        ));
        options.addSheet(sheet);

        // 2줄짜리 헤더 예시
        GridSheet sheet2 = new GridSheet("예시 2");
        sheet2.setColumnWidths(11, 11, 11, 11, 21, 14, 21, 14, 11, 11, 11, 11, 11);
        sheet2.addHeaderRow(new GridRow().cells(
                GridCell.text("시스템 ID").setRowSpan(2),
                GridCell.text("프로그램 ID").setRowSpan(2),
                GridCell.text("프로그램명").setRowSpan(2),
                GridCell.text("프로그램 유형").setRowSpan(2),
                GridCell.text("URL").setRowSpan(2),
                GridCell.text("프로그램 설명").setRowSpan(2),
                GridCell.text("프로그램 파일명").setRowSpan(2),
                GridCell.text("대체 URL").setColSpan(2),
                GridCell.text("권한레벨").setColSpan(2),
                GridCell.text("등록자").setRowSpan(2),
                GridCell.text("등록일").setRowSpan(2)
        ));
        sheet2.addHeaderRow(new GridRow().cells(
                GridCell.text("URL"),
                GridCell.text("사용 여부"),
                GridCell.text("권한 레벨"),
                GridCell.text("사용 여부")
        ));
        sheet2.addBodyRow(new GridRow().cells(
                GridCell.bind("sysId"),
                GridCell.bind("progId"),
                GridCell.bind("progNm"),
                GridCell.bind("progTy"),
                GridCell.bind("progUrl"),
                GridCell.bind("progDc"),
                GridCell.bind("progFileNm"),
                GridCell.bind("substituteUrl"),
                GridCell.bind("substituteUseYn"),
                GridCell.bind("permissionUseYn"),
                GridCell.bind("permissionDc"),
                GridCell.bind("rgstNm"),
                GridCell.bind("rgstDt")
        ));
        options.addSheet(sheet2);

        // 조회한 자료를 바탕으로 엑셀 파일을 생성한다.
        Map<String, List<?>> map = new HashMap<>();
        map.put(sheet.getName(), programList1);
        map.put(sheet2.getName(), programList2);
        File tempFile;
        try (Workbook workbook = generator.generate(options, map)) {
            tempFile = File.createTempFile("KRITPMSTMP", ".xslx");

            try (OutputStream out = Files.newOutputStream(tempFile.toPath())) {
                workbook.write(out);
            }
        }

        // 조회 결과를 응답으로 전달한다.
        InputStream res = new FileInputStream(tempFile) {
            @Override
            public void close() throws IOException {
                super.close();
                if (tempFile.delete()) {
                    LOG.debug("Temp file succesfully deleted");
                }
            }
        };

        String encodedFileName = UriComponentsBuilder.newInstance()
                .path("엑셀 다운로드 샘플.xlsx")
                .build()
                .encode(StandardCharsets.UTF_8)
                .getPath();

        return ResponseEntity.ok()
                .contentLength(tempFile.length())
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"))
                .header("Content-Disposition", String.format("attachment; filename=%s", encodedFileName))
                .body(new InputStreamResource(res));
    }
}
