/**
 * Created by ZXP on 2018/1/14.
 */
let HtmlWebpackPlugin=require('html-webpack-plugin');
let path=require('path');
module.exports={
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve('./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,use:'babel-loader',exclude:/node_modules/
            },
            {
                test:/\.css$/,use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(jpg|png|gif|jepg)$/,use:'url-loader?limit=8192'
            },
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'},
            {test:/\.vue$/,use:'vue-loader'}

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}