export interface IContacts {
  contacts: IContact[]
}

export interface IContact {
  id?: string
  favorite: boolean
  name: string 
  email: string
  number: string
}