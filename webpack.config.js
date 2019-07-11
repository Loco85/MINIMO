const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   	// context: __dirname,
	entry: {
		main: [
		   './js/main.js',
		   './css/main.scss'
		]
	},
	output: {
		path: path.resolve(__dirname, './'),
		filename: 'main.js',
	},
	// devServer: {
	//     contentBase: path.resolve(__dirname, '.'),
	//     hot: true
	// },
	module: {
		 rules: [
		   {
		   	  test:  /\.m?js$/,
		   	  exclude: /(node_modules)/,
		   	  use: {
		   	  	 loader: 'babel-loader',
		   	  	 options: {
		   	  	 	presets: [
		   	  	 	'@babel/preset-env',
		   	  	 	'@babel/preset-react'
		   	  	 	]
		   	  	 }
		   	  }
		   },
		   {
		   	  test: /\.scss$/,
		   	  // include: paths,
		   	  exclude: /node_modules/,
		   	  use: ExtractTextPlugin.extract({
		   	  	 // publicPath: '../',
		   	  	 fallback: 'style-loader',
		   	  	 use: ['css-loader?url=false','sass-loader']
		   	  	 // use: [
		   	  	 //    { loader: ['css-loader?url=false', 'sass-loader'], options: {minimize: true} }
		   	  	 // ]
		   	  })
		   },
		   {
		   	  test: /\.css$/,
		   	  exclude: /node_modules/,
		   	  use: ExtractTextPlugin.extract({
		   	  	 fallback: 'style-loader',
		   	  	 use: [
		   	  	    { loader: 'css-loader', options: { minimize: true } }
		   	  	 ]
		   	  })
		   },
		   {
		   	  test: /\.(png|jpg|gif)$/,
		   	  exclude: /node_modules/,
		   	  use: {
		   	  	  loader: 'file-loader',
		   	  	  options: {
		   	  	  	name: '[path][name].[ext]'
		   	  	  	// publicPath: './src/img',
		   	  	  	// outputPath: './img'
		   	  	  }
		   	  }
		   },
		   {
		   	  test: /\.(html)$/,
		   	  use: {
		   	  	 loader: 'html-loader',
		   	  	 options: {
		   	  	 	minimize: false,
		   	  	 	// collapseWhitespace: false,
		   	  	 	// removeComments: false,
		   	  	 	outputPath: './public',
		   	  	 	attrs: [':data-src']
		   	  	 }
		   	  }
		   },
		   {
		   	  test: /\.pug$/,
		   	  loader: 'pug-loader',
		   	  options: {
		   	  	 // publicPath: './',
		   	  	 outputPath: './',
		   	  	 pretty: false,
		   	  	 minimize: false
		   	  }
		   }
		   // { test: /\.jpg$/, use: [ "file-loader" ] },
     //  	   { test: /\.png$/, use: [ "url-loader?mimetype=image/png" ] }
		
		]
	},
	plugins: [
	  new ExtractTextPlugin({
	  	  filename: './css/main.css'
	  	  // template: './css/main.scss'
	  }),
	  new HtmlWebpackPlugin({
	  	  filename: './index.html',
	  	  template: './index.pug'
	  }),
	  new HtmlWebpackPlugin({
	  	  filename: './lifestyle.html',
	  	  template: './lifestyle.pug'
	  }),
	  new HtmlWebpackPlugin({
	  	  filename: './photodiary.html',
	  	  template: './photodiary.pug'
	  }),
	  new HtmlWebpackPlugin({
	  	  filename: './single.html',
	  	  template: './single.pug'
	  }),
	  new HtmlWebpackPlugin({
	  	  filename: './single-sidebar.html',
	  	  template: './single-sidebar.pug'
	  }),
	  new webpack.NamedModulesPlugin(),
	  new webpack.HotModuleReplacementPlugin()
	]
}