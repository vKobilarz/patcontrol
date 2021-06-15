import Patrimony from '../../models/Patrimony';

import patrimonyRepository from '../../repository/patrimonyRepository';

class FindPatrimonyService {
  public async execute(): Promise<Patrimony[]> {
    const patrimonies = await patrimonyRepository.find({
      relations: ['room'],
    });

    return patrimonies;
  }
}

export default new FindPatrimonyService();
