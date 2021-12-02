const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

const DEV_PLUGINS = [
    new CleanWebpackPlugin()
];
const PROD_PLUGINS = [
    new CleanWebpackPlugin(),
    new CompressionPlugin({
        algorithm: "gzip",
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8
    })
]

module.exports = {
    target: 'es5',
    devtool: IS_DEV ? 'source-map' : false,
    mode: NODE_ENV ? NODE_ENV : 'development',
    watch: IS_DEV,
    entry: {
        "before-after": path.resolve(__dirname,'src/js/index.js'),
        "before-after-ie11": path.resolve(__dirname,'src/js/index.ie11.js')
    },
    output: {
        path: path.resolve(__dirname,'dist/js'),
        filename: '[name].min.js',
        library: 'BeforeAfter',
        libraryTarget: "umd",
        libraryExport: "default",
        umdNamedDefine: true,
        chunkFormat: 'commonjs'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    "css-loader",
                    "less-loader"
                ]
            },
        ]
    },
    plugins: IS_DEV ? DEV_PLUGINS : PROD_PLUGINS
}
