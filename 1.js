// var arr=[1,7,2,5,8,10]
// for(var i=1;i<arr.length;i++){
//     for(var j=0;j<arr.length-i;j++){
//         if(arr[j]<arr[j+1]){
//             var temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr);
// function paixu(arr) {
//   for (var i = 1; i < arr.length; i++) {
//     for (var j = 0; j < arr.length - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         var temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr
// }

// console.log(paixu([1,7,2,5,8,10]))

//自定义深度克隆
// function checkType(target){
//     return Object.prototype.toString.call(target).slice(8,-1)
// }



// function deepClone(target){
//     // 检测数据类型
//     const type=checkType(target)
//     // 定义一个容器
//     let result=null

//     if(type==="Object"){
//         result={}
//     }else if(type==="Array"){
//         result=[]
//     }else{
//         return target
//     }

//     for(const key in target){
//         const value=target[key]
//         result[key]=deepClone(value)
//     }

//     return result
// }

// const person = { name: "jack", children: [{ name: "huahua" }] };

// const newPerson = deepClone(person);

// newPerson.name = "rose";
// newPerson.children[0].name="weiwei"

// console.log(newPerson);
// console.log(person);
// var str = '12345678';
// let lstr = str.split('').reverse().join('')
// console.log(lstr)
const arr = [1, 2, 3, 4, 2, 3, 4, 3, 5, 6, 7];
const newArr = [...new Set(arr)];
console.log(newArr);

const set2 = [...new Set('ababbc')].join('')
console.log(set2); //abc
console.log(typeof set2);//string