import { EntityRepository, Repository } from 'typeorm';
import { User } from '@entities/user.entity';
import { Service as Injectable } from 'typedi'

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async createUser( user: User ): Promise<User> {
    const newUser = this.create(user)
    return this.save(newUser)
  }

  public async findOneByIdOrFail( id: number ): Promise<User> {
    return this.findOneOrFail(id)
  }

  public async findOneByEmailOrFail( email: string ): Promise<User> {
    return this.findOneOrFail({ email })
  }
}
