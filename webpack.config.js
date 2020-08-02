const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const webConfig = {
  target: 'web',
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'build/index.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      // TODO: wansong, eslint loader
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
	test: /\.css$/,
	use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
	test: /\.(png|jp(e*)g|svg)$/,
	use: 'file-loader'
      }
    ]
  },
  devServer: {
    host: '0.0.0.0',
    // port 不起作用
    port: 8200
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'snote',
      filename: 'index.html',
      template: 'src/template/index.html',
      favicon: 'src/template/favicon.ico',
      meta: {
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
	'theme-color': '#000000',
	description: "Home page of snote"
      }
    })
  ]
};

const nodeConfig = {
  target: 'node',
  entry: './src/server/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/dist',
    filename: 'build/server.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      // TODO: wansong, eslint loader
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
	test: /\.css$/,
	// use: ['style-loader', 'css-loader', 'postcss-loader']
        loader: 'ignore-loader'
      },
      {
	test: /\.(png|jp(e*)g|svg)$/,
	// use: 'file-loader'
        loader: 'ignore-loader'
      }
    ]
  }
};

module.exports = [nodeConfig, webConfig];
