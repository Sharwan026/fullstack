package com.ecom.sharwan.utils;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpHeaders.CONTENT_TYPE;
import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.HEAD;
import static org.springframework.http.HttpMethod.PATCH;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;
import java.util.List;

public class MyConstant {
    public static final String AUTH="/api/v1/auth";
    public static final String USER="/api/v1/user";
    public static final String LOAN="/api/v1/loan";
    public static final String USERLOAN="/api/v1/userloan";

    public static final String PAYMENT = "/payment";
    public static final String PAYMENTLIST = "/paymentlist";

    public static final String REGISTER="/register";
    public static final String LOGIN="/login";
    public static final String USERLIST="/list";
    public static final String LOANLIST="/loanlist";
    public static final String USERLOANLIST="/get/{userLoanId}";
    public static final List<String> ORGINS=Arrays.asList("http://localhost:4000");
    public static final List<String> HEADERS=Arrays.asList(AUTHORIZATION,CONTENT_TYPE);
    public static final List<String> METHODS=Arrays.asList(GET.name(),POST.name(),
            PUT.name(),PATCH.name(),DELETE.name(),HEAD.name());

    //JsonwebToken
    public static final String SWAGGER_LOCALHOST_URL="http://localhost:8181";
    public static final String SWAGGER_SECURITY_SCHEME_NAME="bearerAuth";
    public static final String SWAGGER_SCHEME="bearer";
    public static final String SWAGGER_BEARER_FORMAT="JWT";
    public static final String SWAGGER_DESCRIPTION="Produce a Json Web Token.";

}