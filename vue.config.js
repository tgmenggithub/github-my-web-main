const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
})
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
module.exports = {
    lintOnSave: false,
    productionSourceMap: false,
    configureWebpack: (config) => {
        // 为生产环境修改配置
        config.mode = 'production'
        // 将每个依赖包打包成单独的js文件
        let optimization = {
            minimize: true,
            minimizer: [new TerserPlugin({
                parallel: true,
                terserOptions: {
                    warnings: false,
                    output: {
                        // 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
                        beautify: false,
                        // 是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
                        comments: false
                    },
                    compress: {
                        drop_console: true,
                        drop_debugger: false,
                        // 是否内嵌虽然已经定义了，但是只用到一次的变量，比如将 var x = 1; y = x, 转换成 y = 5, 默认为不转换，为了达到更好的压缩效果，可以设置为false
                        collapse_vars: false,
                        // 是否提取出现了多次但是没有定义成变量去引用的静态值，比如将 x = 'xxx'; y = 'xxx'  转换成var a = 'xxxx'; x = a; y = a; 默认为不转换，为了达到更好的压缩效果，可以设置为false
                        reduce_vars: true,
                        pure_funcs: ['console.log']
                    },
                },
            }), new CssMinimizerPlugin()],
        }
        Object.assign(config, {
            optimization
        })
    }
}