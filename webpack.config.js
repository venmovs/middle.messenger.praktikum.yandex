const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
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
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './static/images/fav/favicon.png',
                    to: 'favicon.png',
                },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
};
