export class ServerError extends Error {
  constructor () {
    super('Internal server error no expected, try again few seconds later')
  }
}
