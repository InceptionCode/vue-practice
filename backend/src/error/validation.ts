import type IError from '../interfaces/IError'

export default class ValidationError implements IError {
  public Code = '400'
  public Message = 'Not found'
  public ErrorDetails: string | null

  constructor(message: string, ErrorDetails: string = null) {
    this.Message = message
    this.ErrorDetails = ErrorDetails
  }
}
