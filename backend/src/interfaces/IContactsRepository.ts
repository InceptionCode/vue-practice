// Types
import ContactsDto from '../../../common/dtos/ContactsDto'
import UserDto from '../../../common/dtos/UserDto'
import IUser from '../../../common/interfaces/IUser'


interface IContactsRepository {
  getContacts: (favorites: boolean, userId: string) => Promise<ContactsDto[]>
  getContact: (userId: string, name: string) => Promise<ContactsDto | undefined>
  getUser: (userId: string) => Promise<UserDto | undefined>,
  updateUser(user: IUser): Promise<UserDto | undefined>
}

export default IContactsRepository
