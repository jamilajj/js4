"use strict";
// {
//     let inp = document.getElementById("input");
//     let btn = document.getElementById("btn");
   
//     let list = document.getElementById("list");
//     let todo = [];
//     function add() {
//         if ((inp.value != "") && (!todo.includes(inp.value)))
//             todo.push(inp.value);
//         inp.value = "";
//         let data = "";
//         for (let item of todo) {
//             data += `<li class=list-group-item>${item}    <button class="btn btn_del btn-danger ">delete</button></li>`
//         }
//         list.innerHTML = data;
//     }
   
   
//     btn.addEventListener("click", add);
//     del.addEventListener("click", ()=> {
//         todo.splice(item[i], 1)
//         list.innerHTML = data;
//     });

// }

// 


function nums(arr, n) {
    for (let i = 0; i < n; i++) {
      let nums = arr.slice(1,4);
      let numplus = nums=a+b+c
      arr.push(numplus);
    }

    return arr;
    
  }
  
  
  
  let arrNum = [0,1,2,3];
  let n = 6;
  let result = nums(arrNum, n);
  console.log(numPlus(arrNum,n));