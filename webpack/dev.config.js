const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./common.config');
const serverConfig = require('./server.config');
const path = require('path');

module.exports = merge(common, {
    entry: [
        'webpack-hot-middleware/client',
        'react-hot-loader/patch',
        './src/entry'
    ],
    mode: 'development',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: serverConfig.publicPath
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});