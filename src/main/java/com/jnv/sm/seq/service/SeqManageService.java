package com.jnv.sm.seq.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.SeqManageVO;

public interface SeqManageService {

    List<SeqManageVO> selectSeqManageList(Map<String, ?> params);

    void saveSeqManageList(List<SeqManageVO> list);

}
