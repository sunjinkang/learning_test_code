/*
 * @Author: sunjinkang 2060037942@qq.com
 * @Date: 2022-07-19 14:52:22
 * @LastEditors: sunjinkang 2060037942@qq.com
 * @LastEditTime: 2022-07-19 15:25:48
 * @FilePath: \learning_test_code\about_js_transform\index.js
 * @Description: 本文件是关于js中的隐式转换进行测试的文件
 */
// 公共处理
var displayContent = document.getElementById('content');

// 举例1
var test1 = ['5' - 3, '5' + 3];
// console.log(test1);
// displayContent.innerText = JSON.stringify(test1);
// [2,"53"]

// 举例2
var test2 = 'foo' + +'foo';
// console.log(test2);
// displayContent.innerText = JSON.stringify(test2);
// "fooNaN"

// 举例3
var x = 3;
var test3 = ['5' + x - x, '5' - x + x];
console.log(test3);
displayContent.innerText = JSON.stringify(test3);
// [50,5]
