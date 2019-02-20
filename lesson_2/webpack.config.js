module.exports = {
    
    entry: './src/index.jsx',
    output: {
        filename: 'build.js',
        path: __dirname + '/public',
        library: 'home'
    },
    
    resolve: {
        extensions: ['.js', '.jsx']
    },
    
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          }
        ]
    }
};