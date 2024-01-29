package com.jnv.main.login.filter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import com.nexacro.java.xapi.tx.PlatformException;
import com.nexacro.uiadapter.spring.core.context.NexacroContext;
import com.nexacro.uiadapter.spring.core.context.NexacroContextHolder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class NexacroUsernamePasswordLoginFilter extends UsernamePasswordAuthenticationFilter {

    private static final Logger LOG = LoggerFactory.getLogger(NexacroUsernamePasswordLoginFilter.class);

    public NexacroUsernamePasswordLoginFilter() {
        super();
    }

    public NexacroUsernamePasswordLoginFilter(AuthenticationManager authenticationManager) {
        super(authenticationManager);
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request,
            HttpServletResponse response) throws AuthenticationException {
        AuthenticationManager authenticationManager = getAuthenticationManager();
        NexacroContext context = NexacroContextHolder.getNexacroContext();

        if (context == null) {
            try {
                context = NexacroContextHolder.getNexacroContext(request, response);
            } catch (PlatformException e) {
                LOG.warn("Cannot get Nexacro context.", e);
            }
        }

        String username;
        String password;

        if (context == null) {
            username = request.getParameter(getUsernameParameter());
            password = request.getParameter(getPasswordParameter());
        } else {
            HttpPlatformRequest platformRequest = context.getPlatformRequest();
            PlatformData platformData = platformRequest.getData();
            DataSet dataSet = platformData.getDataSet("dsLogin");
            username = dataSet.getString(0, getUsernameParameter());
            password = dataSet.getString(0, getPasswordParameter());
        }

        return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
    }
}
