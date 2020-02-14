// class MyIterator {
//   constructor(data) {
//     this.index = 0
//     this.data = data
//   }

//   [Symbol.iterator]() {
//     return {
//       next: () => {
//         if (this.index < this.data.length) {
//           return {
//             value: this.data[this.index++],
//             done: false
//           }
//         } else {
//           this.index = 0
//           return {
//             done: true,
//             value: void 0
//           }
//         }
//       }
//     }
//   }
// }

// functin* generator(collection) {
//   let index = 0

//   while (index < collection.length) {
//     yield collection[index++]
//   }
// }

// const iterator = new MyIterator(['This','is','iterator'])