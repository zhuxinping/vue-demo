//resolve成功
//reject失败
//promise实例就有一个then方法,该方法有两个参数
let p=new Promise((resolve,reject)=>{
    setTimeout(function () {
        let a='蘑菇';
        //resolve(a);
        reject(a);
    },2000)
});
p.then((data)=>{console.log(data)},(err)=>{console.log('err')});
