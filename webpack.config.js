var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");//html自动生成文件
var ExtrackTextPlugin=require("extract-text-plugin")//提取公共部分的插件
module.exports={
	//entry:"./index.js",
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/build",
		filename: "[name]-[hash].js"
	},
	output:{
		path:__dirname,
		filename:"bandle.js"
	},
	module:{
		loaders:[
		  {test:/\.css$/,loader:"style-loader!css-loader"}
		]
	},
	plugins:[
        new webpack.BannerPlugin("webpack 实例练习")
	]
}