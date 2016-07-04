export default {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    host: '0.0.0.0',
    port: '3000'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }],
  },
};
