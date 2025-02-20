import { IWordUseCase, IWordDTO } from "@/application/usecase/IWordUseCase";
import { IWordRepository } from "@/domain/repository/IWordRepository";

export class WordUseCase implements IWordUseCase {
  constructor(private wordRepository: IWordRepository) {}

  async getRandom(): Promise<IWordDTO | null> {
    const result = await this.wordRepository.findRandom();
    if (!result) return null;
    const { word1_text, word1_url, word2_text, word2_url } = result;

    const audioIsFirst = Math.random() < 0.5;
    const audioUrl = audioIsFirst ? word1_url : word2_url;
    const correctWord = audioIsFirst ? word1_text : word2_text;

    const wordsArray = [word1_text, word2_text];
    if (Math.random() < 0.5) {
      [wordsArray[0], wordsArray[1]] = [wordsArray[1], wordsArray[0]];
    }

    for (let i = wordsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
    }

    const correctIndex = wordsArray.indexOf(correctWord);
    return {
      words: wordsArray,
      audioUrl,
      correctIndex: correctIndex,
    };
  }
}
