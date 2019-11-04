const utils=require('./utils')

// 参考文章：https://www.jianshu.com/p/04e436cf75ba

module.exports={
    // 入口
    entry: {
        app: "./src/index" 
    },
    // 出口
    output: {
        path : utils.resolve("../dist"),
        filename: "js/[name].[hash].js",
        publicPath: "/" // 打包后的资源的访问路径前缀
    },
    // 模块
    module:{

    },
}