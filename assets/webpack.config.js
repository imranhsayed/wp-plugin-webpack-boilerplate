const path = require( 'path' );

/**
 * Plugins
 */
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// JS Directory path.
const JSDir = path.resolve( __dirname, 'src/blocks' );
const IMG_DIR = path.resolve( __dirname, 'src/images' );
const FONTS_DIR = path.resolve( __dirname, 'src/fonts' );
const BUILD_DIR = path.resolve( __dirname, 'build' );

// Add new entries, fileName: filePath
const entry = {
	main: path.resolve( __dirname, 'src/main.js' ),
};

const output = {
	path: BUILD_DIR,
	filename: 'js/[name].js'
};

/**
 * Note: argv.mode will return 'development' or 'production'.
 */
const plugins = ( argv ) => [
	
	new MiniCssExtractPlugin( {
		filename: 'blocks/[name]/index.css'
	} ),
];

const rules = [
	{
		test: /\.js$/,
		include: [ JSDir ],
		exclude: /node_modules/,
		use: 'babel-loader'
	},
	{
		test: /\.scss$/,
		exclude: /node_modules/,
		use: [
			MiniCssExtractPlugin.loader,
			'css-loader',
			'postcss-loader',
			'sass-loader'
		]
	},
	{
		test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
		exclude: [ FONTS_DIR, /node_modules/ ],
		use: {
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
				publicPath: '../'
			}
		}
	},
	{
		test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
		exclude: [ IMG_DIR, /node_modules/ ],
		use: {
			loader: 'file-loader',
			options: {
				name: '[path][name].[ext]',
				publicPath: '../'
			}
		}
	}
];

// For webpack@5 we use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`).
const optimization = [
	`...`,
	new CssMinimizerPlugin(),
];

module.exports = ( env, argv ) => ( {
	entry: entry,
	output: output,
	plugins: plugins( argv ),
	devtool: 'source-map',
	module: {
		'rules': rules
	},
	
	optimization: {
		minimizer: optimization
	}
} );
