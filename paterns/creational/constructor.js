class Car {
  constructor(type, brand) {
    this.type = type
    this.brand = brand
  }

  getInfo() {
    return `Car type: ${this.type}, brand: ${this.brand}`
  }
}

const rr = new Car('4x4', 'RangeRover')
console.log(rr.getInfo())