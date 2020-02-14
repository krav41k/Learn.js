class OldCalc {
  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return t1 + t2
      case 'sub': return t1 - t2
    }
  }
}

class NewCalc {
  add(t1, t2) {
    return t1 + t2
  }

  sub(t1, t2) {
    return t1 - t2
  }
}

class CalcAdapter {
  constructor() {
    this.calc = new NewCalc()
  }

  operations(t1, t2, operation) {
    switch (operation) {
      case 'add': return this.calc.add(t1, t2)
      case 'sub': return this.calc.sub(t1, t2)
      default: return NaN
    }
  }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operations(1, 10, 'add'))

const adapter = new CalcAdapter()
console.log(adapter.operations(1, 10, 'add'))