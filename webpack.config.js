/* eslint-disable no-undef */
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'prod';

module.exports = {
    entry: {
        main: ['babel-polyfill', './src/index.js']
    },
    output: {
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(less)$/,
                use: [{
                    loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
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
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'react-svg-loader',
                        options: {
                            jsx: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10240000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: './index.html',
            favicon:  path.resolve( __dirname, 'public/favicon.ico'),
            template: path.resolve( __dirname, 'public/index.html' ),

        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
        new CopyWebpackPlugin([
            {
                from: './src/assets/*',
                to: path.resolve(__dirname, 'dist')
            }
        ])
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/components')
        },
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        // contentBase: path.join(__dirname, 'dist'),
        // port: 3000
        overlay: {
            warnings: false,
            errors: true
          }
    },
    devtool: 'source-map'
};