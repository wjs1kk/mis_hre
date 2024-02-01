package com.jnv.mis.hre.service;

import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import com.jnv.jncore.vo.ComboVO;
import com.jnv.mis.hre.vo.Hre3010VO;

public interface Hre3010Service {
	List<Hre3010VO> getStdMgtList();
	List<ComboVO> selectHreCodeCombo(Map<String, ? extends Object> params);
	CompletableFuture<List<ComboVO>> selectCommonCodeComboAsync(Map<String, String> params);
}
