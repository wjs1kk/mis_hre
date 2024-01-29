package com.jnv.common.view;

import com.jnv.jncore.exception.service.WebConstant;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataSetList;
import com.nexacro.java.xapi.data.Debugger;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.data.Variable;
import com.nexacro.java.xapi.data.VariableList;
import com.nexacro.java.xapi.tx.HttpPlatformResponse;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.context.NexacroContextHolder;
import com.nexacro.uiadapter.spring.core.data.NexacroFirstRowAccessor;
import com.nexacro.uiadapter.spring.core.data.NexacroFirstRowHandler;
import com.nexacro.uiadapter.spring.core.util.NexacroUtil;

import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.LoggerContext;
import org.apache.logging.log4j.core.config.Configuration;
import org.apache.logging.log4j.core.config.LoggerConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StopWatch;
import org.springframework.web.servlet.view.AbstractView;

public class JnNexacroView extends AbstractView{

    private final Logger logger = LoggerFactory.getLogger(JnNexacroView.class);
    private final Logger performanceLogger = LoggerFactory.getLogger("com.nexacro.performance");
    private String defaultContentType;
    private String defaultCharset;
//    @Nullable
    @Value("#{''+EtcProperty['uiAdapter.useRequestCharset']?:''}")
    public String useRequestCharset;
//    @Nullable
    @Value("#{EtcProperty['uiAdapter.useRequestContentType']?:''}")
    private String useRequestContentType;

    public String getDefaultContentType() {
        return this.defaultContentType == null ? "PlatformXml" : this.defaultContentType;
    }

    public String getDefaultContentType(NexacroContext cachedData) {
        if (this.useRequestContentType != null) {
            if (cachedData != null) {
                this.defaultContentType = cachedData.getPlatformRequest().getContentType();
            }

            return this.defaultContentType;
        } else {
            return this.defaultContentType == null ? "PlatformXml" : this.defaultContentType;
        }
    }

    public void setDefaultContentType(String defaultContentType) {
        this.defaultContentType = defaultContentType;
    }

    public String getDefaultCharset() {
        return this.defaultContentType == null ? "UTF-8" : this.defaultCharset;
    }

    public String getDefaultCharset(NexacroContext cachedData) {
        if (this.logger.isDebugEnabled()) {
            String tempType = "x";
            if (this.useRequestContentType != null) {
                tempType = this.useRequestContentType;
            }
        }

        if (this.useRequestCharset != null) {
            if (cachedData != null) {
                this.defaultCharset = cachedData.getPlatformRequest().getCharset();
            }

            return this.defaultCharset;
        } else {
            return this.defaultContentType == null ? "UTF-8" : this.defaultCharset;
        }
    }

    public void setDefaultCharset(String defaultCharset) {
        this.defaultCharset = defaultCharset;
    }

    protected void renderMergedOutputModel(Map<String, Object> model, HttpServletRequest request,
            HttpServletResponse response) throws Exception {
        try {
            Object object = model.get("NexacroPlatformData");
            if (object instanceof PlatformData) {
                this.sendResponse(request, response, (PlatformData) object);
            } else {
                this.sendResponse(request, response);
            }
        } catch (Exception var5) {
            this.logger.error("an error has occurred during platform data transfer", var5);
            if (var5 instanceof Exception) {
                throw var5;
            } else {
                throw new PlatformException("an error has occurred during platform data transfer", var5);
            }
        }
    }

    protected void sendResponse(HttpServletRequest request, HttpServletResponse response) throws PlatformException {
        this.sendResponse(request, response, this.generatePlatformData());
    }

    protected void sendResponse(HttpServletRequest request, HttpServletResponse response, PlatformData platformData)
            throws PlatformException {
        NexacroContext cachedData = this.getCachedData(request, response);
        HttpPlatformResponse platformResponse = null;
        StopWatch sw = new StopWatch(this.getClass().getSimpleName());
        sw.start("rendering platformdata");

        label94 : {
            try {
                if (cachedData == null) {
                    if(platformData.getVariableList().getBoolean(WebConstant.DEFAULT_DEBUG_OFF))
                        setNexacroResultViewLogLevel(Level.INFO);

                    platformResponse = new HttpPlatformResponse(response);
                    platformResponse.setContentType(this.getDefaultContentType());
                    platformResponse.setCharset(this.getDefaultCharset());
                    platformResponse.setData(platformData);
                    platformResponse.sendData();
                    break label94;
                }

                if (!cachedData.isFirstRowFired()) {
                    if(platformData.getVariableList().getBoolean(WebConstant.DEFAULT_DEBUG_OFF))
                        setNexacroResultViewLogLevel(Level.INFO);

                    platformResponse = cachedData.getPlatformResponse();
                    platformResponse.setContentType(this.getDefaultContentType(cachedData));
                    platformResponse.setCharset(this.getDefaultCharset(cachedData));
                    platformResponse.setData(platformData);
                    platformResponse.sendData();
                    break label94;
                }

                NexacroFirstRowHandler firstRowHandler = cachedData.getFirstRowHandler();
                this.sendFirstRowData(platformData, firstRowHandler, true);
            } finally {
                if (this.logger.isDebugEnabled()) {
                    this.logger.debug("\t★  ★  ★  NexacroView finally response type = [{}]",
                            this.getDefaultContentType());
                }

                sw.stop();
                if (this.performanceLogger.isTraceEnabled()) {
                    this.performanceLogger.trace(sw.prettyPrint());
                }

            }

            return;
        }

        if (this.logger.isDebugEnabled()) {
            this.logger.debug("response platformdata=[{}]", (new Debugger()).detail(platformData));
        }

        if(platformData.getVariableList().getBoolean(WebConstant.DEFAULT_DEBUG_OFF))
            setNexacroResultViewLogLevel(Level.DEBUG);
    }

