'use strict';

const path              = require('path')
const webpack           = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const PORT = 8989

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    
    entry: [
        'webpack-dev-server/client?http://localhost:' + PORT,
        './source/index'
    ],

    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, './node_modules/'),
                loader: "babel-loader"
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },

                    {
                        loader: 'css-loader?localIdentName=[name]__[local]__[hash:base64:7]&modules=true'
                    }
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },

                    {
                        loader: 'css-loader?sourceMap=true&localIdentName=[name]__[local]__[hash:base64:7]&modules=true'
                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            data: '@import "./source/static/styles/Variables";'
                        }
                    }
                ]
            },

            {
                test: /\.(gif|png|jpg|jpeg|svg|ttf|eot|woff|otf|woff2)$/,
                loader: 'file-loader?name=[path][name].[ext]?[hash]'
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './source/index.html'
        }),
        new ExtractTextPlugin('styles[hash].css')
    ],

    devServer: {
        host: 'spotifysimilar.local',
        contentBase: './dist', // boolean | string | array, static file location
        hot: true, // hot module replacement, depends on HotModuleReplacementPlugin
        inline: true,  // build messages will appear in the browser console (true), false - iframe mode
        port: PORT, // port for localhost
        https: false, // use https, but not SSL
        open: true, // will open browser when starting script
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        stats: {
            colors: true,
            progress: true
        }
    }
}
