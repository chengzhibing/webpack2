var webpack=require("webpack");
var HtmlWebpackPlugin=require("html-webpack-plugin");//html自动生成文件
var ExtrackTextPlugin=require("extract-text-webpack-plugin")//提取公共部分的插件
module.exports={
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
	entry:__dirname+"/src/main.js",//入口文件
	output:{//输出文件
		path:__dirname+"/dist",
		filename: "[name].js"
	},
	module:{
		loaders:[
		  {test:/\.css$/,loader:"style-loader!css-loader"}
		]
	},
	plugins:[
        new webpack.BannerPlugin("webpack 实例练习"),
        new HtmlWebpackPlugin(),
	],
	devServer: {
	    contentBase: __dirname,//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    //inline: true//实时刷新
	} 
}
