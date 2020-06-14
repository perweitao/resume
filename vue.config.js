'use strict'
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = 'vue Element Admin' // page title

const port = 9527 // dev port

module.exports = {
    publicPath: './',
    outputDir: 'resume',
    assetsDir: 'static',
    productionSourceMap: false,
    configureWebpack: {
        name: name,
        resolve: {
            alias: {
                '@': resolve('src')
            }
        }
    },
    chainWebpack(config) {

        // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}
