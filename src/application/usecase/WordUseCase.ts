import { IWordUseCase } from "@/application/usecase/IWordUseCase";
import { IWordRepository } from "@/domain/repository/IWordRepository";
import { Word } from "@/domain/model/Word";

export class WordUseCase implements IWordUseCase {
  constructor(private wordRepository: IWordRepository) {}

  async getRandom(): Promise<Word | null> {
    return this.wordRepository.findRandom();
  }
}
