import type IError from '../interfaces/IError'

export default class ServerError implements IError {
  public static InternalServerError = 'Oops something went wrong on our end. Internal Server Error'

  public code: number | string = 500
  public message: string
  public errorDetails: string | null

  constructor(error: Error, message: string = ServerError.InternalServerError, code: number | string = 500) {
    this.code = code
    this.message = message
    this.errorDetails = `${error.name || ''} ${error.message}`
  }
}
