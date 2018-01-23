//做饭->买菜
let a='';
function buy(callback) {
    setTimeout(()=>{
        let a='蘑菇';
        callback(a)
    },4000)
}
buy(function cookie(val) {
    console.log(val);
    console.log(1);
});//回调函数 是讲后续的处理逻辑传入到当前要做的事，事情做好后调用此函数

//promise解决回调问题的
// 三个状态 成功态  失败态 等待

