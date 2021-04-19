import { Router } from 'express';

// import CreateCategoryService from '../services/category/Create';

const tagRouter = Router();

tagRouter.get('/', async (request, response) => {
  return response.json({status: 'OK'});
});

tagRouter.post('/', async (request, response) => {
  console.log(request.body);
  const { message } = request.body;

  return response.json({message: message === 'Ping!' ? 'Pong!' : 'Not Pinged :('})
})

// tagRouter.post('/', async (request, response) => {
//   const { description, order } = request.body;

//   const createCategory = new CreateCategoryService();

//   const category = await createCategory.execute({
//     description,
//     order,
//   });

//   return response.json(category);
// });

export default tagRouter;
