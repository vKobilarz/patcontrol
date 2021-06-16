import { getRepository } from 'typeorm';

import Patrimony from '../../models/Patrimony';
import AppError from '../../errors/AppError';

interface Request {
  id: string;
  personId: string;
}

class deletePatrimonyService {
  public async execute({ id, personId }: Request): Promise<void> {
    const repository = getRepository(Patrimony);

    const checkPatrimonyExists = await repository.findOne({
      where: { id, person_id: personId },
    });

    if (!checkPatrimonyExists) {
      throw new AppError(`Patrimony with ID ${id} does not exists.`);
    }

    await repository.delete({
      id,
    });
  }
}

export default new deletePatrimonyService();
