import { getRepository } from 'typeorm';

import Room from '../../models/Room';
import AppError from '../../errors/AppError';

interface Request {
  id: string;
  personId: string;
  name?: string;
}

class UpdateRoomService {
  public async execute({ name, id, personId }: Request): Promise<Room> {
    const repository = getRepository(Room);

    const checkRoomExists = await repository.findOne({
      where: { id },
    });

    if (!checkRoomExists) {
      throw new AppError(`Room with ID ${id} does not exists.`);
    }

    await repository.update({ id, person_id: personId }, { name });

    const room = await repository.findOne({
      where: { id },
    });

    if (!room) {
      throw new AppError('Exception while updating room.');
    }

    return room;
  }
}

export default new UpdateRoomService();
