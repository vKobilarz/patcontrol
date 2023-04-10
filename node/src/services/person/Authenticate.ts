import { getRepository } from 'typeorm';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth.config';

import Person from '../../models/Person';

import AppError from '../../errors/AppError';

interface Request {
  email: string;
  password: string;
}

interface Response {
  person: Person;
  token: string;
}

class AuthenticatePersonService {
  public async execute({ email, password }: Request): Promise<Response> {
    const personRepository = getRepository(Person);

    const person = await personRepository.findOne({ where: { email } });

    if (!person) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    if (!password) {
      throw new AppError('Password not provided', 401);
    }

    if (!person.hashed_password) {
      throw new AppError('User does not have a password', 401);
    }

    await hash(password, 8);
    const passwordMatched = await compare(password, person.hashed_password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: person.id,
      expiresIn,
    });

    delete person.hashed_password;

    return { person, token };
  }
}

export default new AuthenticatePersonService();
