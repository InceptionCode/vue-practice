import * as express from 'express';

import ContactsRepository from '../repository/contactsRepository'

export const register = (app: express.Application): void => {
  // const oidc = app.locals.oidc;

  // define a route handler for the default home page
  app.get('/', async (req: express.Request, res: express.Response) => {
    res.send('Welcome To Vuex Blackbook')
  })

  app.get('/contacts/:userid', async (req: express.Request, res: express.Response) => {
    const userId = req.params.userid
    const favoriteQuery = req.query.favorite as string
    const favorite = favoriteQuery === 'true'

    const contacts = await ContactsRepository.getContacts(favorite, userId);
    res.send(contacts);
  });
};