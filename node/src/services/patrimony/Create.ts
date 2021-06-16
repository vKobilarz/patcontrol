import { getRepository } from 'typeorm';

import Patrimony from '../../models/Patrimony';
import AppError from '../../errors/AppError';
import Room from '../../models/Room';

interface Request {
  description?: string;
  number?: string;
  rfid: string;
  last_scanned_date?: string;
  last_found_date?: string;
  personId: string;
  room_id?: string;
}

class CreatePatrimonyService {
  public async execute({
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
      where: { person_id: personId, rfid },
    });

    if (checkPatrimonyRfidExists) {
      throw new AppError(`Patrimony with RFID ${rfid} already exists.`);
    }

    const checkPatrimonyNumberExists = await patrimonyRepository.findOne({
      where: { person_id: personId, number },
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

    const patrimony = patrimonyRepository.create({
      description,
      number,
      rfid,
      last_scanned_date,
      last_found_date,
      person_id: personId,
      room_id,
    });

    await patrimonyRepository.save(patrimony);

    return patrimony;
  }
}

export default new CreatePatrimonyService();
