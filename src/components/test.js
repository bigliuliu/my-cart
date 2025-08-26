// input: [1,2,3,[4,5,6,[7,8,[10,11]]],9]
// output: [1,2,3,4,5,6,7,8,10,11,9]
// let result = []
// function flattenArr(item){
//     item.forEach(element => {
//        if(Array.isArray(element)){
//        flattenArr(element)
//        }
//        else{
//             result.push(element)
//        }
//     });
//     return result
// }
// console.log(flattenArr([1,2,3,[4,5,6,[7,8,[10,11]]],9] ))
// Find sum of numbers without for loop
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(
//   arr.reduce(((sum, cur) => sum + cur),0),
// );
// 在 ===（严格相等） 的判断里：
// 基本类型（number、string、boolean、null、undefined、symbol、bigint） → 比较的是值本身。
// 引用类型（对象、数组、函数等） → 比较的是引用地址（内存指针），而不是对象里的内容。
// const a = { ab: { cd: { ef: true } } };
// const b = a; const c = { ...a };
// console.log(a === b);//true
//  console.log(a === c);//false
//  a.ab.cd.ef = false;
//  console.log(b.ab.cd.ef); //false
//  console.log(c.ab.cd.ef);  //false
// async function chart(v) {
//   console.log("start", v);
//   await console.log("middle", v);
//   console.log("end", v);
// }
// chart("first");
// chart("second");

// script start
// async start
// script end
// promise1
// async end
// promise2
// setTimeout
// console.log('script start');

// setTimeout(() => {
//   console.log('setTimeout'); // 宏任务
// }, 0);

// Promise.resolve().then(() => {
//   console.log('promise1'); // 微任务
// }).then(() => {
//   console.log('promise2'); // 微任务
// });

// async function asyncFunc() {
//   console.log('async start'); // 同步执行
//   await null;                // 将后续代码放入微任务队列
//   console.log('async end');  // 微任务
// }
// asyncFunc();

// console.log('script end');

//  ts te tp
// setTimeout(() => {
//     console.log('timeout start');
//     Promise.resolve().then(() => {
//       console.log('timeout promise');
//     });
//     console.log('timeout end');
//   }, 0);

// ss as se p1s aaa  p1np  p1tan s1s s1e pis mc s2is1
// console.log('script start'); // 同步，主宏任务执行

// setTimeout(() => {
//   console.log('setTimeout 1 start'); // 宏任务

//   Promise.resolve().then(() => {
//     console.log('promise in setTimeout'); // 宏任务里的微任务
//   });

//   console.log('setTimeout 1 end'); // 宏任务

//   setTimeout(() => {
//     console.log('setTimeout 2 inside setTimeout 1'); // 宏任务里的宏任务
//   }, 0);

// }, 0);

// Promise.resolve().then(() => {
//   console.log('promise 1 start'); // 微任务

//   Promise.resolve().then(() => {
//     console.log('promise 1 nested promise'); // 微任务里的微任务
//   });

// }).then(() => {
//   console.log('promise 1 then after nested'); // 微任务链中下一个then
// });

// async function asyncFunc() {
//   console.log('asyncFunc start'); // 同步

//   await null; // 等价于 await Promise.resolve(undefined)，后面代码放微任务队列

//   console.log('asyncFunc after await'); // 微任务
// }

// asyncFunc();

// console.log('script end'); // 同步，主宏任务执行

// // MutationObserver 示例（微任务）
// const div = document.createElement('div');
// const observer = new MutationObserver(() => {
//   console.log('MutationObserver callback'); // 微任务
// });
// observer.observe(div, { attributes: true });
// div.setAttribute('id', '1'); // 触发 MutationObserver 回调
// let cur = ''
// let obj ={}
//  function findLetter(str){
//     cur = str[0]
// for(let i=0;i<str.length; i++){
//     if(obj[str[i]]){
//         obj[str[i]]++
//         cur = obj[str[i]] >obj[cur] ? str[i] :cur
//     }
//     else{
//         obj[str[i]] = 1
//     }
// }
//     for(let item of str){
//         if(obj[item]){
//             obj[item]++
//             cur = obj[item]>obj[cur] ? item: cur
//         }else{
//             obj[item] =1
//         }
//     }
//     return obj
//  }
//  console.log(findLetter('success'),cur)
// const str ="hello world"
// 首字母大写
// const changeLetter = (str)=>{
//     const first =  str.charAt(0).toUpperCase()+ str.slice(1)
//     console.log(first,)
// }

// 判断是否包含字符串”llo“
// const changeLetter = (str)=>{
//     const first = str.includes("llo")
//     console.log(first)
// }
// changeLetter(str)
// 找出an 第一次出现的位置
// const str ="banana"
// const changeLetter = (str)=>{
//     const first = str.indexOf("an")
//     console.log(first)
// }
// changeLetter(str)

// 替换frontend -> backend
// const str ="frontend developer"
// const changeLetter = (str)=>{
//     const first = str.replace("frontend","backend")
//     console.log(first)
// }
// changeLetter(str)

// 去掉前后空格
// const str =" frontend developer "
// const changeLetter = (str)=>{
//     const first = str.trim()
//     console.log(first)
// }
// changeLetter(str)

// 拆分字符串
// const str ="123,456,789"
// const changeLetter = (str)=>{
//     const first = str.split(",")
//     console.log(first)
// }
// changeLetter(str)

//  取索引2-5
// const str ="abcdefg"
// const changeLetter = (str)=>{
//     const first = str.slice(2,5)
//     console.log(first)
// }
// changeLetter(str)

// 转换小写
// const str ="JKDFDFADF"
// const changeLetter = (str)=>{
//     const first = str.toLowerCase()
//     console.log(first)
// }
// changeLetter(str)

// 只保留第一个repeat str10.replace(/(repeat)\s+/g, "")
// const str ="repeat repeat repeat";
// const changeLetter = (str)=>{
//     const first = str.replace(/(repeat)\s+/g,"")
//     console.log(first)
// }
// changeLetter(str)

// 字符串反转
// const str ="JKDFDFADF"
// const changeLetter = (str)=>{
//     const first = str.split("").reverse().join("")
//     console.log(first)
// }
// changeLetter(str)

// 根据邮箱提取用户名
// const str = "user@example.com";
// const changeLetter = (str) => {
//   const [user, domain] = str.split("@");
//   console.log(user, domain);
// };
// changeLetter(str);

// 1. 每个数字加 1
let arr1 = [1, 2, 3, 4].map(num => num + 1); 
console.log(arr1); // [2, 3, 4, 5]

// 2. 筛选大于 20 的数字
let arr2 = [10, 25, 30, 45].filter(num => num > 20);
console.log(arr2); // [25, 30, 45]

// 3. 计算总和
let arr3 = [1, 2, 3, 4, 5].reduce((sum, num) => sum + num, 0);
console.log(arr3); // 15

// 4. 找第一个大于 25 的数
let arr4 = [10, 20, 30, 40].find(num => num > 25);
console.log(arr4); // 30

// 5. 判断是否全是偶数
let arr5 = [2, 4, 6, 8].every(num => num % 2 === 0);
console.log(arr5); // true

// 6. 转换为大写
let arr6 = ["a", "b", "c"].map(ch => ch.toUpperCase());
console.log(arr6); // ["A", "B", "C"]

// 7. 是否存在大于 100 的数
let arr7 = [5, 12, 8, 130, 44].some(num => num > 100);
console.log(arr7); // true

// 8. 展开数组
let arr8 = [1, [2, 3], [4, [5]]].flat(2);
console.log(arr8); // [1, 2, 3, 4, 5]

// 9. 升序排序
let arr9 = [3, 1, 4, 2].sort((a, b) => a - b);
console.log(arr9); // [1, 2, 3, 4]

// 10. 拼接成字符串
let arr10 = ["apple", "banana", "pear"].join("-");
console.log(arr10); // "apple-banana-pear"

// 11. 平方数组
let arr11 = [1, 2, 3, 4, 5].map(num => num * num);
console.log(arr11); // [1, 4, 9, 16, 25]

// 12. 提取 name
let arr12 = [{id:1, name:"A"}, {id:2, name:"B"}].map(obj => obj.name);
console.log(arr12); // ["A", "B"]

// 13. 统计出现次数
let arr13 = [1, 2, 2, 3, 3, 3].reduce((count, num) => {
  count[num] = (count[num] || 0) + 1;
  return count;
}, {});
console.log(arr13); // {1:1, 2:2, 3:3}

// 14. 过滤假值
let arr14 = [null, 0, "", undefined, 5, "hello"].filter(Boolean);
console.log(arr14); // [5, "hello"]

// 15. 平均值
let arr15 = [10, 20, 30, 40];
let avg = arr15.reduce((sum, num) => sum + num, 0) / arr15.length;
console.log(avg); // 25

// shift 删除数组的第一位，unshift，给数组的第一位添加值
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); // [1, 2, 3, 4]

let colors = ["red", "green", "blue"];
colors.shift();
console.log(colors); // ["green", "blue"]

// slice(start, end)
// 作用：截取数组的一部分，返回一个新数组（不会改变原数组）。
// 特点：不修改原数组，索引从 start 到 end-1。


let arr = [1, 2, 3, 4, 5];
let result = arr.slice(1, 3);
console.log(result); // [2, 3]
console.log(arr);    // [1, 2, 3, 4, 5] (没变)

// ✅ splice(start, deleteCount, ...items)
// 作用：从数组中删除、替换或添加元素，返回被删除的元素数组。
// 特点：会修改原数组。

let arr = [1, 2, 3, 4, 5];
let deleted = arr.splice(1, 2, 99, 100); 
console.log(deleted); // [2, 3]
console.log(arr);     // [1, 99, 100, 4, 5]

// 2. 字符串中的 slice
// ✅ 字符串有 slice
// 作用：截取字符串，返回新字符串（不会改变原字符串）。


let str = "Hello World";
console.log(str.slice(0, 5)); // "Hello"
console.log(str);             // "Hello World" (没变)

// ❌ 字符串没有 splice