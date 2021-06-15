import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import Person from '../../models/Person';

import AppError from '../../errors/AppError';

interface Request {
  email: string;
  password: string;
  name: string;
}

class CreatePersonService {
  public async execute({ email, name, password }: Request): Promise<Person> {
    const personRepository = getRepository(Person);

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
    
    delete person.hashed_password;
    
    return person;
  }
}

export default new CreatePersonService();
