package com.jnv.mal.service;

import java.util.List;
import java.util.Map;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

import com.jnv.mal.vo.EmlSndVO;

@Mapper("emlSndDAO")
public interface EmlSndDAO {

    List<EmlSndVO> getEmlSndList(Map<String, Object> searchMap);

    List<EmlSndVO> getEmlSndUser(Map<String, Object> searchMap);

    List<EmlSndVO> getTmpltList(Map<String, Object> searchMap);

    int insertTmpltList(EmlSndVO vo);

    int updateTmpltList(EmlSndVO vo);

    List<EmlSndVO> setTmpltDtl(Map<String, Object> searchMap);

    int deleteTmpltList(EmlSndVO vo);

    List<EmlSndVO> getEmlSndDtl(Map<String, Object> searchMap);

    List<EmlSndVO> getEmlSndDtl2(Map<String, Object> searchMap);

    void setEmlSndInfo(EmlSndVO vo);

    void setEmlRsvInfo(EmlSndVO vo);

}
