import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Container } from 'typedi'
import { BcryptService } from '@services/bcrypt.service';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number

  @Column()
  public firstName: string

  @Column()
  public lastName: string

  @Column()
  public fullName: string

  @Column()
  @Index()
  public email: string

  @Column()
  @Exclude()
  public password: string

  @CreateDateColumn()
  public createdAt: Date

  @UpdateDateColumn()
  public updatedAt: Date

  @BeforeInsert()
  public setFullName(): void {
    this.fullName = [this.firstName, this.lastName].join(' ')
  }

  @BeforeInsert()
  public async hashPassword( user: User ): Promise<void> {
    const bcryptService = Container.get(BcryptService)

    const salt = await bcryptService.genSalt()
    this.password = await bcryptService.hash(this.password, salt)
  }
}
