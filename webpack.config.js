const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin           = require("copy-webpack-plugin");
const path                 = require('path');
module.exports = {
    mode: 'development',
    output: {
        clean: true,
        path: path.resolve(__dirname, 'docs'),
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
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            }
        ]
    },

    optimization: {

    },

    

    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
            
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/assets/',
                    to: 'assets/',
                }
            ]
        })

    ],
}   