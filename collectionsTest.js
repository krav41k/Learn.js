// const collection = new Map()
// collection.set(342, 'First element')
// collection.set(45, 'Second element')

// console.log(collection.get())

// const collection = new Map([
//   [0, {type: 'pistol', objectID: 'test1'}]
// ])

// const test = collection.get(0)

// console.log(test.type)

// const weaponsList = new Set([
//   {itemId: 'weapon_pistol', products: 5, price: 100, canBuy: true},
//   {itemId: 'weapon_pisto150', products: 6, price: 120, canBuy: true},
//   {itemId: 'weapon_revolver', products: 7, price: 140, canBuy: true},
//   {itemId: 'weapon_ceramicpistol', products: 8, price: 160, canBuy: true},
// ]);

// weaponsList.forEach((obj) => {
//   console.log(obj.itemId, obj.products, obj.price, obj.canBuy)
// })

// const weaponsList = new Map([
//   {itemId: 'weapon_pistol', products: 5, price: 100, canBuy: true},
//   {itemId: 'weapon_pisto150', products: 6, price: 120, canBuy: true},
//   {itemId: 'weapon_revolver', products: 7, price: 140, canBuy: true},
//   {itemId: 'weapon_ceramicpistol', products: 8, price: 160, canBuy: true},
// ]);

// const goodsList = {
//     weapons: [{
//       name: 'weapon1'
//     },
//     {
//       name: 'weapon2'
//     }
//     ],
//     bullets: [{
//       name: 'bullet1'
//     }]
// }

// function getWeapons() {
//   return goodsList.weapons
// }

// for (const {name} of getWeapons()) {
//   console.log(name)
// }


// function topFunc() {
// for (let i = 0; i<5; i++) console.log(i)

// }

// console.log(topFunc())  

// const markupsList = {
//     weapons: {
//       coldWeapons: 'Number',
//       pistols: 'Number',
//       subMdachineGuns: 'Number',
//       shotguns: 'Number',
//       assaultRifels: 'Number',
//       lightMachineGuns: 'Number',
//       sniperRifles: 'Number',
//       heavyWeapons: 'Number',
//       throwingWeapons: 'Number',
//       weaponKit: 'Number',
//       other: 'Number'
//     },
//     bullets: {
//       pistolBullets: 'Number',
//       shotgunBullets: 'Number',
//       rifleBullets: 'Number',
//       sniperBullets: 'Number'
//     },
//     clothes: {
//       armors: 'Number',
//       specialClothes: 'Number'
//     }
// }

// const type = ['weapons', 'pistols']

// console.log(markupsList[type[0]])
// console.log(markupsList["weapons"][type[1]])
// console.log(type[1])

let counter = 0

for (let i = 1; i<5; i++) {
  counter += 1;
}

console.log(counter)