class juniorDevel {
  constructor(name) {
    this.name = name
    this.pay = 800
  }
}

class middleDevel {
  constructor(name) {
    this.name = name
    this.pay = 2500
  }
}

class siniorDevel {
  constructor(name) {
    this.name = name
    this.pay = 5500
  }
}

class DevManager {
  static list = {
    junior: juniorDevel,
    middle: middleDevel,
    sinior: siniorDevel
  }

  create(name, type = 'junior') {
    const DevPosition = DevManager.list[type] || DevManager.list.junior
    const developer = new DevPosition(name)


    developer.type = type
    developer.define = function() {
      console.log(`${this.name} (${this.type}: ${this.pay})`)
    }
    return developer
  }
}

const devManager = new DevManager()

const developers = [
  devManager.create('Danyil', 'junior'),
  devManager.create('Alex', 'middle'),
  devManager.create('Oleg', 'QA')
]

developers.forEach((devels) => {
  devels.define()
})