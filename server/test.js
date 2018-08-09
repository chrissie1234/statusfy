const path = require('path')

const loadConfig = require('../lib/config/load')
const createServer = require('./server')

const sourceDir = path.join(__dirname, '..', 'demo')
const siteConfig = loadConfig(sourceDir)
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

async function start () {
  await createServer(siteConfig, null, host, port)
}
start()
