import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import Room from '../../models/Room';

import AppError from '../../errors/AppError';

interface Request {
  id: string;
  personId: string;
}

class FindOneRoomService {
  public async execute({ id, personId }: Request): Promise<Room> {
    const roomRepository = getRepository(Room);

    if (!id) {
      throw new AppError('Room ID not provided');
    }

    if (!isUuid(id)) {
      throw new AppError('The ID provided must be in uuid format.');
    }

    const room = await roomRepository.findOne({
      where: { id, person_id: personId },
      relations: ['patrimonies'],
    });

    if (!room) {
      throw new AppError(`Room with ID ${id} not found.`);
    }

    return room;
  }
}

export default new FindOneRoomService();
