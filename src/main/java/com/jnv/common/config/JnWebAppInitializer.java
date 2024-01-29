package com.jnv.common.config;

import com.nexacro.java.xeni.services.GridExportImportServlet;
import org.egovframe.rte.ptl.mvc.filter.HTMLTagFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.session.HttpSessionEventPublisher;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.request.RequestContextListener;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.filter.DelegatingFilterProxy;
import org.springframework.web.filter.ForwardedHeaderFilter;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.*;
import java.util.EnumSet;

public class JnWebAppInitializer implements WebApplicationInitializer {

    private static final Logger LOG = LoggerFactory.getLogger(JnWebAppInitializer.class);

    @Override
    public void onStartup(ServletContext servletContext) {
        LOG.info("JnWebAppInitializer started.");
        servletContext.addListener(JnWebServletContextListener.class);

        String frontendType = JnFrameProperties.getProperty("frontendType", "web");

        if ("nexacro".equals(frontendType)) {
            // XENI 설정
            servletContext.setInitParameter("export-path", "/export");
            servletContext.setInitParameter("import-path", "/import");
            servletContext.setInitParameter("monitor-enabled", "true");
            servletContext.setInitParameter("monitor-cycle-time", "30");
            servletContext.setInitParameter("file-storage-time", "10");

            ServletRegistration.Dynamic xExportImport = servletContext.addServlet("XExportImport", GridExportImportServlet.class);
            xExportImport.addMapping("/XExportImport");

            ServletRegistration.Dynamic xImport = servletContext.addServlet("XImport", GridExportImportServlet.class);
            xImport.addMapping("/XImport");
        }

        // Forwarded, X-Forwarded-* 헤더 처리
        FilterRegistration.Dynamic forwardedHeaderFilter = servletContext.addFilter("forwardedHeaderFilter", ForwardedHeaderFilter.class);
        forwardedHeaderFilter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, "/*");

        FilterRegistration.Dynamic encodingFilter = servletContext.addFilter("encodingFilter", CharacterEncodingFilter.class);
        encodingFilter.setInitParameter("encoding", "utf-8");
        encodingFilter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, "/*");

        FilterRegistration.Dynamic htmlTagFilter = servletContext.addFilter("HTMLTagFilter", HTMLTagFilter.class);
        htmlTagFilter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, "*.do");

        servletContext.addListener(ContextLoaderListener.class);
        servletContext.addListener(RequestContextListener.class);
        servletContext.addListener(HttpSessionEventPublisher.class);

        // context 설정
        servletContext.setInitParameter("contextConfigLocation", "classpath*:egovframework/spring/context-*.xml");

        ServletRegistration.Dynamic action = servletContext.addServlet("action", DispatcherServlet.class);
        action.setInitParameter("contextConfigLocation", "/WEB-INF/config/egovframework/springmvc/dispatcher-servlet.xml");
        action.setLoadOnStartup(1);
        action.addMapping("/");

        FilterRegistration.Dynamic springSecurityFilterChain = servletContext.addFilter("springSecurityFilterChain", DelegatingFilterProxy.class);
        springSecurityFilterChain.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST, DispatcherType.FORWARD), true, "/*");

        if ("nexacro".equals(frontendType)) {
            // xfdl 폼 접근 로깅
            FilterRegistration.Dynamic logFilter = servletContext.addFilter("nexacroFormAccessLogFilter", DelegatingFilterProxy.class);
            logFilter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, "*.js");
        }

        LOG.info("JnWebAppInitializer finished.");
    }
}
