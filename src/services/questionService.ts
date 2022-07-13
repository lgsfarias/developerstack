import { CreateQuestionData } from '../repositories/questionRepository.js';
import * as questionRepository from '../repositories/questionRepository.js';

const createQuestion = async (createQuestionData: CreateQuestionData) => {
  await questionRepository.createQuestion(createQuestionData);
};

const getQuestions = async () => {
  return await questionRepository.getQuestions();
};

const getQuestionById = async (id: number) => {
  return await questionRepository.getQuestionById(id);
};

const questionService = {
  createQuestion,
  getQuestions,
  getQuestionById,
};
export default questionService;
