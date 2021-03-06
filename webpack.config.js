'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  target: 'web',

  cache: true,

  node: {
    fs: 'empty'
  },

  entry: {
    // app: path.join(__dirname, 'src/app.js'),
    app: path.join(__dirname, 'app/main.js'),
    common: [
      'react',
      'redux',
      'react-redux',
      'redux-devtools',
      'redux-thunk'
    ]
  },

  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json'],
    modulesDirectories: ['node_modules', 'src']
  },

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?cacheDirectory&stage=0&optional=runtime']},
      { test: /\.json?$/, loader: 'json'},
      { test: /\.css$/, loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'},
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],

  debug: true,

  devtool: 'source-map',

  // devServer: {
  //   contentBase: './tmp',
  //   historyApiFallback: true
  // }
};
