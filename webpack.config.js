const path = require('path');
const mode = process.env.NODE.ENV || 'development';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserlist';
const devtool = devMode ? 'source-map' : undefined;
module.exports = {
	mode,
	target,
	devtool,
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			}
		]
	}
}