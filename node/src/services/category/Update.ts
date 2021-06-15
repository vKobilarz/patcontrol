// import { getRepository } from 'typeorm';

// import Category from '../../models/Category';
// import AppError from '../../errors/AppError';

// interface Request {
//   id: string;
//   description?: string;
// }

// class UpdateCategoryService {
//   public async execute({ id, description }: Request): Promise<Category> {
//     const repository = getRepository(Category);

//     const checkCategoryExists = await repository.findOne({
//       where: { id },
//     });

//     if (!checkCategoryExists) {
//       throw new AppError(`Category with ID ${id} does not exists.`);
//     }

//     await repository.update(
//       {
//         id,
//       },
//       { description }
//     );

//     const category = await repository.findOne({
//       where: { id },
//     });

//     if (!category) {
//       throw new AppError('Exception while updating category.');
//     }

//     return category;
//   }
// }

// export default UpdateCategoryService;
