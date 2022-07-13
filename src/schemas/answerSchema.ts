import Joi from 'joi';
import { CreateAnswerData } from '../repositories/answerRepository';

export const answerSchema = Joi.object<CreateAnswerData>({
  answer: Joi.string().required(),
});
