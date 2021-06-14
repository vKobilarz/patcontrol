import { getRepository } from 'typeorm';
import Person from '../models/Person';

const personRepository = getRepository(Person);

export default personRepository;
