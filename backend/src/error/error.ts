import type IError from '../interfaces/IError'

export default class ServerError implements IError {
  private static InternalServerError = 'Oops something went wrong on our end. Internal Server Error'

  public Code: string | number | null = '500'
  public Message: string
  public ErrorDetails: string | null

  constructor(error: Error, message: string = ServerError.InternalServerError, code: string | number = null) {
    this.Code = code
    this.Message = message
    this.ErrorDetails = `${error.name} ${error.message}`
  }
}
