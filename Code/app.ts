require('dotenv').config()

import Server from './models/server.model'

const server = new Server()
server.listen()