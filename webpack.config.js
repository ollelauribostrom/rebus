const path = require('path');

module.exports = () => ({
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: 'dist'
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
      }
    ]
  }
});
