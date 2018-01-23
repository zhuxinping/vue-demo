/*
$.ajax({
  url:'',
  data:{},
  type:'get',
  dataType:'json',
  success
});*/

function ajax({url='xx',type='get',dataType='json'}) {
    return new Promise((resolve,reject)=>{
        let xhr=new XMLHttpRequest();
        xhr.open(type,url,true);
        xhr.responseType=dataType;
        xhr.onload=function () {//xhr.readState=4 xhr.status=200
            if(xhr.status==200){
                resolve(xhr.response);//成功调用的方法
            }else{
                reject('not found');
            }
        };
        xhr.onerror=function (err) {//失败调用的方法
            reject(err);
        }
        xhr.send();
    })
}
/*
ajax({url:'./carts.json'}).then();*/
