import { getRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import Patrimony from '../../models/Patrimony';

import AppError from '../../errors/AppError';

interface Request {
  id: string;
  personId: string;
}

class FindOnePatrimonyService {
  public async execute({ id, personId }: Request): Promise<Patrimony> {
    const patrimonyRepository = getRepository(Patrimony);

    if (!id) {
      throw new AppError('Patrimony ID not provided');
    }

    if (!isUuid(id)) {
      throw new AppError('The ID provided must be in uuid format.');
    }

    const patrimony = await patrimonyRepository.findOne({
      where: { id, person_id: personId },
      relations: ['room'],
    });

    if (!patrimony) {
      throw new AppError(`Patrimony with ID ${id} not found.`);
    }

    return patrimony;
  }
}

export default new FindOnePatrimonyService();
