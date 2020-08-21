import { Action } from 'routing-controllers'
import { UserRepository } from '@repositories/user.repository';
import { Container } from 'typedi';

export const AuthorizeMiddleware = async ( action: Action ) => {
  const token = action.request.headers.authorization.split('Bearer ');

  const userRepository = Container.get(UserRepository);
  const id = 123

  try {
    return !!userRepository.findOneByIdOrFail(id);
  } catch ( error ) {
    return false
  }
}
