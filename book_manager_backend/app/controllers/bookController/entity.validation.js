import Joi from 'joi';

const create = Joi.object({
  name: Joi.string().required().min(3).max(20),
  author: Joi.string().required().min(3).max(20),
  description: Joi.string().required().min(3).max(100),
  price: Joi.number().required(),
  total_pages: Joi.number().required(),
  publisher: Joi.string().required(),
});

const update = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required().min(3).max(20),
  author: Joi.string().required().min(3).max(20),
  description: Joi.string().required().min(3).max(100),
  price: Joi.number().required(),
  total_pages: Joi.number().required(),
  publisher: Joi.string().required(),
});

export { create, update };
