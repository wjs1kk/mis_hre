CREATE OR REPLACE PROCEDURE CMN_DELETE_BBS_MENU_PRC(I_SYS_ID IN VARCHAR,
                                                    I_BOARD_ID IN VARCHAR,
                                                    O_RESULT OUT NUMBER,
                                                    O_MESSAGE OUT VARCHAR)
IS
BEGIN
    DELETE FROM CMN_MENU
     WHERE MENU_ID = I_BOARD_ID;

    DELETE FROM CMN_ROLE_MENU_FUNC
     WHERE MENU_ID = I_BOARD_ID;

    O_RESULT := 0;
    O_MESSAGE := '';

    COMMIT;
EXCEPTION
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('게시판 메뉴 정보를 업데이트하지 못했습니다. SQLCODE=' || SQLCODE || ', SQLERRM=' || SQLERRM);

        O_RESULT := SQLCODE;
        O_MESSAGE := SQLERRM;
        ROLLBACK;
END;
/
