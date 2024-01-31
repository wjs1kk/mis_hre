CREATE OR REPLACE PROCEDURE CMN_UPDATE_BBS_MENU_PRC(I_SYS_ID IN VARCHAR,
                                                    I_BOARD_ID IN VARCHAR,
                                                    I_UPPER_MENU_ID IN VARCHAR,
                                                    I_SORT_ORDR IN NUMBER,
                                                    I_USER_ID IN VARCHAR,
                                                    I_USER_IP IN VARCHAR,
                                                    O_RESULT OUT NUMBER,
                                                    O_MESSAGE OUT VARCHAR)
IS
    C_LIST_PROG_ID CONSTANT VARCHAR(20) := 'BBS_MST_PROG';
    C_VIEW_PROG_ID CONSTANT VARCHAR(20) := 'BBS_DTL_PROG';
    C_EDIT_PROG_ID CONSTANT VARCHAR(20) := 'BBS_DTL_PROG';
    C_LIST_PAGE_URL CONSTANT VARCHAR(1000) := 'sys::cms/CMS_2020M.xfdl';
    C_VIEW_PAGE_URL CONSTANT VARCHAR(1000) := 'sys::cms/CMS_2020P_01.xfdl';
    C_EDIT_PAGE_URL CONSTANT VARCHAR(1000) := 'sys::cms/CMS_2020P_02.xfdl';

    V_MST_PROG_FUNC_ID VARCHAR(20) := NULL;
    V_DTL_PROG_FUNC_ID VARCHAR(20) := NULL;

    V_BOARD_INFO CMN_BBS_BOARDS%ROWTYPE;

    CURSOR C_BOARD_INFO (V_SYS_ID VARCHAR, V_BOARD_ID VARCHAR)
    IS
    SELECT *
      FROM CMN_BBS_BOARDS
     WHERE SYS_ID = V_SYS_ID
       AND BOARD_ID = V_BOARD_ID;
