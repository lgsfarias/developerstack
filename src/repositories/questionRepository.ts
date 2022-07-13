import { prisma } from '../config/database.js';
import { Question } from '@prisma/client';

export type CreateQuestionData = Omit<Question, 'id' | 'createdAt'>;

export const createQuestion = async (
  createQuestionData: CreateQuestionData,
) => {
  await prisma.question.create({
    data: {
      ...createQuestionData,
    },
  });
};

export const getQuestions = async () => {
  return await prisma.question.findMany({
    select: {
      id: true,
      question: true,
    },
  });
};

export const getQuestionById = async (id: number) => {
  return await prisma.question.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      question: true,
      answers: {
        select: {
          answer: true,
        },
      },
    },
  });
};
