import Joi from 'joi';

const signUp = Joi.object({
  firstName: Joi.string().required().min(3).max(20),
  lastName: Joi.string().required().min(3).max(20),
  fullName: Joi.string().required().min(3).max(20),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export { signUp, login };
