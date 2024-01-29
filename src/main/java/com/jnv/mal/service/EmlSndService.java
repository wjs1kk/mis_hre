package com.jnv.mal.service;

import java.util.List;
import java.util.Map;

import com.jnv.mal.vo.EmlSndVO;

public interface EmlSndService {

    List<EmlSndVO> getEmlSndList(Map<String, Object> searchMap);

    List<EmlSndVO> getEmlSndUser(Map<String, Object> searchMap);

    String setTmpltSave(List<EmlSndVO> list);

    List<EmlSndVO> getTmpltList(Map<String, Object> searchMap);

    List<EmlSndVO> setTmpltDtl(Map<String, Object> searchMap);

    String setTmpltUpdate(List<EmlSndVO> list);

    String setTmpltDelete(List<EmlSndVO> list);

    List<EmlSndVO> getEmlSndDtl(Map<String, Object> searchMap);

    List<EmlSndVO> getEmlSndDtl2(Map<String, Object> searchMap);

    String getEmlSnd(EmlSndVO emlSnd, List<EmlSndVO> rcvList);

}
