const glob = require('glob');
const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const projectRoot = process.cwd();

const OUTPUT_DIR = path.resolve(projectRoot, './build');

const setMpa = () => {
  const page = glob.sync(path.join(projectRoot, './containers/**/index.js'));
  const entry = {};
  const htmlWebpackPlugin = [];
  page.forEach((item) => {
    const pageName = item.match(/containers\/(.*)\/index\.js/)[1];
    entry[pageName] = `./containers/${pageName}/index.js`;
    htmlWebpackPlugin.push(new HTMLWebpackPlugin({
      publicPath: './',
      filename: `${pageName}.html`,
      template: path.join(projectRoot, `./containers/${pageName}/${pageName}.ejs`),
      chunks: ['vendors', 'commons', pageName],
      inject: 'body',
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }));
  });
  return {
    entry,
    htmlWebpackPlugin,
  };
};

const { entry, htmlWebpackPlugin } = setMpa();

const baseConfig = {
  entry,
  output: {
    publicPath: '',
    filename: 'js/[name].[fullhash].js',
    path: OUTPUT_DIR,
    chunkFilename: 'js/[name].[fullhash].js',
  },
  optimization: {
    minimizer: [
      new CSSMinimizerPlugin(),
      '...',
    ],
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      use: [{
        loader: 'babel-loader',
      }],
    }, {
      test: /\.css$/,
      use: [MiniCSSExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 2,
        },
      }, {
        loader: 'px2rem-loader',
        options: {
          remUnit: 75,
          remPrecision: 8,
        },
      }, {
        loader: 'postcss-loader',
      }],
    }, {
      test: /\.less$/,
      use: [MiniCSSExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 3,
        },
      }, {
        loader: 'px2rem-loader',
        options: {
          remUnit: 75,
          remPrecision: 8,
        },
      }, {
        loader: 'postcss-loader',
      }, {
        loader: 'less-loader',
      }],
    }, {
      test: /\.(jpg|jpeg|png|gif|bmp)$/,
      type: 'asset',
      generator: {
        publicPath: './',
        filename: 'assets/images/[name].[hash:6][ext]',
      },
      parser: {
        dataUrlCondition: {
          maxSize: 5 * 1024,
        },
      },
    }, {
      test: /\.(woff|woff2|ttf|ttc|otf)$/,
      type: 'asset',
      generator: {
        publicPath: '../',
        filename: 'assets/fonts/[name].[hash:6][ext]',
      },
      parser: {
        dataUrlCondition: {
          maxSize: 10 * 1024,
        },
      },
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ].concat(htmlWebpackPlugin),
};

module.exports = baseConfig;
