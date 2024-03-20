import { User } from '../user'

export class Profile {
  id: string

  firstName?: string

  lastName?: string

  phoneNumber?: string

  userId: string

  user?: User

  dateCreated: string

  dateDeleted: string

  dateUpdated: string
}
