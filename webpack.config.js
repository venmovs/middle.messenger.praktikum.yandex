const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.ts',
    devtool: 'source-map',
    resolve: {
        fallback: {
            fs: false,
        },
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.json',
            '.scss',
        ],
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js',
            pagesCSS: path.resolve(__dirname, './static/styles'),
        },
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(svg|png|jpg|gif|jpeg)$/i,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                    },
                }],
            },
            {
                test: /\.(js|ts)x?$/,
                loader: require.resolve('babel-loader'),
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            template: './index.html',
        }),
    ],
};
