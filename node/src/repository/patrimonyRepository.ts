import { getRepository } from 'typeorm';
import Patrimony from '../models/Patrimony';

const patrimonyRepository = getRepository(Patrimony);

export default patrimonyRepository;
