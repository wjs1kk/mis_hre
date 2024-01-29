package com.jnv.sm.messageManage.service;

import java.util.List;
import java.util.Map;

import com.jnv.sm.vo.MessageManageVO;

import org.egovframe.rte.psl.dataaccess.mapper.Mapper;

@Mapper("messageManageDAO")
public interface MessageManageDAO {

    List<MessageManageVO> getMessageList(Map<String, Object> params);

    void insertMessage(MessageManageVO messageManageVO);

    void updateMessage(MessageManageVO messageManageVO);

    void deleteMessage(MessageManageVO messageManageVO);

    int getDuplicatedKeyCnt(MessageManageVO messageManage);
}
