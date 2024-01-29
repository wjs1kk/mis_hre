package com.jnv.common.util;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

import org.jsoup.safety.Safelist;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartResolver;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsonorg.JsonOrgModule;

@Component
public class BeanDefinitions {

    private static final Logger LOG = LoggerFactory.getLogger(BeanDefinitions.class);

    @Value("#{systemProp['useDextUploader'] ?: false}")
    private boolean useDextUploader;

    @Value("#{systemProp['dextTempRepository']}")
    private String dextTempRepository;

    @Value("#{systemProp['dextDefaultRepository']}")
    private String dextDefaultRepository;

    @Value("#{systemProp['dextAutoMakingDirectory'] ?: true}")
    private boolean dextAutoMakingDirectory;

    @Value("#{systemProp['dextLicenseFilePath']}")
    private String dextLicenseFilePath;

    @Bean
    public ObjectMapper objectMapper() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.registerModule(new JsonOrgModule());
        mapper.registerModule(new Jdk8Module());
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.configure(SerializationFeature.INDENT_OUTPUT, true);
        mapper.setSerializationInclusion(Include.NON_NULL);
        return mapper;
    }

    @Bean
    public Safelist jsoupWhitelist() {
        return Safelist.basicWithImages()
            .addTags(
                "div", "hr", "h1", "h2", "h3", "h4", "h5", "h6",
                "table", "tr", "th", "td", "col", "colgroup", "thead", "tbody", "tfoot")
            .addAttributes(":all", "style", "class")
            .preserveRelativeLinks(true);
    }

    @Bean
    public MultipartResolver multipartResolver()
            throws ClassNotFoundException, InstantiationException, IllegalAccessException, IllegalArgumentException,
            InvocationTargetException, NoSuchMethodException, SecurityException {
        LOG.info("Initializing multipartResolver bean");

        String className = useDextUploader
            ? "devpia.dextuploadnj.support.spring.DEXTUploadNJMultipartResolver"
            : "org.springframework.web.multipart.commons.CommonsMultipartResolver";

        LOG.info("Trying to initialize multipartResolver using class {}...", className);

        @SuppressWarnings("unchecked")
        Class<?> resolverClass = Class.forName(className);
        MultipartResolver resolver = (MultipartResolver) resolverClass.getConstructor().newInstance();

        if (useDextUploader) {
            Class<?> environmentClass = Class.forName("devpia.dextuploadnj.Environment");
            Object environment = environmentClass.getConstructor().newInstance();

            String tempPath = null;
            try {
                if (dextTempRepository != null) {
                    tempPath = new File(dextTempRepository).getCanonicalPath();
                }
            } catch (IOException e) {
                tempPath = null;
            }
            Method setTempRepository = environmentClass.getMethod("setTempRepository", String.class);
            setTempRepository.invoke(environment, tempPath);

            String defaultPath = null;
            try {
                if (dextDefaultRepository != null) {
                    defaultPath = new File(dextDefaultRepository).getCanonicalPath();
                }
            } catch (IOException e) {
                defaultPath = null;
            }
            Method setDefaultRepository = environmentClass.getMethod("setDefaultRepository", String.class);
            setDefaultRepository.invoke(environment, defaultPath);

            Method setAutoMakingDirectory = environmentClass.getMethod("setAutoMakingDirectory", Boolean.TYPE);
            setAutoMakingDirectory.invoke(environment, true);

            String licensePath = null;
            try {
                if (dextLicenseFilePath != null) {
                    licensePath = new File(dextLicenseFilePath).getCanonicalPath();
                }
            } catch (IOException e) {
                licensePath = null;
            }
            Method setLicenseFilePath = environmentClass.getMethod("setLicenseFilePath", String.class);
            setLicenseFilePath.invoke(environment, licensePath);

            Method setEnvironment = resolverClass.getMethod("setEnvironment", environmentClass);
            setEnvironment.invoke(resolver, environment);
        }

        LOG.info("Successed to initialize multipartResolver bean");

        return resolver;
    }
}
