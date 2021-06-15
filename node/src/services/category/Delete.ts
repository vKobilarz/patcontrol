// import { getRepository } from 'typeorm';

// import Category from '../../models/Category';
// import AppError from '../../errors/AppError';

// interface Request {
//   id: string;
// }

// class DeleteCategoryService {
//   public async execute({ id }: Request): Promise<void> {
//     const repository = getRepository(Category);

//     const checkCategoryExists = await repository.findOne({
//       where: { id },
//     });

//     if (!checkCategoryExists) {
//       throw new AppError(`Category with ID ${id} does not exists.`);
//     }

//     await repository.delete({
//       id,
//     });
//   }
// }

// export default DeleteCategoryService;
