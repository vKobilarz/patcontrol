import { getRepository } from 'typeorm';
import Room from '../../models/Room';

interface Request {
  personId: string;
}

class FindRoomService {
  public async execute({ personId }: Request): Promise<Room[]> {
    const roomRepository = getRepository(Room);

    const rooms = await roomRepository.find({
      where: { person_id: personId },
    });

    return rooms;
  }
}

export default new FindRoomService();
