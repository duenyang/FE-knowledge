# JavaScript面试知识点

[ES6](https://www.jianshu.com/p/ebfeb687eb70)

[Call和Apply](https://www.jianshu.com/p/594f77f0cfa7)

### js的数据类型

原始类型：
`Boolean` `Null` `Number` `String` `Undefined` `Symbol(es6)`

非原始类型：
`Object`

6中ajax方法：`get、post、delete、put、options、head`

```js
function ajaxRequest(type, url, data){
      var xmlhttp;
      if(window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new window.XMLHttpRequest();
      }else{// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMlHTTP");
      }
      if(type.toLocalCase() == "get"){//  get方法

        //  定义请求方式、请求地址以及是否异步，添加一个id避免使用缓存
        xmlhttp.open("GET", "test.php?_=" + new Date().getTime(), true);
        xmlhttp.send();

      }else{//  post方法，需要设置HTTP头，然后在send()方法中发送数据(send内的参数为string)

        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencode");
        xmlhttp.open("POST", "test.php", true);
        xmlhttp.send("fname=Bill&lname=Gates");

      }
      // xmlhttp.onreadystatechange=function(){
      //   if (xmlhttp.readyState==4 && xmlhttp.status==200){

      //     document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      //   }
      // }
      /* 关于(readyState):
          0: 请求未初始化
          1: 服务器连接已建立
          2: 请求已接收
          3: 请求处理中
          4: 请求已完成，且响应已就绪
         关于(status):
          200: "OK"
          404: 未找到页面
       */
      xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState == 4){
          if(xmlhttp.status == 200){
            console.log(xmlhttp.responseText);
          }
        }
      }
    }
```

bind

```js
Function.prototype.bind = function(context){
  var args = Array.prototype.slice(arguments, 1),
  F = function(){},
  self = this,
  bound = function(){
      var innerArgs = Array.prototype.slice.call(arguments);
      var finalArgs = args.concat(innerArgs);
      return self.apply((this instanceof F ? this : context), finalArgs);
  };

  F.prototype = self.prototype;
  bound.prototype = new F();
  retrun bound;
};
```



