const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    mode: "development",
    module: {
        rules: [
            { // babel loader
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            { // Image loader
                test: /\.(svg|png|jpg|jpeg|gif|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                            name: '[name]-[sha1:hash:7].[ext]'
                        }
                    }
                ]
            },
            { // Font loader
                test: /\.(ttf|otf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts',
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            { // CSS loader
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            { // SCSS/SASS loader
                test: /\.(s[ac]ss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader',
                    {loader: 'sass-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Hello, Front-App",
            buildTime: new Date().toISOString(),
            template: 'public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
        })
    ],
    devServer: {
        open: true
    }
}