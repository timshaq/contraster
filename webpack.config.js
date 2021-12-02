// webpack.config.js
const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
module.exports = {
    target: 'es5',
    mode: NODE_ENV ? NODE_ENV : 'development',
    watch: IS_DEV,
    entry: path.resolve(__dirname,'src/js/index.js'),
    output: {
        path: path.resolve(__dirname,'dist/js'),
        filename: 'before-after.js',
        library: 'BeforeAfter',
        libraryTarget: "umd",
        libraryExport: "default",
        umdNamedDefine: true,
        chunkFormat: 'commonjs'
        // globalObject: `(typeof self !== 'undefined' ? self : this)`
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
    }
    // resolve: {
    //     extensions: ['.js'],
    //     modules: [path.resolve(__dirname, 'src')],
    // },
    // devtool: 'source-map'
}
