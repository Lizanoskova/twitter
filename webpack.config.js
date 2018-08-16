const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'development',
  entry: {
   // testBundle: './Test.jsx',
    indexBundle: './test.jsx',
    // testRedux: './testRedux.jsx',
  },
   context: `${__dirname}/static_src`,
   output: {
    path:`${__dirname}/static/build`,
    //filename: "bundle.js",
    filename: NODE_ENV === 'development' ? '[name].js' : '[name]-[hash].js',

    publicPath: '/static/build/'
  },

  devServer: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },

  watch: NODE_ENV === 'development',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: `${__dirname}/static_src`,
        loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000' 
      },
    ], 
  } ,

  devtool: NODE_ENV === 'development' ? 'cheap-module-source-map' : false,
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new BundleTracker({ filename: './webpack-stats.json'}),
  ],

};

// if(NODE_ENV !== 'development'){
//   module.exports.plugins.push(
//     new webpack.optimize.UglifyJsPlugin({
//       compress:{
//         warnings: false,
//         drop_console: true,
//       },
//     })
//   );
// }
