import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import authConfig from '../../config/auth.config';

import Person from '../../models/Person';

import AppError from '../../errors/AppError';

interface Request {
  name: string;
  password: string;
}

interface Response {
  person: Person;
  token: string;
}

class AuthenticatePersonService {
  public async execute({ name, password }: Request): Promise<Response> {
    const personRepository = getRepository(Person);

    const person = await personRepository.findOne({ where: { name } });

    if (!person) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    if (!password) {
      throw new AppError('Password not provided', 401);
    }

    const passwordMatched = await compare(password, person.hashed_password);

    if (!passwordMatched) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      subject: person.id,
      expiresIn,
    });

    return { person, token };
  }
}

export default new AuthenticatePersonService();
