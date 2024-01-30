<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>우편번호 검색</title>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        #post-search {
            width: 100%;
            height: 100%;
        }
    </style>

    <script defer>
    </script>
</head>
<body>
    <div id="post-search"></div>

    <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
    <script>
        (function () {
            let domLoaded = false;
            let initialized = false;

            const eventMap = {
                initialized: [],
                completed: [],
                resize: [],
                search: []
            };

            window.addEventListener("DOMContentLoaded", function () {
                domLoaded = true;
            });

            window.postSearch = {
                init() {
                    if (initialized) {
                        return;
                    }

                    if (domLoaded) {
                        initialize();
                    } else {
                        window.addEventListener("DOMContentLoaded", function () {
                            initialize();
                        });
                    }
                },
                on(event, callback) {
                    if (!eventMap.hasOwnProperty(event)) {
                        return;
                    }

                    eventMap[event].push({
                        handler: callback
                    });
                },
                once(event, callback) {
                    if (!eventMap.hasOwnProperty(event)) {
                        return;
                    }

                    eventMap[event].push({
                        handler: callback,
                        once: true
                    });
                },
                removeListener(event, callback) {
                    if (!eventMap.hasOwnProperty(event)) {
                        return;
                    }

                    const list = eventMap[event];
                    const index = list.findLastIndex(e => e.callback === callback);
                    if (index >= 0) {
                        list.splice(index, 1);
                    }
                }
            };

            function emit(event, args) {
                if (!eventMap.hasOwnProperty(event)) {
                    return;
                }

                const list = eventMap[event];
                const onceInvoked = [];
                list.forEach((listener, index) => {
                    listener.handler(args);
                    if (listener.once) {
                        onceInvoked.push(index);
                    }
                });

                onceInvoked.reverse().forEach(i => list.splice(i, 1));
            }

            function initialize() {
                new daum.Postcode({
                    oncomplete(data) {
                        emit("completed", data);
                    },
                    onresize(size) {
                        emit("resize", size)
                    },
                    onsearch(data) {
                        emit("search", data);
                    },
                    width: "100%",
                    height: "100%",
                    animation: true,
                }).embed(document.getElementById("post-search"), {
                    autoClose: false
                });

                emit("initialized", {});
            }
        })()
    </script>
</body>
</html>
