const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({mode="development"}) => { 

    const isProd = mode === "production";
    const isDev = mode === "development"

    const getStyleLoader = () => {
        return [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
        ]
    };

    const getPlugins = () => {
        const plugins = [
            new HtmlWebpackPlugin({
                title: "Hello, Front-App",
                buildTime: new Date().toISOString(),
                template: 'public/index.html',
                inject: 'body'
            })
            
        ]
        if(isProd) {
            plugins.push(new MiniCssExtractPlugin({
                filename: 'main[hash:4].bundle.css'
            }));
        }

        return plugins;
    }

    console.log("mode:", mode, "isProd:", isProd, "isDev:", isDev);
    console.log("=============================================");
    return {
        mode: isProd ? 'production' : isDev && 'development',
        output: {
            filename: isProd ? 'main[hash:4].bundle.js' : undefined,
            clean: true
        },
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
                                name: '[name][sha1:hash:4].bundle.[ext]'
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
                    use: getStyleLoader(),
                },
                { // SCSS/SASS loader
                    test: /\.(s[ac]ss)$/,
                    use: [
                        ...getStyleLoader(),
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: getPlugins(),
        devServer: {
            open: true
        }
    };
};