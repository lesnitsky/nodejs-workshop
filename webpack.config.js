const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.join(__dirname, 'src/client/dist'),
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

  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/client/index.html',
        to: 'index.html',
      },
    ]),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'src/client'),
  },

  mode: 'development',
};
