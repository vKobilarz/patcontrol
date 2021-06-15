// import { getRepository } from 'typeorm';

// import Category from '../../models/Category';
// import AppError from '../../errors/AppError';

// interface Request {
//   description: string;
//   order: number;
// }

// class CreateCategoryService {
//   public async execute({ description, order }: Request): Promise<Category> {
//     const repository = getRepository(Category);

//     const checkCategoryExists = await repository.findOne({
//       where: { description },
//     });

//     if (checkCategoryExists) {
//       throw new AppError('Category already exists.');
//     }

//     const category = repository.create({
//       description,
//       order
//     });

//     await repository.save(category);

//     return category;
//   }
// }

// export default CreateCategoryService;
