function fileHandler_html4(c,g){if("upload"==KUPLOADTOP.G_CURRKUPLOADER._config.mode){var h=[],a=KUPLOADTOP.G_CURRKUPLOADER._config.maxTotalFileCount,b=!0,d=[],f={file:c,name:getFileName(g,!1),size:"",type:"",lastModifiedDate:""};d.push(f);var k;try{if(f={fileList:d,dropZoneId:""},k="function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.initAddAllFile?KUPLOADTOP.G_CURRKUPLOADER._config.event.initAddAllFile(KUPLOADTOP.G_CURRKUPLOADER.ID,f):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_InitAddAllFile(KUPLOADTOP.G_CURRKUPLOADER.ID,
f),void 0!==k){if(null===k)return;if(0<k.length)files=k;else if(!k)return}}catch(e){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(e)}k=[];var q=KUPLOADTOP.G_CURRKUPLOADER.frameWin.getTotalFileCount(),l=KUPLOADTOP.G_CURRKUPLOADER._config.disableAlertMessage.duplication,p=0,n=!1;"0"==KUPLOADTOP.G_CURRKUPLOADER._config.allowDuplicationFile&&(n=sameFileCheck(d[0]));if(n)"0"==l&&alert(d[0].name+" "+RAONKUpload_Lang.message_duplication_file);else{var l=!1,n=KUPLOADTOP.G_CURRKUPLOADER._config.extension,v=
n.extArr.length;if(0<v){var w=n.allowOrLimit;if("1"==w){for(var u=getExtension(d[0].name),r=0;r<v;r++)if(("***"==n.extArr[r]?"":n.extArr[r])==u){l=!0;break}l||k.push(""==u?'" "':u)}else for(u=getExtension(d[0].name),r=0;r<v;r++)if(("***"==n.extArr[r]?"":n.extArr[r])==u){l=!1;k.push(""==u?'" "':u);break}else l=!0}else l=!0;calcTotalSize();n=TOTALREALFILENUM;if(0!=a&&n+1>a){b=RAONKUpload_Lang.message_limit_num;b=b.replace("{0}",a);alert(b);return}if(l){var x=a="";document.getElementById("tab_"+KUPLOADTOP.G_CURRKUPLOADER.TagID)&&
(x=document.getElementById("tab_"+KUPLOADTOP.G_CURRKUPLOADER.TagID).value);null==g&&(g="");(a=g)&&(a=KUPLOADTOP.RAONKUPLOAD.util.trim(a));if("undefined"==typeof a||null==a)a="undefined"==typeof filePathSplit[0]||null==filePathSplit[0]?"":filePathSplit[0].substring(0,filePathSplit[0].lastIndexOf(KUPLOADTOP.RAONKUPLOAD.UserAgent.osSeparator)+1)+d[0].name;if("1"==KUPLOADTOP.G_CURRKUPLOADER._config.useAddEvent)try{var m=d[0].file,f={strName:d[0].name,nSize:d[0].size,nIndex:q+p,strPath:a,dropZoneId:"",
objFile:m,isFolder:"1"==d[0].isFolder?!0:!1,strPreviewUrl:""},b="function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.beforeAddFile?KUPLOADTOP.G_CURRKUPLOADER._config.event.beforeAddFile(KUPLOADTOP.G_CURRKUPLOADER.ID,f):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_BeforeAddFile(KUPLOADTOP.G_CURRKUPLOADER.ID,f);!1!==b&&(b=!0)}catch(y){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(y)}if(b){b=d[0].type;if(null==b||void 0==b||""==b)b="application/octet-stream";a={file:d[0].file,guid:"",fileIdx:"",webPath:"",
originName:d[0].name,fileSize:d[0].size,uploadName:"",uploadPath:"",logicalPath:"",status:"ready",fileExt:"",isDelete:"n",isWebFile:"n",localPath:a,customValue:"",responseCustomValue:"",headerEx:"",lastModifiedDate:d[0].lastModifiedDate,mimeType:b};RESULTFILELIST.push(a);a.isFolder="0";addFileList(a);if("1"==KUPLOADTOP.G_CURRKUPLOADER._config.useAfterAddEvent)try{calcTotalSize(),m=d[0].file,f={strName:d[0].name,nSize:d[0].size,nIndex:q+p,strPath:a.localPath,dropZoneId:"",objFile:m,isFolder:"1"==d[0].isFolder?
!0:!1,strPreviewUrl:""},h.push(f),"function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.afterAddFile?KUPLOADTOP.G_CURRKUPLOADER._config.event.afterAddFile(KUPLOADTOP.G_CURRKUPLOADER.ID,f):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_AfterAddFile(KUPLOADTOP.G_CURRKUPLOADER.ID,f)}catch(z){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(z)}p++;d=document.getElementById("files_container");KUPLOADTOP.G_CURRKUPLOADER.TagID=KUPLOADTOP.RAONKUPLOAD.util.makeGuidTagName();m=document.createElement("form");m.setAttribute("id",
"form_"+KUPLOADTOP.G_CURRKUPLOADER.TagID);m.setAttribute("method","post");m.setAttribute("enctype","multipart/form-data");m.setAttribute("encoding","multipart/form-data");a=document.createElement("span");a.className="input_image_add";a.innerHTML=RAONKUpload_Lang.btn_add;""!=KUPLOADTOP.G_CURRKUPLOADER._config.customHeaderColor&&(a.style.background=KUPLOADTOP.G_CURRKUPLOADER._config.customHeaderColor);""!=KUPLOADTOP.G_CURRKUPLOADER._config.customFooterColor&&(a.style.color=KUPLOADTOP.G_CURRKUPLOADER._config.customFooterColor);
var t=document.createElement("input");t.setAttribute("id","file_"+KUPLOADTOP.G_CURRKUPLOADER.TagID);t.setAttribute("name","file_"+KUPLOADTOP.G_CURRKUPLOADER.TagID);t.setAttribute("type","file");KUPLOADTOP.RAONKUPLOAD.util.addEvent(t,"change",function(){fileHandler_html4(t,t.value)});KUPLOADTOP.RAONKUPLOAD.util.addEvent(t,"blur",function(){focusHandler(t)});b=document.createElement("input");b.setAttribute("id","tab_"+KUPLOADTOP.G_CURRKUPLOADER.TagID);b.setAttribute("name","tab_"+KUPLOADTOP.G_CURRKUPLOADER.TagID);
b.setAttribute("type","hidden");b.setAttribute("value","0");m.appendChild(a);m.appendChild(t);m.appendChild(b);a=document.createElement("div");a.appendChild(m);d.appendChild(a);a.previousSibling&&(a.previousSibling.style.display="none",a.previousSibling.childNodes[0].childNodes[1].tabIndex="-1")}}}displayTotalSizeAndNum();d=k.length;if(0<d){b="";m=KUPLOADTOP.G_CURRKUPLOADER._config.extension.extArr;a=m.length;for(b=0;b<a;b++)"***"==m[b]&&(m[b]='" "');"1"==w?1<d?(b=RAONKUpload_Lang.message_not_allow_exts,
b=b.replace("{0}",d),b=b.replace("{1}",m)):(b=RAONKUpload_Lang.message_not_allow_ext,b=b.replace("{0}",m),b=b.replace("{1}",k[0])):1<d?(b=RAONKUpload_Lang.message_not_limit_exts,b=b.replace("{0}",d),b=b.replace("{1}",m)):(b=RAONKUpload_Lang.message_not_limit_ext,b=b.replace("{0}",m),b=b.replace("{1}",k[0]));alert(b)}"1"==KUPLOADTOP.G_CURRKUPLOADER._config.use_file_sort&&"1"==KUPLOADTOP.G_CURRKUPLOADER._config.auto_sort&&"1"!=KUPLOADTOP.G_CURRKUPLOADER._config.sort_field&&sortTotalFileList(KUPLOADTOP.G_CURRKUPLOADER._config.sort_field,
KUPLOADTOP.G_CURRKUPLOADER._config.sort_ascdesc);calcTotalSize();fileListSortIconReset();setFileListBorder();setListvalue();setLargeFileAllList();1==x&&(document.getElementById("file_"+KUPLOADTOP.G_CURRKUPLOADER.TagID).focus(),document.getElementById("form_"+KUPLOADTOP.G_CURRKUPLOADER.TagID).childNodes[0].style.backgroundImage="url("+KUPLOADTOP.G_CURRKUPLOADER._config.webPath.image+"img_bt_line.png)",document.getElementById("form_"+KUPLOADTOP.G_CURRKUPLOADER.TagID).childNodes[0].style.backgroundRepeat=
"no-repeat",document.getElementById("form_"+KUPLOADTOP.G_CURRKUPLOADER.TagID).childNodes[0].style.backgroundPositionY="2px",document.getElementById("form_"+KUPLOADTOP.G_CURRKUPLOADER.TagID).childNodes[0].style.backgroundPositionX="1px",document.getElementById("tab_"+KUPLOADTOP.G_CURRKUPLOADER.TagID).value="1",G_FileHandlerControl=0);"thumbs"==KUPLOADTOP.G_CURRKUPLOADER._config.views&&thumbsViewWithCanvas();if("1"==KUPLOADTOP.G_CURRKUPLOADER._config.useAfterAddEndTimeEvent&&0<p)try{f={arrFileList:h},
"function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.afterAddAllFile?KUPLOADTOP.G_CURRKUPLOADER._config.event.afterAddAllFile(KUPLOADTOP.G_CURRKUPLOADER.ID,f):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_AfterAddAllFile(KUPLOADTOP.G_CURRKUPLOADER.ID,f)}catch(A){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(A)}}}
function processUploadHtml4(){if(!KUPLOADTOP.G_CURRKUPLOADER._config.uploadCancel){var c=getDialogDocument();0==upload_complete_count&&(G_UploadStartTime=(new Date).getTime()/1E3);var g=document.getElementById("files_container").getElementsByTagName("form"),h=0;if("1"==KUPLOADTOP.G_CURRKUPLOADER._config.skipSentFile)for(var a=0;a<uploaders[upload_complete_count];a++)RESULTFILELIST[a].file&&"complete"==RESULTFILELIST[a].status&&h++;g=g[upload_complete_count+h];h=document.charset;document.charset="utf-8";
var b=upload_complete_count.toString();b==(uploaders.length-1).toString()&&(b+="z");RESULTFILELIST[uploaders[upload_complete_count]].guid=KUPLOADTOP.RAONKUPLOAD.util.makeGuid();var d=g.getElementsByTagName("input"),f=d[0],d=d[1];g.removeChild(d);for(var k=0,e=RESULTFILELIST.length,a=0;a<uploaders[upload_complete_count];a++)"n"==RESULTFILELIST[a].isDelete&&(k+=parseInt(RESULTFILELIST[a].fileSize,10));for(a=uploaders[upload_complete_count]+1;a<e;a++)"y"==RESULTFILELIST[a].isWebFile&&(k+=parseInt(RESULTFILELIST[a].fileSize,
10));e=""+("kc"+KUPLOADTOP.RAONKSolution.Agent.formfeed+"c02"+KUPLOADTOP.RAONKSolution.Agent.vertical);e+="k01"+KUPLOADTOP.RAONKSolution.Agent.formfeed+KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k12"+KUPLOADTOP.RAONKSolution.Agent.formfeed+RESULTFILELIST[uploaders[upload_complete_count]].guid+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k14"+KUPLOADTOP.RAONKSolution.Agent.formfeed+RESULTFILELIST[uploaders[upload_complete_count]].originName+
KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k15"+KUPLOADTOP.RAONKSolution.Agent.formfeed+KUPLOADTOP.G_CURRKUPLOADER._config.fileNameRule+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k16"+KUPLOADTOP.RAONKSolution.Agent.formfeed+KUPLOADTOP.G_CURRKUPLOADER._config.fileNameRuleEx+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k17"+KUPLOADTOP.RAONKSolution.Agent.formfeed+KUPLOADTOP.G_CURRKUPLOADER._config.folderNameRule+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k20"+KUPLOADTOP.RAONKSolution.Agent.formfeed+
b+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k21"+KUPLOADTOP.RAONKSolution.Agent.formfeed+RESULTFILELIST[uploaders[upload_complete_count]].customValue+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k22"+KUPLOADTOP.RAONKSolution.Agent.formfeed+"1"+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k23"+KUPLOADTOP.RAONKSolution.Agent.formfeed+"1"+KUPLOADTOP.RAONKSolution.Agent.vertical;e+="k24"+KUPLOADTOP.RAONKSolution.Agent.formfeed+KUPLOADTOP.G_CURRKUPLOADER._config.allowedZeroFileSize+KUPLOADTOP.RAONKSolution.Agent.vertical;
"1"==KUPLOADTOP.G_CURRKUPLOADER._config.security.fileExtensionDetector&&(e+="k29"+KUPLOADTOP.RAONKSolution.Agent.formfeed+"1"+KUPLOADTOP.RAONKSolution.Agent.vertical);a=KUPLOADTOP.G_CURRKUPLOADER._config.maxOneFileSize;0!=a&&(e+="k40"+KUPLOADTOP.RAONKSolution.Agent.formfeed+a+KUPLOADTOP.RAONKSolution.Agent.vertical);a=KUPLOADTOP.G_CURRKUPLOADER._config.maxTotalFileSize;0!=a&&(e+="k41"+KUPLOADTOP.RAONKSolution.Agent.formfeed+a+KUPLOADTOP.RAONKSolution.Agent.vertical,e+="k42"+KUPLOADTOP.RAONKSolution.Agent.formfeed+
k+KUPLOADTOP.RAONKSolution.Agent.vertical);KUPLOADTOP.G_CURRKUPLOADER._config.cloudInfo.Use&&"2"==KUPLOADTOP.G_CURRKUPLOADER._config.cloudInfo.Use&&(e+="k46"+KUPLOADTOP.RAONKSolution.Agent.formfeed+KUPLOADTOP.G_CURRKUPLOADER._config.cloudInfo.Use+KUPLOADTOP.RAONKSolution.Agent.vertical);a=KUPLOADTOP.G_CURRKUPLOADER._config.security.requestValidationSecond;"0"!=a&&(k=new Date,k.setSeconds(k.getSeconds()+parseInt(a,10)),e+="krv"+KUPLOADTOP.RAONKSolution.Agent.formfeed+KUPLOADTOP.RAONKUPLOAD.util.getDateFormat(new Date(k.getTime()+
6E4*k.getTimezoneOffset()),"yyyyMMddHHmmss")+KUPLOADTOP.RAONKSolution.Agent.vertical);a=document.createElement("input");a.type="hidden";e=KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(e);a.name=e.name;a.value=e.value;g.insertBefore(a,f);KUPLOADTOP.RAONKUPLOAD.util.setCSRFHiddenInput(g,KUPLOADTOP.G_CURRKUPLOADER._config.addCSRFToken,document);k=G_FormData.length;e=[];for(b=0;b<k;b++){var q=G_FormData[b].form_value,q="1"<=KUPLOADTOP.G_CURRKUPLOADER._config.security.encryptParam?KUPLOADTOP.RAONKUPLOAD.util.makeEncryptParamFinal(q,
!0).value:encodeURIComponent(q),l=document.createElement("input");l.type="hidden";l.name=G_FormData[b].form_name;l.value=q;g.insertBefore(l,f);e.push(l)}var p=document.createElement("div"),b=KUPLOADTOP.RAONKUPLOAD.util.getDefaultIframeSrc();p.innerHTML='<iframe name="uploadframe" id="uploadframe" style="display:none;" src="'+b+'"></iframe>';p.style.display="none";document.body.appendChild(p);KUPLOADTOP.RAONKUPLOAD.util.addEvent(p.firstChild,"load",function(){p.firstChild.contentWindow.postMessage("check",
"*");if(0==KUPLOADTOP.G_CURRKUPLOADER._config.isCrossDomain){KUPLOADTOP.RAONKUPLOAD.util.removeEvent(window,"message",n);var a=p.firstChild.contentWindow.document.body.innerHTML,a=KUPLOADTOP.RAONKUPLOAD.util.trim(a);document.body.removeChild(p);uploadEnd_html4(a)}},!0);if(window.postMessage){var n=function(a){KUPLOADTOP.RAONKUPLOAD.util.removeEvent(window,"message",n);document.body.removeChild(p);0==v.indexOf(a.origin)&&(a=KUPLOADTOP.RAONKUPLOAD.util.trim(a.data),uploadEnd_html4(a))};KUPLOADTOP.RAONKUPLOAD.util.addEvent(window,
"message",n)}g.setAttribute("target","uploadframe");var v=KUPLOADTOP.G_CURRKUPLOADER._config.handlerUrl;g.setAttribute("action",v);c.getElementById("RAON_K_UP_current_upload_file_name").innerHTML=" "+RESULTFILELIST[uploaders[upload_complete_count]].originName;g.submit();document.charset=h;g.removeChild(a);for(a=k-1;0<=a;a--)g.removeChild(e[a]);g.insertBefore(d,f.nextSibling);uploadProgress_html4(upload_complete_count,TOTALUPLOADNUM,50)}}
function uploadEnd_html4(c){var g=getDialogDocument(),h=function(a,b){try{var c={strType:"upload",strStatus:"error",strTransferId:KUPLOADTOP.G_CURRKUPLOADER.transferId};"function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.transferStatusChange?KUPLOADTOP.G_CURRKUPLOADER._config.event.transferStatusChange(KUPLOADTOP.G_CURRKUPLOADER.ID,c):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_TransferStatusChange(KUPLOADTOP.G_CURRKUPLOADER.ID,c)}catch(f){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(f)}c=getUploadedFileListObj();
try{if(c={strType:"upload",strCode:a,strMessage:b,arrUploadedFileList:c},"function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.onError)KUPLOADTOP.G_CURRKUPLOADER._config.event.onError(KUPLOADTOP.G_CURRKUPLOADER.ID,c);else"function"!==typeof KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError?alert("Error Code : "+c.strCode+"\nError Message : "+c.strMessage):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_OnError(KUPLOADTOP.G_CURRKUPLOADER.ID,c)}catch(d){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(d)}KUPLOADTOP.G_CURRKUPLOADER.transferId=
"";if(1==G_MultiTranferCheck)G_MultiTranferCheck=4;else try{"0"==KUPLOADTOP.G_CURRKUPLOADER._config.skipSentFile&&fileListReset()}catch(e){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(e)}clearInterval(G_IntervalObj);PREVIOUSUPLOADEDSIZE=0;g.getElementById("RAON_K_UP_upload_size").innerHTML="-";clearInterval(KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval);KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval=null;KUPLOADTOP.G_CURRKUPLOADER.processTime=0;0<getSessionKeepData(KUPLOADTOP.G_CURRKUPLOADER).length&&
(KUPLOADTOP.G_CURRKUPLOADER._config.sessionKeep.requestFlag=!1);displayCommonReady(!1,KUPLOADTOP.G_CURRKUPLOADER);closeSendDialog();KUPLOADTOP.G_CURRKUPLOADER.cancel()};c=KUPLOADTOP.RAONKUPLOAD.util.parseDataFromServer(c);if(0==c.indexOf("[OK]"))if(c=c.replace("[OK]",""),c=KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(c),"C012|response data decrypt error"==c){var a=c.split("|");h(a[0],a[1])}else{h=c.split(KUPLOADTOP.RAONKSolution.Agent.formfeed);c=h[0];var b="",d="",f=c.indexOf("::");-1<f&&
(b=c.substring(0,f),c=c.substring(f+2,c.length));f=c.indexOf(":");-1<f&&(d=c.substring(0,f),c=c.substring(f+1,c.length));f="";f=c.length;"|"==c.substring(f-1,f)?(c=c.substring(0,f-1),f=getFileName(c,!1),c=c.substring(0,c.lastIndexOf("/"+f))):f=getFileName(c,!1);RESULTFILELIST[uploaders[upload_complete_count]].uploadName=f;RESULTFILELIST[uploaders[upload_complete_count]].uploadPath=c;RESULTFILELIST[uploaders[upload_complete_count]].fileSize=h[2];RESULTFILELIST[uploaders[upload_complete_count]].status=
"complete";RESULTFILELIST[uploaders[upload_complete_count]].logicalPath="";RESULTFILELIST[uploaders[upload_complete_count]].responseCustomValue=h[1];""!=d&&(RESULTFILELIST[uploaders[upload_complete_count]].originName=d);RESULTFILELIST[uploaders[upload_complete_count]].hashValue=b;KUPLOADTOP.G_CURRKUPLOADER.uploadedTaskId="";KUPLOADTOP.G_CURRKUPLOADER.uploadedSize=0;PREVIOUSUPLOADEDSIZE+=parseInt(h[2],10);clearInterval(G_IntervalObj);uploadProgressComplete_html4(KUPLOADTOP.RAONKUPLOAD.util.bytesToSize(h[2]));
upload_complete_count++;if(KUPLOADTOP.G_CURRKUPLOADER._config.uploadCancel){try{a={strType:"upload",strStatus:"cancel",strTransferId:KUPLOADTOP.G_CURRKUPLOADER.transferId},"function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.transferStatusChange?KUPLOADTOP.G_CURRKUPLOADER._config.event.transferStatusChange(KUPLOADTOP.G_CURRKUPLOADER.ID,a):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_TransferStatusChange(KUPLOADTOP.G_CURRKUPLOADER.ID,a)}catch(k){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(k)}if("1"==KUPLOADTOP.G_CURRKUPLOADER._config.useUploadingCancelEvent){h=
{strType:"upload",bAutoTransferFlag:!1,arrAllFileList:null,arrUploadedFileList:getUploadedFileListObj()};try{"function"==typeof KUPLOADTOP.G_CURRKUPLOADER._config.event.uploadingCancel?KUPLOADTOP.G_CURRKUPLOADER._config.event.uploadingCancel(KUPLOADTOP.G_CURRKUPLOADER.ID,h):KUPLOADTOP.KUPLOADWIN.RAONKUPLOAD_UploadingCancel(KUPLOADTOP.G_CURRKUPLOADER.ID,h)}catch(e){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(e)}}KUPLOADTOP.G_CURRKUPLOADER.transferId="";if(1==G_MultiTranferCheck)G_MultiTranferCheck=
3;else try{"0"==KUPLOADTOP.G_CURRKUPLOADER._config.skipSentFile&&fileListReset()}catch(q){KUPLOADTOP.RAONKUPLOAD.logMode&&console.log(q)}PREVIOUSUPLOADEDSIZE=0;g.getElementById("RAON_K_UP_upload_size").innerHTML="-";clearInterval(KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval);KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval=null;KUPLOADTOP.G_CURRKUPLOADER.processTime=0;0<getSessionKeepData(KUPLOADTOP.G_CURRKUPLOADER).length&&(KUPLOADTOP.G_CURRKUPLOADER._config.sessionKeep.requestFlag=!1);displayCommonReady(!1,
KUPLOADTOP.G_CURRKUPLOADER);closeSendDialog();KUPLOADTOP.G_CURRKUPLOADER.cancel()}else upload_complete_count==TOTALUPLOADNUM?(PREVIOUSUPLOADEDSIZE=0,g.getElementById("RAON_K_UP_upload_size").innerHTML="-",totalUploadComplete(),0<getSessionKeepData(KUPLOADTOP.G_CURRKUPLOADER).length&&(KUPLOADTOP.G_CURRKUPLOADER._config.sessionKeep.requestFlag=!1)):(h=uploaders.indexOf(uploaders[upload_complete_count]),adjustUploadFileListScroll(h,upload_complete_count,TOTALUPLOADNUM),processUploadHtml4())}else{0==
c.indexOf("[FAIL]")?(c=c.replace("[FAIL]",""),c=KUPLOADTOP.RAONKUPLOAD.util.makeDecryptReponseMessage(c),c=KUPLOADTOP.RAONKUPLOAD.util.getCodeAndMessage(c)):c={code:"C016",message:RAONKUpload_Lang.error_info.error_code_C016?RAONKUpload_Lang.error_info.error_code_C016:"There is a problem with the server response.",responseText:c};b=KUPLOADTOP.G_CURRKUPLOADER._config.maxOneFileSize;d=KUPLOADTOP.G_CURRKUPLOADER._config.maxTotalFileSize;a="";"020"==c.code?(a=RAONKUpload_Lang.message_limit_one_size,a=
a.replace("{0}",KUPLOADTOP.RAONKUPLOAD.util.bytesToSize(b).toString)):a="021"==c.code?RAONKUpload_Lang.message_file_ext_detect_html4:"022"==c.code?RAONKUpload_Lang.file_maximum+" "+KUPLOADTOP.RAONKUPLOAD.util.bytesToSize(d).toString+RAONKUpload_Lang.message_limit_size:c.message;b=0;if("020"==c.code||"021"==c.code||"022"==c.code){for(d=0;d<uploaders[upload_complete_count];d++)"y"==RESULTFILELIST[d].isDelete&&b++;var l=uploaders[upload_complete_count]-b;setSelectFile(l,0);l=KUPLOADTOP.G_CURRKUPLOADER._config.disableAlertMessage.disableDeleteConfirm;
KUPLOADTOP.G_CURRKUPLOADER._config.disableAlertMessage.disableDeleteConfirm=1;KUPLOADTOP.RAONKUPLOAD.DeleteSelectedFile(KUPLOADTOP.G_CURRKUPLOADER.ID);KUPLOADTOP.G_CURRKUPLOADER._config.disableAlertMessage.disableDeleteConfirm=l}if("022"==c.code)for(f=RESULTFILELIST.length,d=uploaders[upload_complete_count];d<f;d++)"y"==RESULTFILELIST[d].isDelete?b++:"n"==RESULTFILELIST[d].isWebFile&&(l=d-b,setSelectFile(l,0),l=KUPLOADTOP.G_CURRKUPLOADER._config.disableAlertMessage.disableDeleteConfirm,KUPLOADTOP.G_CURRKUPLOADER._config.disableAlertMessage.disableDeleteConfirm=
1,KUPLOADTOP.RAONKUPLOAD.DeleteSelectedFile(KUPLOADTOP.G_CURRKUPLOADER.ID),KUPLOADTOP.G_CURRKUPLOADER._config.disableAlertMessage.disableDeleteConfirm=l,d--,f--);h(c.code,a)}}
function uploadProgress_html4(c,g,h){var a=getDialogDocument();adjustUploadFileListScroll(c-1,c,g);a.getElementById("RAON_K_UP_uploadFileProgress_"+uploaders[c]).style.width="0%";G_IntervalObj=setInterval(function(){b()},400);var b=function(){var b;b=0;if(a.getElementById("RAON_K_UP_uploadFileProgress_"+uploaders[c])){b=a.getElementById("RAON_K_UP_uploadFileProgress_"+uploaders[c]).style.width.split("%");b=Math.round(1*b[0]*h/100);b++;if(b==parseInt(3*h/5,10)+1)d("1");else if(b==parseInt(4*h/5,10)+
1)d("2");else if(b==parseInt(9*h/10,10)+1)d("3");else if(b==parseInt(24*h/25,10)+1){d("4");return}if(1==b)if(a.getElementById("RAON_K_UP_upload_count"))a.getElementById("RAON_K_UP_upload_count").innerHTML=c+1+"/"+g;else return;var k=parseInt(1/h*100*b,10);a.getElementById("RAON_K_UP_uploadFileProgress_"+uploaders[c])&&(a.getElementById("RAON_K_UP_uploadFileProgress_"+uploaders[c]).style.width=k+"%",a.getElementById("RAON_K_UP_current_upload_progress_bar")&&(a.getElementById("RAON_K_UP_current_upload_progress_bar").style.width=
k+"%"),b=parseInt(1*c/g*100,10)+parseInt(parseInt(1/h*100*b,10)/g,10),a.getElementById("RAON_K_UP_total_upload_percent")&&(a.getElementById("RAON_K_UP_total_upload_percent").innerHTML=b+"%",a.getElementById("RAON_K_UP_total_upload_progress_bar")&&(a.getElementById("RAON_K_UP_total_upload_progress_bar").style.width=b+"%",a.getElementById("RAON_K_UP_upload_size")&&0==PREVIOUSUPLOADEDSIZE&&(a.getElementById("RAON_K_UP_upload_size").innerHTML="-"))))}},d=function(a){"1"==a?(clearInterval(G_IntervalObj),
G_IntervalObj=setInterval(function(){b()},800)):"2"==a?(clearInterval(G_IntervalObj),G_IntervalObj=setInterval(function(){b()},1E3)):"3"==a?(clearInterval(G_IntervalObj),G_IntervalObj=setInterval(function(){b()},1200)):"4"==a&&clearInterval(G_IntervalObj)};null==KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval&&(KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval=setInterval(function(){a.getElementById("RAON_K_UP_process_time").innerHTML=viewTime(++KUPLOADTOP.G_CURRKUPLOADER.processTime)},1E3))}
function uploadProgressComplete_html4(c){var g=getDialogDocument(),h=uploaders[upload_complete_count];if(void 0!=h){var a=parseInt(1*(upload_complete_count+1)/TOTALUPLOADNUM*100,10);g.getElementById("RAON_K_UP_current_upload_progress_bar").style.width="100%";g.getElementById("RAON_K_UP_uploadFileProgress_"+h).style.width="100%";g.getElementById("RAON_K_UP_uploadFilePercent_"+h).style.color="";g.getElementById("RAON_K_UP_uploadFilePercent_"+h).innerHTML="100%";g.getElementById("RAON_K_UP_uploadFileSize_"+
h).innerHTML=c.toString;UPLOADIDX++;g.getElementById("RAON_K_UP_upload_count").innerHTML=upload_complete_count+1+"/"+TOTALUPLOADNUM;g.getElementById("RAON_K_UP_total_upload_percent").innerHTML=a+"%";g.getElementById("RAON_K_UP_total_upload_progress_bar").style.width=a+"%";g.getElementById("RAON_K_UP_upload_size").innerHTML=KUPLOADTOP.RAONKUPLOAD.util.bytesToSize(PREVIOUSUPLOADEDSIZE).toString;100==a&&(clearInterval(KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval),KUPLOADTOP.G_CURRKUPLOADER.processTimeInterval=
null,KUPLOADTOP.G_CURRKUPLOADER.processTime=0)}};
