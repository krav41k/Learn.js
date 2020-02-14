class Foot {
  constructor(model, price) {
    this.model = model
    this.price = price
  }
}

class FootShop{
  constructor() {
    this.foots = []
  }

  buy(model, price) {
    const candidate = this.getFoot(model)
    if (candidate) return candidate

    const newFoot = new Foot(model, price)
    this.foots.push(newFoot);
    return newFoot
  }

  getFoot(model) {
    return this.foots.find(foot => foot.model === model)
  }
}

const newFootShop = new FootShop()

console.log(newFootShop.buy('iniky', 130))
console.log(newFootShop.buy('PD100', 90))
console.log(newFootShop.buy('iniky', 200))