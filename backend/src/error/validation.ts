import type IError from '../interfaces/IError'

export default class ValidationError implements IError {
  public code = '400'
  public message = 'Not found'
  public errorDetails: string | null

  constructor(message: string, ErrorDetails: string = null) {
    this.message = message
    this.errorDetails = ErrorDetails
  }
}
