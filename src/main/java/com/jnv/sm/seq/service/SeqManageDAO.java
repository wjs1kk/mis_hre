package com.jnv.sm.seq.service;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.jnv.sm.vo.SeqManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("seqManageDAO")
public interface SeqManageDAO {

    List<SeqManageVO> selectSeqManageList(Map<String, ?> params);

    void insertSeqManageItem(SeqManageVO item);

    void updateSeqManageItem(SeqManageVO item);

    void deleteSeqManageItem(SeqManageVO item);

    SeqManageVO selectSeqManageItemById(@Param("seqId") String seqId, @Param("lock") boolean lock);

    void updateSeqCurrentValue(SeqManageVO item);
}
