const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const production = process.env.NODE_ENV === 'production';

module.exports = {
    chainWebpack: config => {
        !production && config.module
            .rule('js-source-maps')
            .test(/\.js$/)
            .enforce('pre')
            .use('source-map-loader')
            .loader('source-map-loader')
            .end()
    },
    configureWebpack: {
        devtool: !production ? "source-map" : false,
        plugins: [
            ...(production ? [new WorkboxPlugin.GenerateSW({
                clientsClaim: true,
                skipWaiting: true
            })] : []),
            new WebpackPwaManifest({
                name: 'Rete.js documentation',
                short_name: 'Rete.js',
                background_color: '#ffffff',
                icons: [
                  {
                    src: path.resolve('src/assets/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                  }
                ]
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