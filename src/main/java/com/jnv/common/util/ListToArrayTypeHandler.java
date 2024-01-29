package com.jnv.common.util;

import java.sql.*;
import java.util.Arrays;
import java.util.List;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;

public class ListToArrayTypeHandler extends BaseTypeHandler<List<?>> {

    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, List<?> parameter, JdbcType jdbcType)
            throws SQLException {
        ps.setObject(i, parameter.toArray(), Types.ARRAY);
    }

    @Override
    public List<?> getNullableResult(ResultSet rs, String columnName) throws SQLException {
        Array wrappedArray = rs.getArray(columnName);

        List<?> list = extractArray(wrappedArray);
        if (wrappedArray != null)
            wrappedArray.free();

        return list;
    }

    @Override
    public List<?> getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        Array wrappedArray = rs.getArray(columnIndex);

        List<?> list = extractArray(wrappedArray);
        if (wrappedArray != null)
            wrappedArray.free();

        return list;
    }

    @Override
    public List<?> getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        Array wrappedArray = cs.getArray(columnIndex);

        List<?> list = extractArray(wrappedArray);
        if (wrappedArray != null)
            wrappedArray.free();

        return list;
    }

    private List<?> extractArray(Array wrappedArray) throws SQLException {
        if (wrappedArray == null)
            return null;

        Object[] array = (Object[]) wrappedArray.getArray();
        return Arrays.asList(array);
    }
}
