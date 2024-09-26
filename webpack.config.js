var path = require("path");

module.exports = {
	mode: "production", // Set the mode to 'development' or 'production'
	entry: "./src/ImageResize.js",
	output: {
		path: __dirname,
		library: "ImageResize",
		libraryTarget: "umd",
		filename: "image-resize.min.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.join(__dirname, "src"),
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
							plugins: [
								"@babel/plugin-transform-class-properties",
							],
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "raw-loader",
					},
				],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "demo"),
		},
		compress: true,
		port: 9000,
	},
};
