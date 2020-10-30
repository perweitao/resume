'use strict'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const name = '个人简历' // page title
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
}
