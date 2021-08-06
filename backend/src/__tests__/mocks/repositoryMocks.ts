import ContactsRepository from '../../repository/contactsRepository';

jest.mock('../../repository/contactsRepository')


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const MockContactsRepository = ContactsRepository as jest.MockedClass<typeof ContactsRepository>
