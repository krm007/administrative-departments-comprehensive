const tsImportPluginFactory = require("ts-import-plugin");
const { getLoader } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");
/**
 * @author sunshixiong
 * 此配置主要使用antd提供的react-app-rewired实现create-react-app自定义
 * 配置，使用ts-import-plugin实现包的按需加载，import的时候就可以用{xxx}导入
 */
module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === "string" &&
      rule.loader.includes("ts-loader")
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [
        tsImportPluginFactory([
          {
            libraryDirectory: "es",
            libraryName: "antd",
            style: true
          },
          {
            camel2DashComponentName: false,
            libraryDirectory: "",
            libraryName: "@material-ui/core"
          },
          {
            camel2DashComponentName: false,
            libraryDirectory: "",
            libraryName: "@material-ui/core/styles"
          },
          {
            camel2DashComponentName: false,
            libraryDirectory: "",
            libraryName: "@material-ui/core/colors"
          },
          {
            camel2DashComponentName: false,
            libraryDirectory: "",
            libraryName: "@material-ui/icons"
          }
        ])
      ]
    })
  };

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true,
    modifyVars: {
      "@layout-header-background": "#253555",
      "@menu-collapsed-width": "60px",
      "@menu-dark-bg": "rgba(37, 53, 85, 0.65)",
      "@menu-dark-submenu-bg": "#2b3d5b",
      "@primary-color": "#3c8ed9",
      "@table-header-bg": "#3c8ed9",
      "@table-header-color": "rgba(0, 0, 0, 0.45)"
    }
  })(config, env);
  return config;
};
