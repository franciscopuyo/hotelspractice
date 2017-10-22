const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },
          use: [
            { loader: 'css-loader' },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ],
        }),
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, './src'),
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: process.env.NODE_ENV !== 'production',
    }),
  ]
};

module.exports = config;