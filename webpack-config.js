const webpack = require("webpack");
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: "./src/app/app.tsx",
    mode: process.env.NODE_ENV,
    output: {
        filename: "./app-bundle.js"
    },
    resolve: {
        alias: {
            'Styles': path.resolve(__dirname, './src/stylesheet/'),
            'Library': path.resolve(__dirname, './src/app/library/'),
            'Models': path.resolve(__dirname, './src/app/models/')
        },
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    cache: true,
    watchOptions: {
        poll: true
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(process.env.NODE_ENV)
        })
    ]
};
