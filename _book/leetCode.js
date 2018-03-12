
// var a = [{id: 1, name: 'abc'}, {id: 2, name: 'cvf'}, {id: 5, name: 'edf'}, {id: 3, name: 'iop'}];

// var b = [{id: 3, name: 'abc'}, {id: 4, name: 'cvf'}, {id: 5, name: 'edf'}, {id: 6, name: 'iop'}];

// function arrayAnd(a, b) {
//     var obj = {}, arr = a.concat(b), resultArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         var key = arr[i].id.toString();
//         if (!obj[key]) {
//             obj[key] = true;
//             resultArr.push(arr[i])
//         }
//     }
//     return resultArr;
// }

// console.log(arrayAnd(a, b));

/* 题目的顺序是按照leetcodechina.com的题目顺序 */
/* 
  Remove Duplicates from Sorted Array

  给定一个有序数组， 你需要原地删除其中的重复内容， 使每个元素只出现一次, 并返回新的长度。

   不要另外定义一个数组， 您必须通过用 O(1) 额外内存原地修改输入的数组来做到这一点。

   给定数组: nums = [1, 1, 2],

   你的函数应该返回新长度 2, 并且原数组nums的前两个元素必须是1和2
   不需要理会新的数组长度后面的元素 
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//     var a = {},
//         b = [];
//     for (var i = 0; i < nums.length; i++) {
//         var key = nums[i].toString();
//         if (!a[key]) {
//             a[key] = true;
//             b.push(nums[i])
//         }
//     }
//     return b
// };
// var removeDuplicates = function (nums) {
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] == nums[i + 1]) {
    //         nums.splice(i, 1)
    //         i --;
    //     }
    // }
    // return nums
// };
// console.log(removeDuplicates([1, 1, 2]));
// var removeDuplicates = function (nums) {
//     nums.forEach((v, i) => {
//       if (nums[i] === nums[i + 1])
//         nums.splice(i, 1)
//     })
//     return nums
// };
// console.log(removeDuplicates([1, 1, 2]));

/*
  Best Time to Buy and Sell Stock II

  假设有一个数组，它的第 i 个元素是一个给定的股票在第 i 天的价格。

  设计一个算法来找到最大的利润。你可以完成尽可能多的交易（多次买卖股票）。

  然而，你不能同时参与多个交易（你必须在再次购买前出售股票）。
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     var a = 0;
//     for (var i = 0; i < prices.length - 1; i++) {
//       if (prices[i] < prices[i + 1]) {
//         a += (prices[i + 1] - prices[i])
//       }
//     }
//     return a;
// };
// console.log(maxProfit([1,3,5,3,6,2,7,9,3,5])) // 16 利润/差价

/*
  Rotate Array

  将包含 n 个元素的数组向右旋转 k 步。

  例如，如果  n = 7 ,  k = 3，给定数组  [1,2,3,4,5,6,7]  ，向右旋转后的结果为 [5,6,7,1,2,3,4]
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     return [].concat(nums.slice(k + 1), nums.slice(0, k + 1))
// };

// console.log(rotate([1,2,3,4,5,6,7], 3))
var rotate = function(nums, k) {
    var a = nums.slice(k + 1)
    nums.splice(k + 1)
    Array.prototype.unshift.apply(nums, a)
    nums.unshift(5,6,7)
};

rotate([1,2,3,4,5,6,7], 3)





























