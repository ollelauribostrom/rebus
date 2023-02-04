const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = publicPath => ({
  entry: {
    main: './src/js/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: publicPath || '/'
  },
  devtool: 'source-map',
  resolve: { extensions: ['.js', '.json'] },
  module: {
    rules: [
      // Process JS with Babel.
      {
        test: /\.(js)$/,
        include: path.resolve(__dirname, 'src/'),
        loader: require.resolve('babel-loader')
      },
      // HTML
      { test: /\.html$/, use: ['html-loader'] },
      // CSS
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3050
  }
});
