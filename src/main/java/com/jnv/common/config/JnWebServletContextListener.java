package com.jnv.common.config;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class JnWebServletContextListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        String frontendType = JnFrameProperties.getProperty("frontendType", "web");
        String dbType = JnFrameProperties.getProperty("dbType", "postgres");

        System.setProperty("spring.profiles.active", String.join(",", frontendType, dbType));
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.clearProperty("spring.profiles.active");
    }
}
