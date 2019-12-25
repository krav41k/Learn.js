'use strict';

let arr = new Array( "Boing", "Super jet", "SpaceX" );
arr = [ 'reno', 'audi', 'bmw', 'toyota' ];
arr.pop();
arr.push('honda');
arr.shift();
arr.unshift('volkswagen');

//плохой перебор массива
// for (let key in arr){
//     alert(arr[key]);
// };

for (let key of arr) {
    alert(key);
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  let task1 = [ 'jazz', 'bluse' ];
  task1.push('rockenrol');
  task1[Math.ceil(task1.length/2-1)] = 'Classic';
  alert(task1[0]);
  task1.shift();
  task1.unshift('Rap','Reggi');
  alert(task1);

  //slice() для вставки и разрезагия масива
