const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  output: {
    path: __dirname + '/public',
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
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'snote',
      filename: 'index.html',
      template: 'src/template/index.html',
      favicon: 'src/template/favicon.ico',
      meta: {
	viewport: 'width=device-width, initial-scale=1',
	'theme-color': '#000000',
	description: "Home page of snote"
      }
    })
  ]
}
