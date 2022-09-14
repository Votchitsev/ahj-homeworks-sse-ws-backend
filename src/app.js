import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

const users = []

function addUser (userName) {
  if (!users.includes(userName)) {
    users.push(userName)
    return true
  }

  return false
}

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const json = JSON.parse(data)
    switch (json.event) {
      case 'addUser': {
        const add = addUser(json.userName)
        let result

        if (!add) {
          result = false
        } else {
          result = true
        }

        ws.send(JSON.stringify({
          event: 'addUser',
          userName: json.userName,
          result
        }))
        break
      }
    }
  })
})
