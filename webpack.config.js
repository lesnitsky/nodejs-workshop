const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'app.bundle.js',
  },

  module: {
    rules: [
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
        from: './src/client/index.html',
        to: 'index.html',
      },
      {
        from: './src/client/login.html',
        to: 'login.html',
      },
      {
        from: './src/client/style.css',
        to: 'style.css',
      },
    ]),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'src/client'),
  },

  mode: 'development',
};
