import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import autoprefixer from "autoprefixer";

//随便测试了一些配置项
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  envDir: "env",
  resolve: {
    alias: {
      "@": "src",
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    // legacy({
    //   targets: ">0.2% and not dead",
    // }),
  ],
  server: {
    host: "0.0.0.0",
    open: "/index.html#/page1",
    fs: {
      strict: true, //true by default
    },
  },
  build: {
    modulePreload: {
      polyfill: true,
    },
    target: "es2015",
    minify: false,
    cssCodeSplit: true, //true by default
    commonjsOptions: {
      include: [/webpack-demo/, /rollup-demo/, /node_modules/],
    },
  },
  optimizeDeps: {
    disabled: "build", //build by default
    // exclude: ["lodash-es"],
    include: ["webpack-demo", "rollup-demo"],
  },
});
