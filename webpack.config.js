const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const path = require('path');
const globAll = require('glob-all');

const config = require('./package.json');

const parts = require('./webpack.parts');

const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const commonConfig = merge([
    {
        entry: PATHS.app + '/index.js',
        output: {
            path: PATHS.build,
            filename: 'js/utils.min.js',
            libraryTarget: 'umd',
            library: 'utils'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'uitils'
            }),
            new webpack.BannerPlugin(
`JavaScript Utils (library ?_?)
utils - v${config.version} (${new Date()})
Released under ISC license`
               )
        ],
        resolve: {
            extensions: ['.js', '.jsx','.json', 'less', 'sass', 'vue'],
        }
    }
]);

const productionConfig = merge([
    parts.clean(),
    parts.loadJavascript({ include: PATHS.app }),
    parts.minifyJavascript()
]);

const developmentConfig = merge([
    parts.devServer({
        host: process.env.HOST,
        port: process.env.PORT
    }),
    parts.loadJavascript({
        include: PATHS.app
    })
]);

module.exports = mode => {
    if (mode === 'production') {
        return merge(commonConfig, productionConfig, { mode });
    }
    return merge(commonConfig, developmentConfig, { mode });
}