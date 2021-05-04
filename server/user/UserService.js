const fs = require('fs')
const { writeFile } = require('fs/promises')
const { Subject } = require('rxjs')

class UserService {
  constructor() {
    let users = []
    try {
      users = require('./users.json')

    } catch (err) {
      fs.writeFileSync('./users.json', JSON.stringify(users))
    }

    this.users = users
    this.subject = new Subject()
  }

  subscribe(observer) {
    this.subject.subscribe(observer)
  }

  getUsers() {
    return this.users
  }

  async addUser(user) {
    const exist = this.users.find(user => user.email)
    if (exist) {
      return false
    }

    this.users.push(user)

    await this.sync()

    return true
  }

  async login(email, password) {
    const user = this.users.find(user => user.email === email && user.password === password)

    if (!user) {
      return [null, false]
    }

    this.users.forEach(user => {
      if (user.email !== email) {
        return
      }

      user.isLogin = true
    })

    await this.sync()

    return [user, true]
  }

  async logout(id) {
    this.users.forEach(user => {
      if (user.id !== id) {
        return
      }

      user.isLogin = false
    })

    await this.sync()

    return true
  }

  async sync() {
    await this.write()

    this.users = require('./users.json')

    this.subject.next(this.users)
  }

  async write() {
    return writeFile('./users.json', JSON.stringify(this.users))
  }
}

module.exports = new UserService()
