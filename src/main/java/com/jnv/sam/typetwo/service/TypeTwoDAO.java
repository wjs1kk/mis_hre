package com.jnv.sam.typetwo.service;

import java.util.List;
import java.util.Map;

import com.jnv.sam.vo.TypeTwoVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("typeTwoDAO")
public interface TypeTwoDAO {

    List<TypeTwoVO> getTypeTwoList(Map<String, Object> params);

    void insertTypeTwo(TypeTwoVO typeTwoVO);
    void updateTypeTwo(TypeTwoVO typeTwoVO);
    void deleteTypeTwo(TypeTwoVO typeTwoVO);

    int getDuplicatedKeyCnt(TypeTwoVO typeTwoVO);
}
