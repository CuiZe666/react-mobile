const pxtoviewport = require("postcss-px-to-viewport");
// 配置路径别名需要的
const path = require("path");

module.exports = {
  style: {
    postcss: {
      plugins: [
        // https://github.com/evrone/postcss-px-to-viewport/blob/HEAD/README_CN.md
        pxtoviewport({
          viewportWidth: 375, // 设计稿宽度
        }),
      ],
    },
  },
  // 配置路径别名（可选）
  webpack: {
    alias: {
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
};
