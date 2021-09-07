import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { logger } from './logger'
import FileHelper from './fileHelper'

const __dirname = dirname(fileURLToPath(import.meta.url))
const defaultDownloadsFolder = resolve(__dirname, '../', 'downloads')

export default class Routes {
  io
  constructor(downloadsFolder = defaultDownloadsFolder) {
    this.downloadsFolder = downloadsFolder
    this.fileHelper = FileHelper
  }

  setSocketInstance(io) {
    this.io = io
  }

  async defaultRoute(_, res) {
    res.end('hello world')
  }

  async options(_, res) {
    res.writeHead(204)
    res.end()
  }

  async post(_, res) {
    logger.info('post')
    res.end()
  }

  async get(_, res) {
    const files = await this.fileHelper.getFilesStatus(this.downloadsFolder)
    
    res.writeHead(200)
    res.end(JSON.stringify(files))
  }

  handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const choosen = this[req.method.toLowerCase()] || this.defaultRoute

    return choosen.apply(this, [req, res])
  }
}