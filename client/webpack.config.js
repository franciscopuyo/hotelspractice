const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const config = {
  resolve: {
    modules: ['node_modules', path.resolve('./app')],
    extensions: ['.js', '.jsx'],
  },
  entry: {
    bundle: [
      './app/index.js',
      './app/styles/bootstrap.min.css',
      './app/styles/bootstrap-theme.min.css',
      './app/styles/main.scss',
    ],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js',
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
            { loader: 'sass-loader' },
          ],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: { loader: 'style-loader' },
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
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-react-loader',
            query: {
              classIdPrefix: '[name]-[hash:8]__',
              propsMap: {
                fillRule: 'fill-rule',
                foo: 'bar',
              },
              xmlnsTest: /^xmlns.*$/,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      disable: !isProd,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(env),
      },
    }),
  ],
};

if (isProd) {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compressor: {
        warnings: false,
      },
    }),
  ]);
}

module.exports = config;
