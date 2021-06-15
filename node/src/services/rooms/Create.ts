import { getRepository } from 'typeorm';

import Room from '../../models/Room';
import AppError from '../../errors/AppError';

interface Request {
  name: string;
  personId: string;
}

class CreateRoomService {
  public async execute({ name, personId }: Request): Promise<Room> {
    const repository = getRepository(Room);

    const checkRoomExists = await repository.findOne({
      where: { person_id: personId, name },
    });

    if (checkRoomExists) {
      throw new AppError('Room already exists.');
    }

    const room = repository.create({
      name,
      person_id: personId,
    });

    await repository.save(room);

    return room;
  }
}

export default new CreateRoomService();
