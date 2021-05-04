const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const multer = require('multer')
const upload = multer({ dest: './server/images' })
const app = express()
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server)

const UserService = require('./server/user/UserService')

app.post('/api/login', jsonParser, async (req, res) => {
  const { email, password } = req.body

  const [user, ok] = await UserService.login(email, password)
  if (! ok) {
    res.status(404).end()
    return
  }

  res.json({
    error: null,
    data: {
      user,
    }
  })
})

app.post('/api/join', upload.any(), async (req, res) => {
  const file = req.files[0]
  const user = req.body
  const result = await UserService.addUser({
    ...user,
    isLogin: false,
    profileSrc: file?.filename,
  })

  if (!result) {
    res.status(400).end()
    return
  }

  res.status(201).end()
})

io.on('connection', socket => {
  initUsers(socket)
  handleChangeUsers(socket)
})

function initUsers(socket) {
  const users = UserService.getUsers()

  socket.emit('set users', users)
}

function handleChangeUsers(socket) {
  UserService.subscribe({
    next(users) {
      socket.emit('set users', users)
    },
  })
}

server.listen(8080, () => {
  console.log('listening on *:8080')
})
