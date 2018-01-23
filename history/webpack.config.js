/**
 * Created by ZXP on 2018/1/14.
 */
//webpack必须采用common.js写法
let path=require('path');//专门处理路径用的
//path.resolve('./dist');//以当前路径解析出一个绝对路径
module.exports={
    entry:{
        main:'./src/main.js',
        main1:'./src/main.js'
    },
    //打包的入口文件,webpack会自动查找相关依赖进行打包
    output:{
        filename:'[name].js',//打包后的名字
        path:path.resolve('./dist')//必须是一个绝对路径
    }
};