package com.jnv.common.config;

import java.io.IOException;
import java.io.Writer;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.egovframe.rte.fdl.security.intercept.EgovReloadableFilterInvocationSecurityMetadataSource;
import org.egovframe.rte.fdl.security.userdetails.jdbc.EgovJdbcUserDetailsManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.ObjectPostProcessor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.configurers.HeadersConfigurer;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.security.web.access.AccessDeniedHandlerImpl;
import org.springframework.security.web.access.intercept.FilterSecurityInterceptor;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.Http403ForbiddenEntryPoint;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.util.UriComponentsBuilder;

import com.jnv.common.security.IPCheckingAuthenticaionProvider;
import com.jnv.main.login.controller.LoginFailureHandler;
import com.jnv.main.login.controller.LoginSuccessHandler;
import com.jnv.main.login.controller.NexacroLoginFailureHandler;
import com.jnv.main.login.controller.NexacroLoginSuccessHandler;
import com.jnv.main.login.controller.NexacroLogoutSuccessHandler;
import com.jnv.main.login.filter.NexacroUsernamePasswordLoginFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

    @Resource(name = "userDetailsService")
    private EgovJdbcUserDetailsManager jdbcUserService;

    @Resource(name = "loginSuccessHandler")
    private LoginSuccessHandler loginSuccessHandler;

    @Resource(name = "loginFailureHandler")
    private LoginFailureHandler loginFailureHandler;

    @Resource(name = "databaseSecurityMetadataSource")
    private EgovReloadableFilterInvocationSecurityMetadataSource databaseSecurityMetadataSource;

    @Value("#{jnframeProp['client.baseUrl']}")
    private String baseUrl;

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return web -> web.ignoring().antMatchers(
                "/css/**",
                "/html/**",
                "/images/**",
                "/js/**",
                "/resources/**",
                "/simpleLogin.do",
                "/loginFailure.do",
                "/logoutSuccess.do",
                "/concurrentExpired.do",
                "/services/*/**",
                "/checkReadEmail.do",
                "/findPassword.do",
                "/checkUserTelno.do",
                "/checkUserEml.do",
                "/updateNewPassword.do",
                "/invalidatePreviousSession.do",
                "/nxui/jnportal/**",
                "/assets/**",
                "/index.jsp")
                .regexMatchers("\\A/WEB-INF/jsp/.*\\Z");
    }

    @Bean
    @Profile("nexacro")
    public SecurityFilterChain nexacroSecurityFilterChain(HttpSecurity http) throws Exception {
        AuthenticationManager authenticationManager = authenticationManager(http);

        http.headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin))
                .cors(AbstractHttpConfigurer::disable)
                .csrf(AbstractHttpConfigurer::disable)
                .addFilterBefore(nexacroUsernamePasswordLoginFilter(authenticationManager), UsernamePasswordAuthenticationFilter.class)
                .anonymous(Customizer.withDefaults())
                .authorizeHttpRequests(auth -> auth.antMatchers("/mi/register/**",
                                "/getCurrentSessionInfo.do",
                                "/selectNexacroMenu.do",
                                "/selectNexacroMenuLang.do",
                                "/cmm/goPostalSearch.do",
                                "/cm/getCommonCodeCombo.do",
                                "/mi/common/mailVerification/**",
                                "/mi/login/**").permitAll()
                        .anyRequest().authenticated()
                        .withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                            @Override
                            public <O extends FilterSecurityInterceptor> O postProcess(O object) {
                                object.setSecurityMetadataSource(databaseSecurityMetadataSource);
                                return object;
                            }
                        }))
                .formLogin(formLogin -> formLogin.permitAll())
                .authenticationManager(authenticationManager)
                .logout(logout -> logout.logoutSuccessHandler(nexacroLogoutSuccessHandler())
                        .invalidateHttpSession(true)
                        .deleteCookies("JSESSIONID"))
                .sessionManagement(sessionManagement -> sessionManagement.invalidSessionStrategy(nexacroInvalidSessionStrategy())
                        .sessionConcurrency(concurrencyControl -> concurrencyControl.maximumSessions(-1)
                                .expiredSessionStrategy(nexacroInvalidSessionStrategy())
                                .sessionRegistry(sessionRegistry())
                                .maxSessionsPreventsLogin(true)))
                .exceptionHandling(exception -> exception.accessDeniedHandler(accessDeniedHandler()));
        return http.build();
    }

    @Bean
    @Profile("web")
    public SecurityFilterChain webSecurityFilterChain(HttpSecurity http) throws Exception {
        AuthenticationManager authenticationManager = authenticationManager(http);

        http.headers(headers -> headers.frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin))
                .cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth.anyRequest().permitAll()
                        .withObjectPostProcessor(new ObjectPostProcessor<FilterSecurityInterceptor>() {
                            @Override
                            public <O extends FilterSecurityInterceptor> O postProcess(O object) {
                                object.setSecurityMetadataSource(databaseSecurityMetadataSource);
                                return object;
                            }
                        }))
                .authenticationManager(authenticationManager)
                .formLogin(formLogin -> formLogin
                        .permitAll()
                        .successHandler(new HttpStatusHandler(HttpStatus.OK))
                        .failureHandler(new HttpStatusHandler(HttpStatus.UNAUTHORIZED)))
                .sessionManagement(sessionManagement -> sessionManagement.sessionAuthenticationFailureHandler(new HttpStatusHandler(HttpStatus.UNAUTHORIZED))
                        .sessionConcurrency(sessionConcurrency -> sessionConcurrency.sessionRegistry(sessionRegistry())
                                .maximumSessions(-1)
                                .maxSessionsPreventsLogin(true)))
                .logout(logout -> logout.logoutSuccessHandler(new HttpStatusHandler(HttpStatus.OK))
                        .invalidateHttpSession(true))
                .exceptionHandling(exception -> exception.authenticationEntryPoint(new Http403ForbiddenEntryPoint())
                        .accessDeniedHandler(new HttpStatusHandler(HttpStatus.FORBIDDEN)));
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(baseUrl);
        builder.replacePath("/");
        builder.fragment(null);
        builder.replaceQuery(null);
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.addAllowedOrigin(builder.toUriString());
        config.setAllowCredentials(true);
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    private NexacroUsernamePasswordLoginFilter nexacroUsernamePasswordLoginFilter(AuthenticationManager authenticationManager) {
        NexacroUsernamePasswordLoginFilter filter = new NexacroUsernamePasswordLoginFilter();
        filter.setFilterProcessesUrl("/login");
        filter.setUsernameParameter("username");
        filter.setPasswordParameter("password");
        filter.setAuthenticationSuccessHandler(nexacroLoginSuccessHandler());
        filter.setAuthenticationFailureHandler(nexacroLoginFailureHandler());
        filter.setAuthenticationManager(authenticationManager);
        filter.setPostOnly(true);
        return filter;
    }

    @Bean
    @Profile("nexacro")
    public AuthenticationSuccessHandler nexacroLoginSuccessHandler() {
        NexacroLoginSuccessHandler handler = new NexacroLoginSuccessHandler();
        handler.setDefaultUrl("/businessMain.do");
        return handler;
    }

    @Bean
    @Profile("nexacro")
    public AuthenticationFailureHandler nexacroLoginFailureHandler() {
        NexacroLoginFailureHandler handler = new NexacroLoginFailureHandler();
        handler.setDefaultUrl("/loginFailure.do");
        return handler;
    }

    @Bean
    @Profile("nexacro")
    public LogoutSuccessHandler nexacroLogoutSuccessHandler() {
        NexacroLogoutSuccessHandler handler = new NexacroLogoutSuccessHandler();
        handler.setSuccessUrl("/logoutSuccess.do");
        return handler;
    }

    @Bean
    @Profile("nexacro")
    public NexacroInvalidSessionStrategy nexacroInvalidSessionStrategy() {
        NexacroInvalidSessionStrategy strategy = new NexacroInvalidSessionStrategy();
        strategy.setDefaultUrl("/concurrentExpired.do");
        return strategy;
    }

    private AuthenticationManager authenticationManager(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder builder = http.getSharedObject(AuthenticationManagerBuilder.class);
        builder.authenticationProvider(ipCheckingAuthenticaionProvider());
        builder.userDetailsService(jdbcUserService)
                .passwordEncoder(passwordEncoder());
        return builder.build();
    }

    @Bean
    public SessionRegistry sessionRegistry() {
        return new SessionRegistryImpl();
    }

    @Bean
    public AccessDeniedHandler accessDeniedHandler() {
        AccessDeniedHandlerImpl handler = new AccessDeniedHandlerImpl();
        handler.setErrorPage("/accessDenied.do");
        return handler;
    }

    @Bean
    public IPCheckingAuthenticaionProvider ipCheckingAuthenticaionProvider() {
        IPCheckingAuthenticaionProvider provider = new IPCheckingAuthenticaionProvider();
        provider.setPasswordEncoder(passwordEncoder());
        provider.setUserDetailsService(jdbcUserService);
        return provider;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }

    private static class HttpStatusHandler implements AuthenticationFailureHandler, AuthenticationSuccessHandler, LogoutSuccessHandler, AccessDeniedHandler {

        private final HttpStatus httpStatus;

        public HttpStatusHandler(HttpStatus httpStatus) {
            this.httpStatus = httpStatus;
        }

        @Override
        public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                AuthenticationException exception) throws IOException {
            setStatus(response);
            response.setContentType(MimeTypeUtils.TEXT_PLAIN_VALUE);
            response.setCharacterEncoding("UTF-8");
            String message = exception.getLocalizedMessage();
            try (Writer writer = response.getWriter()) {
                writer.write(message);
            }
        }

        @Override
        public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                Authentication authentication) {
            setStatus(response);
        }

        @Override
        public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response,
                Authentication authentication) {
            setStatus(response);
        }

        @Override
        public void handle(HttpServletRequest request, HttpServletResponse response,
                AccessDeniedException exception) {
            setStatus(response);

        }

        private void setStatus(HttpServletResponse response) {
            response.setStatus(this.httpStatus.value());
        }
    }
}
