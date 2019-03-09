const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new WorkboxPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true
            })
        ],
        module: {
            rules: [{
                resourceQuery: /blockType=code/,
                loader: require.resolve('./loaders/code.js')
            }]
        }
    }
}