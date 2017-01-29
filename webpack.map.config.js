module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'bundle.js',
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