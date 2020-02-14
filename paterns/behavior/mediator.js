class User {
  constructor(name) {
    this.name = name
    this.room = null
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  reveice(message, from) {
    console.log(`${from.name} => ${this.name}: ${message} `)
  }
}

class Room {
  constructor() {
    this.users = []
  }

  register(user) {
    if (this.users.find(m => m === user)) {
      return console.log('User is already registered')
    } else {
      this.users.push(user)
      user.room = this
    }
  }

  send(message, from, to) {
    if (to) {
      to.reveice(message, from)
    } else {
      Object.keys(this.users).forEach( key => {
        if (this.users[key] !== from) {
          this.users[key].reveice(message, from)
        }
      })
    }
  }
}

const room306 = new Room()

const danyil = new User('Danyil')
const vika = new User('Vika')
const alex = new User('Alex')

room306.register(danyil)
room306.register(vika)
room306.register(alex)

danyil.send('Привет Вика!', vika)
vika.send('Привет', danyil)
alex.send('Здарова щёглы')