import { getRepository } from 'typeorm';

import Category from '../../models/Category';
import AppError from '../../errors/AppError';

interface Request {
  id: string;
}

class FindOneCategoryService {
  public async execute({ id }: Request): Promise<Category> {
    const repository = getRepository(Category);

    const category = await repository.findOne({
      where: { id },
    });

    if (!category) {
      throw new AppError(`Category with ID ${id} does not exists.`);
    }

    return category;
  }
}

export default FindOneCategoryService;
