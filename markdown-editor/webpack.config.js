const path = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (env) {
  const is_production = env === 'production';
  const output_dir = path.resolve(__dirname, '../docs/markdown-editor');

  const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin({
      filename: env === 'production' ? '[name].[chunkhash].css' : '[name].css'
    })
  ]

  if (is_production) {
    plugins.push(new CleanWebpackPlugin([output_dir], {
      root: path.resolve(output_dir, '..')
    }));
  }

  return {
    context: path.resolve(__dirname, 'app'),
    entry: {
      vendor: ['mithril', 'marked'],
      index: './index'
    },
    output: {
      path: path.resolve(__dirname, output_dir),
      filename: is_production ? '[name].[chunkhash].js' : '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('css-loader')
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx']
    },
    node: {
      global: false,
      setImmediate: false
    },
    plugins: plugins
  };
};