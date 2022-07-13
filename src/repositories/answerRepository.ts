import { prisma } from '../config/database.js';
import { Answer } from '@prisma/client';

export type CreateAnswerData = Omit<Answer, 'id' | 'createdAt'>;

export const createAnswer = async (createAnswerData: CreateAnswerData) => {
  await prisma.answer.create({
    data: {
      ...createAnswerData,
    },
  });
};
