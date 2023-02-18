import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import eslintPlugin from "vite-plugin-eslint";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  envDir: resolve(__dirname, "config"),
  plugins: [
    uni(),
    eslintPlugin({
      cache: false,
    }),
  ],
  resolve: {
    modules: ["../node_modules"],
    alias: {
      "@": resolve("./src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve("src/static/css/base.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
