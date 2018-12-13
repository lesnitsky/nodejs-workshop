const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/react-client/index.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpeg)$/,
        use: 'url-loader',
      },
    ],
  },

  devtool: 'source-map',

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/react-client/index.html',
        to: 'index.html',
      },
      {
        from: './src/react-client/login.html',
        to: 'login.html',
      },
      {
        from: './src/react-client/style.css',
        to: 'style.css',
      },
    ]),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'src/client'),
  },

  mode: 'development',
};
