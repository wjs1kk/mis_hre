package com.jnv.sm.code.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.CommonCodeHeaderVO;
import com.jnv.sm.vo.CommonCodeLineVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("commonCodeManageDAO")
public interface CommonCodeManageDAO {

    List<CommonCodeHeaderVO> getCodeHeaderList(Map<String, Object> params);

    List<CommonCodeLineVO> getCodeLineList(Map<String, Object> params);

    void insertCodeHeader(CommonCodeHeaderVO codeHeader);

    void updateCodeHeader(CommonCodeHeaderVO codeHeader);

    void deleteCodeHeader(CommonCodeHeaderVO codeHeader);

    void insertCodeLine(CommonCodeLineVO codeLine);

    void updateCodeLine(CommonCodeLineVO codeLine);

    void deleteCodeLine(CommonCodeLineVO codeLine);

    void deleteCodeHeaderLine(CommonCodeHeaderVO codeHeader);

    int getDuplicatedKeyCnt(CommonCodeHeaderVO codeHeader);

    int getDuplicatedKeyCnt2(CommonCodeLineVO codeLine);

}
