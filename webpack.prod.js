const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path                 = require("path");
const TerserPlugin         = require("terser-webpack-plugin");
const CssMinimizerPlugin   = require("css-minimizer-webpack-plugin");
const CopyPlugin           = require("copy-webpack-plugin");


module.exports = {
    mode: 'production',
    output: {
        clean: true,
        filename: 'main.[fullhash].js',
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.html$/, 
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader' ]

            },
            { 
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: 'src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[fullhash].css',
            ignoreOrder: false,
            
        }),
        new TerserPlugin({

        }),
        new CssMinimizerPlugin({
            
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/'}
            ]
        })

    ],
}   