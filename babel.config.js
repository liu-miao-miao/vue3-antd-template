module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    // 兼容配置
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: false,
      },
    ],
    // 按需加载
    [
      'import',
      // style 为 true 加载 less文件
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: 'true',
      },
    ],
  ],
};
