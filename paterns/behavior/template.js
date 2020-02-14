class Employee {
  constructor(name, salary) {
    this.name = name
    this.salary = salary
  }

  reponsibilities() {}

  work() {
    return `${this.name} - выполняет ${this.reponsibilities()}`
  }

  getPaid() {
    return `${this.name} имеер ЗП ${this.salary}`
  }
}

class Developer extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  reponsibilities() {
    return 'процесс создания программ'
  }
}

class Tester extends Employee {
  constructor(name, salary) {
    super(name, salary)
  }

  reponsibilities() {
    return 'процес тестирования'
  }
}

const dev = new Developer('Даниил', 1000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Леха', 300)
console.log(tester.getPaid())
console.log(tester.work())