const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/Library.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: "[name].bundle.js",
		clean: true,
		assetModuleFilename: "[name].asset.[ext]",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "body",
			title: "",
			filename: "index.html",
			scriptLoading: "defer",
			favicon: path.resolve(__dirname, "src/assets/icons/logo.svg"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: { filename: "[name][ext]" },
			},
			{
				test: /\.(woff|woff2|otf|ttf|eot)$/i,
				type: "asset/resource" /* This is called a MIME/media type/content type */,
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
				options: {
					sources: false,
				},
			},
		],
	},
};
