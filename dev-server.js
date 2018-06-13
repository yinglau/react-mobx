const path = require('path');
const express = require('express');

const webpack = require('webpack');
const webpackConfig = require('./webpack/dev.config');
const serverConfig = require('./webpack/server.config');

const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const compiler = webpack(webpackConfig);

app.use(WebpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    // stats: {colors: true},
    // lazy: false,
    // watchOptions: {
    //     aggregateTimeout: 300,
    //     poll: true
    // }
}));
app.use(WebpackHotMiddleware(compiler));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('src/index.html'));
});

app.listen(serverConfig.port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`The server has start, listen ${serverConfig.port}`);
    }
});