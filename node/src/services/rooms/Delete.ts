import { getRepository } from 'typeorm';

import Room from '../../models/Room';
import AppError from '../../errors/AppError';

interface Request {
  id: string;
  personId: string;
}

class deleteRoomService {
  public async execute({ id, personId }: Request): Promise<void> {
    const repository = getRepository(Room);

    const checkRoomExists = await repository.findOne({
      where: { id, person_id: personId },
    });

    if (!checkRoomExists) {
      throw new AppError(`Room with ID ${id} does not exists.`);
    }

    await repository.delete({
      id,
    });
  }
}

export default new deleteRoomService();
