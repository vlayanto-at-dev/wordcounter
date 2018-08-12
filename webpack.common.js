const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new FaviconsWebpackPlugin(
      {
        // Your source logo
        logo: './assets/logo.png',
        // The prefix for all image files (might be a folder or a name)
        prefix: 'icons-[hash]/',
        // Emit all stats of the generated icons
        emitStats: false,
        // The name of the json containing all favicon information
        statsFilename: 'iconstats-[hash].json',
        // Generate a cache file with control hashes and
        // don't rebuild the favicons until those hashes change
        persistentCache: true,
        // Inject the html into the html-webpack-plugin
        inject: true,
        // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        background: '#fff',
        // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        title: 'Webpack App',

        // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {

        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  }
}
