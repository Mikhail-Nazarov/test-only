const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevBuild = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: isDevBuild ? 'development' : 'production',
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    { loader: '@svgr/webpack', },
                ]
            },
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
         template: path.join(__dirname, 'src', 'template.html')
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'),
      },
}