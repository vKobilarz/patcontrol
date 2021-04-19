import { getRepository } from 'typeorm';

import Category from '../../models/Category';
import AppError from '../../errors/AppError';

interface Request {
  id?: string;
  description?: string;
}

class FindCategoryService {
  public async execute({ id, description }: Request): Promise<Category[]> {
    const repository = getRepository(Category);

    const categories = await repository.find({
      where: {
        ...(id ? { id } : {}),
        ...(description ? { description } : {}),
      },
    });

    return categories;
  }
}

export default FindCategoryService;
