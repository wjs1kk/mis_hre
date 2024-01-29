package com.jnv.sm.messageManage.service.impl;

import static com.jnv.common.util.Constants.RESULT_FAILURE;
import static com.jnv.common.util.Constants.RESULT_SUCCESS;
import static com.jnv.common.util.Constants.ROW_TYPE_DELETED;
import static com.jnv.common.util.Constants.ROW_TYPE_INSERTED;
import static com.jnv.common.util.Constants.ROW_TYPE_UPDATED;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.jnv.jncore.exception.BusinessException;
import com.jnv.sm.messageManage.service.MessageManageDAO;
import com.jnv.sm.messageManage.service.MessageManageService;
import com.jnv.sm.vo.MessageManageVO;

@Service("messageManageService")
@Transactional
public class MessageManageServiceImpl implements MessageManageService {

    @Resource(name = "messageManageDAO")
    private MessageManageDAO dao;

    @Override
    public List<MessageManageVO> getMessageList(Map<String, Object> paramMap) throws Exception {
        return dao.getMessageList(paramMap);
    }

    @Override
    public String setMessageList(List<MessageManageVO> messageManageList) throws Exception {
        String rmsg = RESULT_FAILURE;

        for (MessageManageVO messageManage : messageManageList) {
            String rowCheck = StringUtils.defaultString(messageManage.getRowCheck());
            if ("1".equals(rowCheck)) {
                String rowStatus = StringUtils.defaultString(messageManage.getRowStatus());
                switch (rowStatus) {
                case ROW_TYPE_INSERTED:
                    // 중복체크
                    int cntDupl = dao.getDuplicatedKeyCnt(messageManage);
                    if (cntDupl > 0) {
                        throw new BusinessException("errors.duplication", new String[] { "field.msgId" });
                    }
                    dao.insertMessage(messageManage);
                    break;
                case ROW_TYPE_UPDATED:
                    dao.updateMessage(messageManage);
                    break;
                case ROW_TYPE_DELETED:
                    dao.deleteMessage(messageManage);
                    break;
                default:
                    break;
                }
                rmsg = RESULT_SUCCESS;
            }
        }
        return rmsg;
    }
}
