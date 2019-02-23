const path = require('path');
module.exports = {
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        open: true
    },
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader'
        }
        ]
    },
    resolve: {
        extensions: [
            '.ts','.js'
        ]
    }
};

