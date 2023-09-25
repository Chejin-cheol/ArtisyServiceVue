const path = require('path')

module.exports = {
    productionSourceMap: false,
    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        }
    },
}
