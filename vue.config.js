module.exports = {
    configureWebpack: {
        module: {
           rules: [
             {
               resourceQuery: /blockType=code/,
               loader: require.resolve('./loaders/code.js')
             }
            ]
        }
    }
}