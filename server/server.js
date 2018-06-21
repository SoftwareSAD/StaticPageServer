import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import api from './api'
import bodyParser from 'body-parser'

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const app = express()
app.set('port', port)
app.use(bodyParser.json())
app.use('/api', api)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()
