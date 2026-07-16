const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");


module.exports = {
  entry: './src/index.js',  // Вхідний файл вашого додатка
  output: {
    filename: 'bundle.js',  // Назва вихідного файлу
    path: path.resolve(__dirname, 'dist')  // Директорія виведення
  },
  module: {
    rules: [
      {
				test: /\\.js$/,  // Збірка для JavaScript файлів
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\\.(png|jpe?g|gif|svg)$/,  // Збірка для зображень
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          },
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ]

};