    private void setNexacroResultViewLogLevel(Level lvl) {
        LoggerContext context = (LoggerContext) LogManager.getContext(false);
        Configuration config = context.getConfiguration();

        LoggerConfig cnfRes = config.getLoggerConfig("com.nexacro.java.xapi.tx.PlatformResponse");
        cnfRes.setLevel(lvl);
//        LoggerConfig cnfView = config.getLoggerConfig("com.nexacro.uiadapter.spring.core.view.NexacroView");
//        cnfView.setLevel(lvl);

        context.updateLoggers();
    }

    private void sendFirstRowData(PlatformData platformData, NexacroFirstRowHandler firstRowHandler,
            boolean isCallEndMethod) throws PlatformException {
        this.setFirstRowStatusDataSet(platformData);
        this.removeTransferData(firstRowHandler, platformData);
        if (this.logger.isDebugEnabled()) {
            this.logger.debug("response platformdata=[{}]", (new Debugger()).detail(platformData));
        }

        firstRowHandler.sendPlatformData(platformData);
        if (isCallEndMethod) {
            NexacroFirstRowAccessor.end(firstRowHandler);
        }

    }

    private void setFirstRowStatusDataSet(PlatformData platformData) {
        Variable errorCodeVariable = platformData.getVariable("ErrorCode");
        if (errorCodeVariable != null && errorCodeVariable.getInt() < 0) {
            Variable errorMsgVariable = platformData.getVariable("ErrorMsg");
            platformData.addDataSet(NexacroUtil.createFirstRowStatusDataSet(errorCodeVariable.getInt(),
                    errorMsgVariable != null ? errorMsgVariable.getString() : null));
        } else {
            platformData.addDataSet(NexacroUtil.createFirstRowStatusDataSet(0, (String) null));
        }

    }

    private void removeTransferData(NexacroFirstRowHandler firstRowHandler, PlatformData platformData) {
        VariableList variableList = platformData.getVariableList();
        if (NexacroFirstRowAccessor.getSendOutDataSetCount(firstRowHandler) > 0) {
            int size = variableList.size();

            for (int i = 0; i < size; ++i) {
                if (this.logger.isInfoEnabled()) {
                    this.logger.info("DataSet aleady sended. ignore variable=" + variableList.get(i).getName());
                }
            }

            platformData.setVariableList(new VariableList());
        } else {
            this.removeTransferVariables(firstRowHandler, variableList);
        }

        DataSetList dataSetList = platformData.getDataSetList();
        this.removeTransferDataSets(firstRowHandler, dataSetList);
    }

    private void removeTransferVariables(NexacroFirstRowHandler firstRowHandler, VariableList variableList) {
        String[] sendOutVariableNames = NexacroFirstRowAccessor.getSendOutVariableNames(firstRowHandler);
        Variable var = null;
        int variableListSize = variableList.size();

        for (int variableListIndex = variableListSize - 1; variableListIndex >= 0; --variableListIndex) {
            var = variableList.get(variableListIndex);
            if (var != null) {
                boolean isSended = false;

                for (int sendedVariableIndex = 0; sendedVariableIndex < sendOutVariableNames.length; ++sendedVariableIndex) {
                    if (var.getName().equals(sendOutVariableNames[sendedVariableIndex])) {
                        isSended = true;
                        break;
                    }
                }

                if (isSended) {
                    variableList.remove(variableListIndex);
                }
            }
        }

    }

    private void removeTransferDataSets(NexacroFirstRowHandler firstRowHandler, DataSetList dataSetList) {
        String[] sendOutDataSetNames = NexacroFirstRowAccessor.getSendOutDataSetNames(firstRowHandler);
        DataSet dataSet = null;
        int dataSetListSize = dataSetList.size();

        for (int datasetListIndex = dataSetListSize - 1; datasetListIndex >= 0; --datasetListIndex) {
            dataSet = dataSetList.get(datasetListIndex);
            if (dataSet != null) {
                boolean isSended = false;

                for (int sendedDataSetIndex = 0; sendedDataSetIndex < sendOutDataSetNames.length; ++sendedDataSetIndex) {
                    if (dataSet.getName().equals(sendOutDataSetNames[sendedDataSetIndex])) {
                        isSended = true;
                        break;
                    }
                }

                if (isSended) {
                    dataSetList.remove(datasetListIndex);
                }
            }
        }

    }

    private PlatformData generatePlatformData() {
        PlatformData platformData = new PlatformData();
        platformData.addVariable(Variable.createVariable("ErrorCode", 0));
        return platformData;
    }

    private NexacroContext getCachedData(HttpServletRequest request, HttpServletResponse response) {
        return NexacroContextHolder.getNexacroContext();
    }
}
