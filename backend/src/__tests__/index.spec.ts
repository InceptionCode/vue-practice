import request from 'supertest';

import { server } from '../index'
import ServerError from '../error/error';

import ContactsRepository from '../repository/contactsRepository';

const internalServerError = new ServerError(new Error('bad request man'));
const mockGetContacts: jest.MockedFunction<typeof ContactsRepository.getContacts> =
    jest.fn().mockRejectedValue(internalServerError)

ContactsRepository.getContacts = mockGetContacts

describe('Testing server hookup', () => {
  it('should connect to server ', async () => {
    const res = await request(server).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Welcome To Vuex Blackbook')
  })

  it('should 404 not a route', async () => {
    const route = '/404';
    const res = await request(server).get(route)

    expect(res.statusCode).toEqual(404)
    expect(res.text).toContain(`Cannot GET ${route}`)
  })

  it('should catch 500 error and return custom "InternalServerError"', async () => {
    const res = await request(server).get('/contacts/234')

    expect(res.statusCode).toEqual(500)
    expect(res.body).toEqual(internalServerError)
  })
})
