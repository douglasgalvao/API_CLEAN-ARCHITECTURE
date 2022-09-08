import { HttpRequest, HttpResponse } from '../../protocols/http'
import { MissingParamError } from '../erros/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const riquiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of riquiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
    return httpRequest.body
  }
}
