/* 
    函数名:setCookie
    功能:可以设置指定过期时间的cookie
    参数:
        key:要设置的cookie的键
        value:要设置的cookie的值
        expires:几天以后如果,如传入的是1,表示1天以后过期

*/

function setCookie(key,value,expires){
     //需要一个时间对象
      var time=new Date();
    //   /设置指定的时间给时间对象
      time.setTime(time.getTime()-8*60*60*1000+expires*24*60*60*1000);
      //设置cookie
      document.cookie=`${key}=${value};expires=${time}`;
}


/* 
    函数名:removeCookie
    功能:可以删除指定的cookie
    参数:
        key:要删除cookie的键

*/
function removeCookie(key){
     //不能删除cookie,只能设置cookie过期
    setCookie(key,1,-1);
}


/* 
    函数名:getCookie
    功能:可以获取指定条目的cookie值,比如:cookie有两条,分别是a=23;b=45,我可以指定获取a或者是b的值
    参数:
        key:要获取的cookie的键   
    返回值:
        指定的cookie的值

*/

function getCookie(key){
     //先要当前域名下所有的cookie内容
    var str=document.cookie;
     //用"; "把str分割成数组
    var arr=str.split("; ");
    console.log(arr);

    for(var i=0;i<arr.length;i++){
        //arr里面的每一个数组的第0项都是键,第1项都是值
        var currentS=arr[i];
        //console.log(currentS);
      var currentSArr=currentS.split("=");
      if(key==currentSArr[0]){
           //如果遍历到的键和传入的key相等,说明就是我要找的
          return currentSArr[1];
      }
    }
    
}