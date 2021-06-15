import { getRepository } from 'typeorm';
import Patrimony from '../../models/Patrimony';

class FindPatrimonyService {
  public async execute(): Promise<Patrimony[]> {
    const patrimonyRepository = getRepository(Patrimony);

    const patrimonies = await patrimonyRepository.find({
      relations: ['room'],
    });

    return patrimonies;
  }
}

export default new FindPatrimonyService();
