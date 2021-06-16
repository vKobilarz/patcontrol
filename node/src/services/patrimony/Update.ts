import { getRepository, Not } from 'typeorm';

import Patrimony from '../../models/Patrimony';
import AppError from '../../errors/AppError';
import Room from '../../models/Room';

interface Request {
  id: string;
  description?: string;
  number?: string;
  rfid: string;
  last_scanned_date?: string;
  last_found_date?: string;
  personId: string;
  room_id?: string;
}

class UpdatePatrimonyService {
  public async execute({
    id,
    description,
    number,
    rfid,
    last_scanned_date,
    last_found_date,
    personId,
    room_id,
  }: Request): Promise<Patrimony> {
    const patrimonyRepository = getRepository(Patrimony);
    const roomRepository = getRepository(Room);

    const checkPatrimonyRfidExists = await patrimonyRepository.findOne({
      where: { person_id: personId, rfid, id: Not(id) },
    });

    if (checkPatrimonyRfidExists) {
      throw new AppError(`Patrimony with RFID ${rfid} already exists.`);
    }

    const checkPatrimonyNumberExists = await patrimonyRepository.findOne({
      where: { person_id: personId, number, id: Not(id) },
    });

    if (checkPatrimonyNumberExists) {
      throw new AppError(`Patrimony with number ${number} already exists.`);
    }

    if (room_id) {
      const checkRoomExists = await roomRepository.findOne({
        where: { person_id: personId, id: room_id },
      });

      if (!checkRoomExists) {
        throw new AppError(`Room with id ${room_id} does not exists.`);
      }
    }

    await patrimonyRepository.update(
      { id, person_id: personId },
      {
        description,
        number,
        rfid,
        last_scanned_date,
        last_found_date,
        person_id: personId,
        room_id,
      }
    );

    const patrimony = await patrimonyRepository.findOne({
      where: { id },
    });

    if (!patrimony) {
      throw new AppError('Exception while updating room.');
    }

    return patrimony;
  }
}

export default new UpdatePatrimonyService();
