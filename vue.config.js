module.exports = {
    // outputDir: process.env.outputDir,
    devServer: {
        host:'0.0.0.0',
        port: 8888,
        open: true,//在服务器启动时自动在浏览器中打开应用程序
        proxy: {
            '/api': {
                target: 'http://chenyu.chuxuankq.top:39992',   //代理接口
                ws: true,
                changeOrigin: true,//跨域
                pathRewrite: { 
                    '^/api': ''
                 }
            },
        }
    },
}
