import json from "@rollup/plugin-json"; //导入json文件
import terser from "@rollup/plugin-terser"; //压缩代码
import clear from "rollup-plugin-clear"; //清空指定文件夹
import resolve from "@rollup/plugin-node-resolve"; //使用node模块的解析逻辑，不然导入第三方库会找不到
import commonjs from "@rollup/plugin-commonjs"; //convert commonjs module to es6 module, so that you can use a commonjs module by 'import'
import babel from "@rollup/plugin-babel"; //babel编译
import postcss from "rollup-plugin-postcss"; //处理样式
import autoprefixer from "autoprefixer"; //自动添加css前缀
import cssnano from "cssnano"; //压缩css代码
export default {
  input: [
    "./src/index.js",
    // "./src/components/BlueText/index.js",
    // "./src/components/RedText/index.js",
  ],
  output: [
    {
      preserveModules: true, //打包后保留目录结构
      preserveModulesRoot: "src",
      dir: "es",
      format: "es",
      // sourcemap: true,
    },
  ],
  external: ["react", "react/jsx-runtime"],
  plugins: [
    clear({
      targets: ["es"],
    }),
    json(),
    resolve(),
    commonjs({ include: [/node_modules/] }),
    babel({
      babelHelpers: "runtime",
      skipPreflightCheck: true,
      exclude: ["node_modules/**"], //该插件不会自动忽略，需要显式指定不处理node_modules
    }),
    postcss({
      extract: "css/index.css",
      plugins: [autoprefixer(), cssnano()],
    }),
    terser(),
  ],
};
