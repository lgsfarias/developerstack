import { CreateAnswerData } from '../repositories/answerRepository.js';
import * as answerRepository from '../repositories/answerRepository.js';

const createAnswer = async (createAnswerData: CreateAnswerData) => {
  await answerRepository.createAnswer(createAnswerData);
};

const answerService = {
  createAnswer,
};
export default answerService;
