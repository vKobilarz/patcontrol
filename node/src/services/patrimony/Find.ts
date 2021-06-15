import { getRepository } from 'typeorm';
import Patrimony from '../../models/Patrimony';

interface Request {
  personId: string;
}

class FindPatrimonyService {
  public async execute({ personId }: Request): Promise<Patrimony[]> {
    const patrimonyRepository = getRepository(Patrimony);

    const patrimonies = await patrimonyRepository.find({
      where: { person_id: personId },
      relations: ['room'],
    });

    return patrimonies;
  }
}

export default new FindPatrimonyService();
