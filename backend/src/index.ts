import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import * as routes from './routes'
import ServerError from './error/error';

export const defaultAdmin = admin.initializeApp()
const env: string = process.env.ENVIRONMENT

console.info(`In ${env} environment`)

const isDev = env === 'dev'

console.info('Defining server')

const server = express()

server.use(cors({ origin: true }))
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use((err: any, req: any, res: any, next: any) => {
  // logic
    if (err.statusCode === '500') {
      next(new ServerError(err));
    }
  });

// Routes
routes.register(server)

// IN Dev only Remove when deploying
if (isDev) {
  server.listen(3000)
}

exports.api = functions.runWith({ memory: '2GB', timeoutSeconds: 120 }).https.onRequest(server)
