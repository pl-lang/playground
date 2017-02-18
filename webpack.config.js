module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
        path: './src/bundle'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
}