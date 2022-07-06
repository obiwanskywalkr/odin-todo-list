const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        client: {
            logging: 'error',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TaskCat - Todo Lists',
            template: './src/index.html',
            favicon: './src/img/favicon.png'
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
            }
        ],
    },
};