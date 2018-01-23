/**
 * Created by ZXP on 2018/1/14.
 */
//webpack必须采用common.js写法
let path=require('path');//专门处理路径用的
let HtmlWebpackPlugin=require('html-webpack-plugin');
//path.resolve('./dist');//以当前路径解析出一个绝对路径
module.exports={
    entry:'./src/main.js',
    //打包的入口文件,webpack会自动查找相关依赖进行打包
    output:{
        filename:'bundle.js',//打包后的名字
        path:path.resolve('./dist')//必须是一个绝对路径
    },
    //模块的解析规则
    //js匹配所有的js用babel-loader转义排除掉node_module
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},//use从右往左写
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//use从右往左写
           //小于8K的转化为base64
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',//使用模板
            filename:'login.html'//产出文件名字
        })
    ]
};