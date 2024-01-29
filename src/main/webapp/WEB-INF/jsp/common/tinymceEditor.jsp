<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset='utf-8'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<meta http-equiv='X-UA-Compatible' content='IE=edge'>
<base href="${pageContext.request.contextPath}">
<link rel='stylesheet' type='text/css' media='screen' href='${pageContext.request.contextPath}/tinymce/editor.css'>
<title>Editor Test</title>
<script src="${pageContext.request.contextPath}/tinymce/js/tinymce/tinymce.min.js"></script>
<script src="${pageContext.request.contextPath}/tinymce/editor.js"></script>

</head>

<body>
    <textarea id="main-text-editor" style="width: 100%; height: 100%;">
    </textarea>

    <script>
        window.editor = createEditor({
            images_upload_url : "${pageContext.request.contextPath}/attach/uploadImage.do",
            selector : "#main-text-editor"
        });
    </script>
</body>

</html>
