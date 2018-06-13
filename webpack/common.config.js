const path = require('path');

const config = {
    performance: {
        // hints: "error",
        // assetFilter: function(assetFilename) {
        //     return /\.js|jpg|jpeg|gif|png$/.test(assetFilename);
        // }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".css"]
    }
};

module.exports = config;