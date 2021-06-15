import { hash } from 'bcryptjs';

import personRepository from '../../repository/personRepository';

import Person from '../../models/Person';

import AppError from '../../errors/AppError';

interface Request {
  email: string;
  password: string;
  name: string;
}

class CreatePersonService {
  public async execute({ email, name, password }: Request): Promise<Person> {
    const checkPersonExists = await personRepository.findOne({
      where: { email },
    });

    if (checkPersonExists) {
      throw new AppError('Email address already in use.');
    }

    const hashedPassword = await hash(password, 8);

    const person = personRepository.create({
      email,
      name,
      hashed_password: hashedPassword,
      is_admin: false,
    });

    await personRepository.save(person);

    return person;
  }
}

export default new CreatePersonService();
