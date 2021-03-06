const path = require('path');
const del = require("del");
const merge = require('lodash.merge');

const babel_config_ie11 = require('./cfg/babel.config.ie11');
const babel_config_es5 = require('./cfg/babel.config.es5');
const babel_config_es6 = require('./cfg/babel.config.es6');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EventHooksPlugin = require("event-hooks-webpack-plugin");
const { PromiseTask } = require('event-hooks-webpack-plugin/lib/tasks');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

const DEV_PLUGINS = [
];
const PROD_PLUGINS = [
];

const common = {
    devtool: IS_DEV ? 'source-map' : false,
    mode: NODE_ENV ? NODE_ENV : 'development',
    watch: IS_DEV,
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js',
        library: 'Contraster',
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
        "contraster": path.resolve(__dirname,'src/js/index.js'),
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
            }
        ]
    },
});

const es5 = merge({...common}, {
    target: 'es5',
    entry: {
        "contraster.es5": path.resolve(__dirname,'src/js/index.js'),
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
            }
        ]
    },
});

const ie11 = merge({...common}, {
    target: 'es5',
    entry: {
        "contraster.ie11": [
            "core-js/stable",
            "regenerator-runtime/runtime",
            path.resolve(__dirname,"src/js/pollyfils/append.js"),
            path.resolve(__dirname,'src/js/index.js')
        ]
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
            }
        ]
    },
});



const style = {
    mode: NODE_ENV ? NODE_ENV : 'development',
    watch: IS_DEV,
    entry: {
        "contraster": path.resolve(__dirname,'src/less/index.less')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'style.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            linkType: "text/css",
            filename: "[name].css",
        }),
        new EventHooksPlugin({
            "done": new PromiseTask(async () => {
                const logg = del([
                    path.resolve(__dirname,'dist/style.js'),
                ]);
            })
        })
    ],
    module: {
        rules: [
            {
                test: /\.less?$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "less-loader"
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
};

(async () => {
    del([
        path.resolve(__dirname,'dist/*'),
    ]);
})();

return IS_DEV ? module.exports = [es6, style] : module.exports = [es6, es5, ie11, style];
