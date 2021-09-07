import { logger } from './logger'

export default class Routes {
  io
  constructor() {}

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
    logger.info('get')
    res.end()
  }

  handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const choosen = this[req.method.toLowerCase()] || this.defaultRoute

    return choosen.apply(this, [req, res])
  }
}