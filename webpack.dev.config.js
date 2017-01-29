module.exports = {
    entry: './src/app.dev.ts',
    output: {
        filename: 'bundle.dev.js',
        path: './src'
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(ts|js)$/,
                loader: 'source-map-loader'
            },
            
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    configFileName: 'tsconfig.dev.json'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map'
}