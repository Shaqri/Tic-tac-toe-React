const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }, 
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        }),
    ]
}