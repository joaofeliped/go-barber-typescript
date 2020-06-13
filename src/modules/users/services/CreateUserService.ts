import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({ name, email, password }: IRequest): Promise<User> {
    const checkEmailAlreadyUsed = await this.usersRepository.findByEmail(email);

    if (checkEmailAlreadyUsed) {
      throw new AppError('Email already used.');
    }

    const passwordHashed = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: passwordHashed,
    });

    return user;
  }
}

export default CreateUserService;
