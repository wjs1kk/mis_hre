package com.jnv.common.config;

import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Properties;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.config.PropertiesFactoryBean;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PathMatchingResourcePatternResolver;

public final class JnFrameProperties {

    private static final Logger LOG = LoggerFactory.getLogger(JnFrameProperties.class);
    private static final Properties PROPS;

    static {
        Properties properties = new Properties();
        try {
            PropertiesFactoryBean factory = new PropertiesFactoryBean();
            factory.setLocations(resolve("classpath:/jnframe.properties", "classpath:/jnframe-*.properties"));
            factory.afterPropertiesSet();
            properties = factory.getObject();

        } catch (IOException e) {
            LOG.error("Cannot load jnframe.properties", e);
        }
        PROPS = properties;
    }

    private JnFrameProperties() {
        // no-op
    }

    public static String getProperty(String key) {
        return PROPS.getProperty(key);
    }

    public static String getProperty(String key, String defaultValue) {
        return PROPS.getProperty(key, defaultValue);
    }

    private static Resource[] resolve(String... location) {
        PathMatchingResourcePatternResolver resolver = new PathMatchingResourcePatternResolver();
        Set<Resource> set = new LinkedHashSet<>();
        for (String item : location) {
            try {
                Resource[] resources = resolver.getResources(item);
                set.addAll(Arrays.asList(resources));
            } catch (IOException e) {
                LOG.error("Cannot fine property file for pattern {}", item, e);
            }
        }

        return set.toArray(new Resource[0]);
    }
}
