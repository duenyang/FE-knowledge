# leetCode算法题目加答案

你也可以去试试[leetCode(中国)](https://leetcodechina.com/)的算法题

## 在算法题之前，先来几个经典的算法

### 菲波那切数列

```js
//1，1，2，3，5，8，13，21这个数列 斐波那契 数列
//得到第9项是几？
/* 递归方法 */
function Fibonacci(index){
    if (index < 0) {
        return 0;
    }
    if (index <= 2) {
        return 1;
    }
    return Fibonacci(index - 1) + Fibonacci(index - 2);
}
console.log(Fibonacci(-1));//0
console.log(Fibonacci(7));//13
console.log(Fibonacci(8));//21

/* 数组计算方法 */
/* [1,1,2] 3个数得出第4个数3需要循环2次*/
/* [1,1,2,3] 4个数得出第5个数5需要循环3次*/
/* n个数得出第n + 1个数需要循环n - 2次*/
function Fibonacci(index){

    if(index < 0) return 0
    if(index <= 2) return 1

    var firstnum = 1; //第一个值
    var secondnum = 1;//第二个值
    var result = 0;//结果
    for (var i = 0; i < index-2; i++) {
        thirdnumResult = firstnum+secondnum;  

        firstnum = secondnum;//   使第一个数变为原来的第二个数
        secondnum = result;// 使第二个数变为得到的结果
    }
   return result;
}
console.log(Fibonacci(-1));//0
console.log(Fibonacci(7));//13
console.log(Fibonacci(8));//21
```

---
# 算法题及答案
## 数组部分

1. 数组去重

```js
var removeDuplicates = function(nums) {
    var a = {}, b = [];
    for(var i = 0; i < nums.length; i ++){
        var key = nums[i].toString();
        if(!a[key]){
          a[key] = true;
          b.push(nums[i])
         }
    }
    return b
};
//removeDuplicates([1,2,1,2,4]) => [1,2,4]

/* 在浏览器上是可以实现的，但在leetCode 运行平台上实现不了，不知什么原因*/
```
2. 