interface IError {
  name: string
  code: string | number
  message: string
  errorDetails?: string
}

export default IError
