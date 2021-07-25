import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as routes from './routes'
import ServerError from './error/error';
import IError from './interfaces/IError';

export const defaultAdmin = admin.initializeApp()
const env: string = process.env.ENVIRONMENT

console.info(`In ${env} environment`)

const isDev = env === 'development'
const isTesting = env === 'testing'

console.info('Defining server')

export const server = express()

server.use(cors({ origin: true }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

// Routes
routes.register(server)

// Error Middleware

server.use((err: IError | any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }
  // logic

  const statusCode = err.code || err.statusCode

  if (statusCode === 500) {
    res.status(statusCode).json(err)
  }

  if (statusCode === 404) {
    console.log(new ServerError(err, 'Non existing route', 404))
    res.status(statusCode).json(new ServerError(err, 'Non existing route', 404))
  }
});

// IN Dev only Remove when deploying
if (isDev) {
  server.listen(3000)
}

if (isTesting) {
  server.listen(3998)
}

exports.api = functions.runWith({ memory: '2GB', timeoutSeconds: 120 }).https.onRequest(server)
