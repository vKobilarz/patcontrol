import { getRepository } from 'typeorm';
import Room from '../models/Room';

const roomRepository = getRepository(Room);

export default roomRepository;
