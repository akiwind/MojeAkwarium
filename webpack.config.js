const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
 mode: "development",
 entry: ['whatwg-fetch', './js/app.jsx'],
 devtool: 'inline-source-map',
 devServer: {
   contentBase: path.join(__dirname, 'dist'),
   compress: true,
   port: 9000
 },
 module: {
   rules: [{
     test: /\.jsx$/,
     exclude: /node_modules/,
     use: {
       loader: "babel-loader",
       options: {
         presets: ["es2015", "react"]
       }
     }
   }]
 },
 plugins: [
   new CleanWebpackPlugin(),
   new HtmlWebpackPlugin({
     title: 'Development',
     template: './index.html'
   })
 ],
 output: {
   filename: '[name].bundle.js',
   path: path.resolve(__dirname, 'dist')
 }
}