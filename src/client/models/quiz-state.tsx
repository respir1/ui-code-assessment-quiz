export type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type QuizState = {
  questionList: Question[];
  randomQuestion: Question | null;
  askedQuestions: Question[];
  counter: number;
  showResults: boolean;
}

export interface IQuizResults {
  correct: number;
  wrong: number;
}

export type HandleSubmit = ((answer: string) => void)

export type QuizActions =  
| { type: 'INIT_QUIZ', results: Question[] }  
| { type: 'SELECT_RANDOM_QUESTION' }  
| { type: 'SUBMIT_QUIZ' }
| { type: 'RESTART_QUIZ' };
