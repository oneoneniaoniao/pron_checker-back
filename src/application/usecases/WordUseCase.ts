import { IWordRepository } from "@/domain/repository/IWordRepository";
import { Word } from "@/domain/model/Word";

export class WordUseCase {
  constructor(private wordRepository: IWordRepository) {}

  async getRandomWord(): Promise<Word | null> {
    return this.wordRepository.findRandom();
  }
}
