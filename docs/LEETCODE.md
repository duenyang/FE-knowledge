# leetCode算法题目加答案

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