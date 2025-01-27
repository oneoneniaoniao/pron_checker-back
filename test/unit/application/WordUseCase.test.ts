import { WordUseCase } from "@/application/usecase/WordUseCase";
import { IWordRepository } from "@/domain/repository/IWordRepository";
import { Word } from "@/domain/model/Word";

const mockWordRepository: jest.Mocked<IWordRepository> = {
  findRandom: jest.fn(),
};

describe("WordUseCase", () => {
  let wordUseCase: WordUseCase;

  beforeEach(() => {
    wordUseCase = new WordUseCase(mockWordRepository);
    jest.clearAllMocks();
  });

  test("getRandom() should return a word", async () => {
    const mockWord: Word = new Word(
      1,
      "hello",
      "https://hello.com",
      "world",
      "https://world_url",
    );
    mockWordRepository.findRandom.mockResolvedValue(mockWord);

    const result = await wordUseCase.getRandom();

    expect(result).toEqual(mockWord);
    expect(mockWordRepository.findRandom).toHaveBeenCalledTimes(1);
  });

  test("getRandom() should return null if no word is found", async () => {
    mockWordRepository.findRandom.mockResolvedValue(null);

    const result = await wordUseCase.getRandom();

    expect(result).toBeNull();
    expect(mockWordRepository.findRandom).toHaveBeenCalledTimes(1);
  });
});
