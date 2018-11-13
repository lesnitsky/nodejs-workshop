const path = require('path');

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

  mode: 'development',
};
