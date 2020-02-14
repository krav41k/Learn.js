const car = {
  color: 'red',

  init() {
    console.log(`Машина  ${this.color}, номера ${this.numbers}`)
  }
}

const myCar = Object.create(car, {
  numbers: {
    value: '007 CH'
  }
})

console.log(myCar.__proto__ === car)

myCar.init()