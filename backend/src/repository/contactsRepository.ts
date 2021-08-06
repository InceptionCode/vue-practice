import IContactsRepository from '../interfaces/IContactsRepository'
import UserDto from '../../../common/dtos/UserDto'
import ContactsDto from '../../../common/dtos/ContactsDto'

import { grabIdFromUserId } from '../../../common/utils/stringUtils'

import { Firestore, QuerySnapshot, QueryDocumentSnapshot, DocumentSnapshot } from '@google-cloud/firestore'
import { defaultAdmin } from '../index'
import IUser from '../../../common/interfaces/IUser'
import {
  invalidUser,
  authInvalidUser,
  contactNotFound,
  invalidUserMessage
} from '../../../common/constants/errorConstants'
import { resolveDto } from '../utils/dtoUtils'
import ServerError from '../error/error';

const invalidUserError = { name: invalidUser, message: authInvalidUser };

const firestore = new Firestore()
const env: string = process.env.ENVIRONMENT


const ContactsRepository: IContactsRepository = {
  getUser: async (userId: string) => {
    const user: DocumentSnapshot<UserDto> = await firestore.doc(`${env}/${userId}`).get()

    if (!user.exists)
    {
      throw new ServerError(invalidUserError, invalidUserMessage)}

    return user.data()
  },
  getContacts: async (favorite: boolean, userId: string) => {
    try {
      const contacts: QuerySnapshot<ContactsDto> = await firestore.collection(`${env}/${userId}/contacts`)
        .where('favorite', '==', favorite)
        .get()
      return contacts.docs.map((contact: QueryDocumentSnapshot<ContactsDto>) => contact.data())
    }
    catch (err) {
      throw new ServerError(err, invalidUserMessage)
    }
  },
  getContact: async (userId: string, name: string) => {
    const id = grabIdFromUserId(userId)
    const contacts: DocumentSnapshot<ContactsDto> = await firestore.doc(`${env}/${userId}/contacts/contacts_${id}`).get()
    const contact = contacts.get(name.toLowerCase())

    if (contact === undefined) {
      throw new ServerError(invalidUserError, contactNotFound, 404)
    }

    return contact
  },
  updateUser: async ({ userId, username, email, number }: IUser) => {
    const id = grabIdFromUserId(userId)

    await defaultAdmin.auth().updateUser(id, {
      displayName: username
    })

    const userDoc = firestore.doc(`${env}/${userId}`)
    const user: IUser = { userId, username, id, email, number }

    if ((await userDoc.get()).exists) {
      await userDoc.delete()
    }

    userDoc.set(user)
    const userDto: UserDto = { user }

    return resolveDto(userDto, 'user')
  }
}

export default ContactsRepository
