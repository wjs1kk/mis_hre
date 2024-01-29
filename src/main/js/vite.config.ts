import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

import { defineConfig, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import commonjs from "@rollup/plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [commonjs(), vue(), generateJsp()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    },
    base: "",
    optimizeDeps: {
        include: ['dhx-suite-package'],
        force: true,
        needsInterop: ['dhx-suite-package']
    },
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: resolve(__dirname, "index.html"),
            output: {
                manualChunks: {
                    "dhx-suite": ["dhx-suite-package"],
                }
            }
        },
        commonjsOptions: {
            include: ["lib/dhx_trial/codebase/*"]
        },
        sourcemap: true,
        chunkSizeWarningLimit: 1024 // 1M
    }
});

function generateJsp(): Plugin {
    return {
        name: "generate-jsp",
        enforce: "post",
        transformIndexHtml(html) {
            const headOpeningBegin = html.indexOf("<head") + 1;
            const headOpeningEnd = html.indexOf(">", headOpeningBegin) + 1;
            const arr = [
                "<%@page language=\"java\" contentType=\"text/html; charset=UTF-8\" pageEncoding=\"UTF-8\" %>",
                html.slice(0, headOpeningEnd),
                "    <base href=\"${pageContext.servletContext.contextPath}/\">",
                html.slice(headOpeningEnd)
            ];

            return arr.join("\n").replace(/(?<==")(\.\/)/g, "${pageContext.servletContext.contextPath}/");
        },
        generateBundle(options, bundle) {
            const index = bundle["index.html"];
            index.fileName = "WEB-INF/jsp/index-web.jsp";
        }
    };
}
