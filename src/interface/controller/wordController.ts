import { Request, Response } from "express";
import { WordUseCase } from "@/application/usecases/WordUseCase";
import { wordRepository } from "@/infrastructure/repository/WordRepository";

export class WordController {
  private wordUseCase: WordUseCase;

  constructor() {
    this.wordUseCase = new WordUseCase(wordRepository);
  }

  public async getRandomWord(req: Request, res: Response): Promise<Response> {
    try {
      const randomWord = await this.wordUseCase.getRandomWord();
      return res.status(200).json(randomWord);
    } catch (error) {
      return res
        .status(500)
        .json({ message: `Internal server error: ${error}` });
    }
  }
}
