import Joi from 'joi';
import { CreateQuestionData } from '../repositories/questionRepository';

export const questionSchema = Joi.object<CreateQuestionData>({
  question: Joi.string().required(),
});
