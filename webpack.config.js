var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./src/circleBlink.js",
  output: {
    path: path.resolve("dist"),
    filename: "circleBlink.js",
    library:'StarRatingLite',
    libraryTarget: 'commonjs2'
  },
  module: {
         rules: [
           {
               test: /\.js$/,
               loader: 'babel-loader',
               exclude: /node_modules/,
               query: {
                   presets: ['react','es2015']
               }
           }
         ]
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'styled-components': {
      amd: 'styled-components',
      commonjs: 'styled-components',
      commonjs2: 'styled-components'
    }
  },
  resolve: {
   alias: {
     'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
   }
 },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
};
