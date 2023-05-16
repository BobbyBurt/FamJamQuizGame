export class QuizDataUtil {}

export interface QuizData {
  questions: Array<{ week: number, question: string, answers: Array<string> }>;
  meta: { date: string; week: number };
}
