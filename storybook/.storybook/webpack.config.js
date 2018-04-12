module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'awesome-typescript-loader',
    exclude: /node_modules/
  });
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
