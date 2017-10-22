const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
  entry: {
    bundle: [
    './app/index.js',
    './app/styles/bootstrap.min.css',
    './app/styles/bootstrap-theme.min.css',
    './app/styles/main.css',  
    ]
  },
  devtool: 'source-map',
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
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader' }
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader'},
          use: [{ loader: 'css-loader' }],
        }),
      },
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, './app'),
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