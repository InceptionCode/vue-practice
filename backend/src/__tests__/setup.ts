import { Firestore } from '@google-cloud/firestore'

import IUser from '../../../common/interfaces/IUser'
import { IContact } from '../../../common/interfaces/IContacts'

type resetOptions = {
  contact: IContact
}

const firestore = new Firestore()
const testId = process.env.DB_TEST_ID
const env = process.env.NODE_ENV

const rootDoc = firestore.doc(`${env}/testuser_${testId}`);
const contactsDoc = firestore.doc(`${env}/contacts_${testId}`)
const initialRootDoc: IUser = {
  email: 'fake_tester@test.com',
  id: testId,
  number: '123-456-7891',
  userId: `testuser_${testId}`,
  username: 'test'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const resetDB = async (options?: resetOptions): Promise<boolean> => {
  try {
    // set to initial
    await rootDoc.set(initialRootDoc)
    // remove contacts completely & re add the contacts document.
    await contactsDoc.delete()
    console.log('delete worked')
    await contactsDoc.set({})
    console.log('rewrite worked')
    return Promise.resolve(true)
  } catch (e) {
    console.log(e)
    return Promise.reject(false)
  }


}

// afterEach(async () => {
//   const isReset = await resetDB()
//   isReset ? console.log(`reset DB: ${isReset}`) : console.error(`reset error, reset: ${isReset}`)
// })

afterAll((done: jest.DoneCallback) => {
  delete require.cache[require.resolve( '../index' )]
  done()
})

