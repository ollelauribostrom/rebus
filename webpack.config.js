const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'auto'
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
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(wav)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'Jeopardy_Music.wav'
        }
      }
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
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true, // Open the default browser when the server starts
    hot: true // Enable Hot Module Replacement (HMR)
  }
};
