const path = require('path');
const del = require("del");
const merge = require('lodash.merge');

const babel_config_ie11 = require('./babel.config.ie11');
const babel_config_es5 = require('./babel.config.es5');
const babel_config_es6 = require('./babel.config.es6');

const CompressionPlugin = require("compression-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

const DEV_PLUGINS = [
];
const PROD_PLUGINS = [
    new CompressionPlugin({
        algorithm: "gzip",
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8
    })
];

const styleLoader = {
    test: /\.less?$/,
    use: [
        'style-loader',
        "css-loader",
        "less-loader"
    ]
};

const common = {
    devtool: IS_DEV ? 'source-map' : false,
    mode: NODE_ENV ? NODE_ENV : 'development',
    watch: IS_DEV,
    output: {
        path: path.resolve(__dirname,'dist/js'),
        filename: '[name].min.js',
        library: 'BeforeAfter',
        libraryTarget: "umd",
        libraryExport: "default",
        umdNamedDefine: true,
        chunkFormat: 'commonjs'
    },
    plugins: IS_DEV ? DEV_PLUGINS : PROD_PLUGINS
};

const es6 = merge({...common}, {
    target: 'es6',
    entry: {
        "before-after": path.resolve(__dirname,'src/js/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babel_config_es6,
                }
            },
            styleLoader
        ]
    },
});

const es5 = merge({...common}, {
    target: 'es5',
    entry: {
        "before-after.es5": path.resolve(__dirname,'src/js/index.js'),
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babel_config_es5,
                }
            },
            styleLoader
        ]
    },
});

const ie11 = merge({...common}, {
    target: 'es5',
    entry: {
        "before-after.ie11": path.resolve(__dirname,'src/js/index.ie11.js')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babel_config_ie11,
                }
            },
            styleLoader
        ]
    },
});

del.sync([
    path.resolve(__dirname,'dist/js/*'),
    path.resolve(__dirname,'dist/css/*'),
]);

return IS_DEV ? module.exports = [es6] : module.exports = [es6, es5, ie11];