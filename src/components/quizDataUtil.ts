export class QuizDataUtil {}

export interface QuizData {
  questions: Array<{ answers: Array<string> }>;
  meta: { date: string; week: number };
}
