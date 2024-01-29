package com.jnv.bbs.faq.service;

import java.util.List;
import java.util.Map;

import com.jnv.bbs.vo.FaqVO;

public interface FaqListService {

    List<FaqVO> getFaqList(Map<String, Object> searchMap);

}
