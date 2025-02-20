export interface IWordDTO {
  words: string[];
  audioUrl: string;
  correctIndex: number;
}

export interface IWordUseCase {
  getRandom(): Promise<IWordDTO | null>;
}
