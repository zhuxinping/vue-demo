/**
 * Created by ZXP on 2018/1/14.
 */
let str=require('./a.js');//node写法后台写法
import xxx from './b.js';//前台写法
console.log(str);
console.log(xxx);
let a=b=>c=>d=>b+c+d;
a(1)(2)(3);
let obj={school:'zfpx'};
let obj1={age:8};
let newObj={...obj,...obj1};//es7语法
console.log(newObj);
import './index.css';//引入css
import './style.less';//引入less
import page from './avtar.png';//page是打包后图片路径
console.log(page);
let img=new Image();
img.src=page;

