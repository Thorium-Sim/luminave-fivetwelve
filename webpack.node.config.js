const path = require('path');

module.exports = {
    entry: [
      './src/index.js'
    ],
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    mode: "production",
    optimization: {
      // We no not want to minimize our code.
      minimize: false
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                exclude: /node_modules\/(?!fivetwelve.*)/,
                test: /\.js$/
            }
        ]
    }
}