BEGIN
    -- 게시글 프로그램을 등록한다.
    BEGIN
        -- 게시글 목록 프로그램을 등록한다
        MERGE INTO CMN_PROG A USING (SELECT I_SYS_ID AS SYS_ID
                                          , C_LIST_PROG_ID AS PROG_ID
                                       FROM DUAL) B
        ON (A.SYS_ID = B.SYS_ID AND A.PROG_ID = B.PROG_ID)
        WHEN NOT MATCHED THEN
        INSERT (A.SYS_ID, A.PROG_ID, A.PROG_NM, A.PROG_TY, A.PROG_URL, A.RGST_ID, A.RGST_DT, A.RGST_IP, A.UPDT_ID, A.UPDT_DT, A.UPDT_IP)
        VALUES (I_SYS_ID, C_LIST_PROG_ID, '게시글 목록', 'PAGE', C_LIST_PAGE_URL, I_USER_ID, SYSDATE, I_USER_IP, I_USER_ID, SYSDATE, I_USER_IP);

        -- 게시글 상세보기 프로그램을 등록한다
        MERGE INTO CMN_PROG A USING (SELECT I_SYS_ID AS SYS_ID
                                          , C_VIEW_PROG_ID AS PROG_ID
                                       FROM DUAL) B
        ON (A.SYS_ID = B.SYS_ID AND A.PROG_ID = B.PROG_ID)
        WHEN NOT MATCHED THEN
        INSERT (A.SYS_ID, A.PROG_ID, A.PROG_NM, A.PROG_TY, A.PROG_URL, A.RGST_ID, A.RGST_DT, A.RGST_IP, A.UPDT_ID, A.UPDT_DT, A.UPDT_IP)
        VALUES (I_SYS_ID, C_VIEW_PROG_ID, '게시글 상세 보기', 'PAGE', C_VIEW_PAGE_URL, I_USER_ID, SYSDATE, I_USER_IP, I_USER_ID, SYSDATE, I_USER_IP);

        -- 게시글 등록/수정 프로그램을 등록한다
        MERGE INTO CMN_PROG A USING (SELECT I_SYS_ID AS SYS_ID
                                          , C_EDIT_PROG_ID AS PROG_ID
                                       FROM DUAL) B
        ON (A.SYS_ID = B.SYS_ID AND A.PROG_ID = B.PROG_ID)
        WHEN NOT MATCHED THEN
        INSERT (A.SYS_ID, A.PROG_ID, A.PROG_NM, A.PROG_TY, A.PROG_URL, A.RGST_ID, A.RGST_DT, A.RGST_IP, A.UPDT_ID, A.UPDT_DT, A.UPDT_IP)
        VALUES (I_SYS_ID, C_VIEW_PROG_ID, '게시글 등록/수정', 'PAGE', C_VIEW_PAGE_URL, I_USER_ID, SYSDATE, I_USER_IP, I_USER_ID, SYSDATE, I_USER_IP);

        -- 게시글 목록 조회 기능을 등록한다
        MERGE INTO CMN_PROG_FUNC A USING (SELECT C_LIST_PROG_ID AS PROG_ID
                                               , 'SEARCH' AS FUNC_CODE
                                               , 'SEARCH' AS FUNC_TYPE
                                            FROM DUAL) B
        ON (A.PROG_ID = B.PROG_ID AND A.FUNC_CODE = B.FUNC_CODE)
        WHEN NOT MATCHED THEN
        INSERT (
            A.PROG_ID,
            A.FUNC_ID,
            A.FUNC_TYPE,
            A.FUNC_NAME,
            A.FUNC_CODE,
            A.FUNC_PATTERN_TYPE
        )
        VALUES (
            B.PROG_ID,
            (SELECT COALESCE(MAX(TO_NUMBER(FUNC_ID)), 0) + 1
               FROM CMN_PROG_FUNC),
            B.FUNC_TYPE,
            '조회',
            B.FUNC_CODE,
            'URL'
        );

        -- 게시글 본문 조회 기능을 등록한다
        MERGE INTO CMN_PROG_FUNC A USING (SELECT C_VIEW_PROG_ID AS PROG_ID
                                               , 'SEARCH' AS FUNC_CODE
                                               , 'SEARCH' AS FUNC_TYPE
                                            FROM DUAL) B
        ON (A.PROG_ID = B.PROG_ID AND A.FUNC_CODE = B.FUNC_CODE)
        WHEN NOT MATCHED THEN
        INSERT (
            A.PROG_ID,
            A.FUNC_ID,
            A.FUNC_TYPE,
            A.FUNC_NAME,
            A.FUNC_CODE,
            A.FUNC_PATTERN_TYPE,
            A.FUNC_PATTERN
        )
        VALUES (
            B.PROG_ID,
            (SELECT COALESCE(MAX(TO_NUMBER(FUNC_ID)), 0) + 1
               FROM CMN_PROG_FUNC),
            B.FUNC_TYPE,
            '조회',
            B.FUNC_CODE,
            'METHOD',
            'cms/getBoardArticle.do'
        );

        MERGE INTO CMN_PROG_FUNC A USING (SELECT C_EDIT_PROG_ID AS PROG_ID
                                               , 'SEARCH' AS FUNC_CODE
                                               , 'SEARCH' AS FUNC_TYPE
                                            FROM DUAL) B
        ON (A.PROG_ID = B.PROG_ID AND A.FUNC_CODE = B.FUNC_CODE)
        WHEN NOT MATCHED THEN
        INSERT (
            A.PROG_ID,
            A.FUNC_ID,
            A.FUNC_TYPE,
            A.FUNC_NAME,
            A.FUNC_CODE,
            A.FUNC_PATTERN_TYPE,
            A.FUNC_PATTERN
        )
        VALUES (
            B.PROG_ID,
            (SELECT COALESCE(MAX(TO_NUMBER(FUNC_ID)), 0) + 1
               FROM CMN_PROG_FUNC),
            B.FUNC_TYPE,
            '조회',
            B.FUNC_CODE,
            'METHOD',
            'cms/getBoardArticle.do'
        );

        -- 게시글 저장 기능을 등록한다
        MERGE INTO CMN_PROG_FUNC A USING (SELECT C_EDIT_PROG_ID AS PROG_ID
                                               , 'SAVE' AS FUNC_CODE
                                               , 'SAVE' AS FUNC_TYPE
                                            FROM DUAL) B
        ON (A.PROG_ID = B.PROG_ID AND A.FUNC_CODE = B.FUNC_CODE)
        WHEN NOT MATCHED THEN
        INSERT (
            A.PROG_ID,
            A.FUNC_ID,
            A.FUNC_TYPE,
            A.FUNC_NAME,
            A.FUNC_CODE,
            A.FUNC_PATTERN_TYPE,
            A.FUNC_PATTERN
        )
        VALUES (
            B.PROG_ID,
            (SELECT COALESCE(MAX(TO_NUMBER(FUNC_ID)), 0) + 1
               FROM CMN_PROG_FUNC),
            B.FUNC_TYPE,
            '조회',
            B.FUNC_CODE,
            'METHOD',
            'cms/saveBoardArticle.do'
        );

        -- 게시글 삭제 기능을 등록한다
        MERGE INTO CMN_PROG_FUNC A USING (SELECT C_VIEW_PROG_ID AS PROG_ID
                                               , 'DELETE' AS FUNC_CODE
                                               , 'DELETE' AS FUNC_TYPE
                                            FROM DUAL) B
        ON (A.PROG_ID = B.PROG_ID AND A.FUNC_CODE = B.FUNC_CODE)
        WHEN NOT MATCHED THEN
        INSERT (
            A.PROG_ID,
            A.FUNC_ID,
            A.FUNC_TYPE,
            A.FUNC_NAME,
            A.FUNC_CODE,
            A.FUNC_PATTERN_TYPE,
            A.FUNC_PATTERN
        )
        VALUES (
            B.PROG_ID,
            (SELECT COALESCE(MAX(TO_NUMBER(FUNC_ID)), 0) + 1
               FROM CMN_PROG_FUNC),
            B.FUNC_TYPE,
            '삭제',
            B.FUNC_CODE,
            'METHOD',
            'cms/saveBoardArticle.do'
        );

    EXCEPTION
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE('게시판 프로그램을 등록하지 못했습니다. SQLCODE=' || SQLCODE || ', SQLERRM=' || SQLERRM);
            RAISE_APPLICATION_ERROR(-20000, '게시판 프로그램을 등록하지 못했습니다.');

            O_RESULT := SQLCODE;
            O_MESSAGE := SQLERRM;
            ROLLBACK;
            RETURN;
    END;

    -- 게시글 메뉴를 등록한다.
    -- 먼저 게시판 정보를 가져온다.
    OPEN C_BOARD_INFO(I_SYS_ID, I_BOARD_ID);
    FETCH C_BOARD_INFO INTO V_BOARD_INFO;
    IF C_BOARD_INFO%NOTFOUND THEN
        RAISE_APPLICATION_ERROR(-20100, '등록되지 않은 게시판 ID입니다.');
    END IF;
    CLOSE C_BOARD_INFO;

    -- 게시판 메뉴 정보를 업데이트한다.
    MERGE INTO CMN_MENU A USING (SELECT V_BOARD_INFO.BOARD_ID AS MENU_ID
                                      , I_UPPER_MENU_ID AS UPPER_MENU_ID
                                      , V_BOARD_INFO.BOARD_NM AS MENU_NM
                                      , C_LIST_PROG_ID AS PROG_ID
                                      , 'PAGE' AS MENU_TY
                                      , CASE V_BOARD_INFO.USE_YN
                                            WHEN 'Y' THEN
                                                'Y'
                                            ELSE
                                                'N'
                                        END AS INDCT_YN
                                      , I_SORT_ORDR AS SORT_ORDR
                                      , I_USER_ID AS UPDT_ID
                                      , I_USER_IP AS UPDT_IP
                                   FROM DUAL) B
    ON (A.MENU_ID = B.MENU_ID)
    WHEN MATCHED THEN
    UPDATE
       SET A.MENU_NM = B.MENU_NM
         , A.UPPER_MENU_ID = B.UPPER_MENU_ID
         , A.PROG_ID = B.PROG_ID
         , A.SORT_ORDR = B.SORT_ORDR
         , A.INDCT_YN = B.INDCT_YN
         , A.UPDT_ID = B.UPDT_ID
         , A.UPDT_IP = B.UPDT_IP
         , A.UPDT_DT = SYSDATE
     WHERE A.MENU_ID = B.MENU_ID
    WHEN NOT MATCHED THEN
    INSERT (A.MENU_ID, A.MENU_NM, A.MENU_TY, A.UPPER_MENU_ID, A.PROG_ID, A.INDCT_YN, A.SORT_ORDR, A.RGST_ID, A.RGST_IP, A.RGST_DT, A.UPDT_ID, A.UPDT_IP, A.UPDT_DT)
    VALUES (B.MENU_ID, B.MENU_NM, B.MENU_TY, B.UPPER_MENU_ID, B.PROG_ID, B.INDCT_YN, B.SORT_ORDR, B.UPDT_ID, B.UPDT_IP, SYSDATE, B.UPDT_ID, B.UPDT_IP, SYSDATE);

    -- 게시판 권한 정보를 업데이트 한다.
    MERGE INTO CMN_ROLE_MENU_FUNC A USING (SELECT I_BOARD_ID AS MENU_ID
                                                , 'ROLE_USER' AS ROLE_CODE
                                                , (SELECT FUNC_ID
                                                     FROM CMN_PROG_FUNC
                                                    WHERE PROG_ID = C_LIST_PROG_ID
                                                      AND FUNC_CODE = 'SEARCH') AS FUNC_ID
                                                , I_USER_ID AS RGST_ID
                                                , I_USER_IP AS RGST_IP
                                             FROM DUAL) B
    ON (A.MENU_ID = B.MENU_ID AND A.ROLE_CODE = B.ROLE_CODE AND A.FUNC_ID = B.FUNC_ID)
    WHEN NOT MATCHED THEN
    INSERT (A.MENU_ID, A.ROLE_CODE, A.FUNC_ID, A.RGST_ID, A.RGST_DT, A.RGST_IP, A.UPDT_ID, A.UPDT_DT, A.UPDT_IP)
    VALUES (B.MENU_ID, B.ROLE_CODE, B.FUNC_ID, B.RGST_ID, SYSDATE, B.RGST_IP, B.RGST_ID, SYSDATE, B.RGST_IP);

    O_RESULT := 0;
    O_MESSAGE := '';

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        IF C_BOARD_INFO%ISOPEN THEN
            CLOSE C_BOARD_INFO;
        END IF;

        DBMS_OUTPUT.PUT_LINE('게시판 메뉴 정보를 업데이트하지 못했습니다. SQLCODE=' || SQLCODE || ', SQLERRM=' || SQLERRM);

        O_RESULT := SQLCODE;
        O_MESSAGE := SQLERRM;
        ROLLBACK;
END;
/
