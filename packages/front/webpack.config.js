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
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
	test: /\.(png|jp(e*)g|svg)$/,
	use: 'file-loader'
      }
    ]
  }
}
