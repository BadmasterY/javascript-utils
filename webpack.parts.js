const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cssnano = require('cssnano');

exports.devServer = ({ host, port } = {}) => ({
    devServer: {
        stats: 'errors-only',
        host,
        port,
        open: true,
        overlay: true
    }
});

exports.loadCss = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.css$/,
                include,
                exclude,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            // 定制antd
                            modifyVars: {
                                'primary-color': '#1DA57A',
                                'link-color': '#1DA57A',
                                'border-radius-base': '2px'
                            },
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                include,
                exclude,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
});

exports.extractCss = ({ include, exclude, use }) => {
    const plugin = new ExtractTextPlugin({
        allChunks: true,
        filename: 'css/[name].css'
    });

    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include,
                    exclude,
                    use: plugin.extract({
                        use,
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [plugin]
    };
};

exports.purifyCss = ({ paths }) => ({
    plugins: [new PurifyCSSPlugin({ paths })]
});

exports.autoprefixer = () => ({
    loader: 'postcss-loader',
    options: {
        plugins: () => [require('autoprefixer')]
    }
});

exports.loadImages = ({ include, exclude, options } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                include,
                exclude,
                use: [
                    {
                        loader: 'url-loader',
                        options
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    }
});

exports.loadJavascript = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include,
                exclude,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
});

exports.clean = () => ({
    plugins: [new CleanWebpackPlugin()]
});

exports.minifyJavascript = () => ({
    optimization: {
        minimizer: [new UglifyWebpackPlugin({ sourceMap: true })]
    }
});

exports.minifyCss = ({ options }) => ({
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessor: cssnano,
            cssProcessorOptions: options,
            canPrint: false
        })
    ]
});