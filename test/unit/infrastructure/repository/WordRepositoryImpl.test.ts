import { wordRepository } from "@/infrastructure/repository/WordRepository";
import { pool } from "@/config/db";

jest.mock("@/config/db", () => ({
  pool: {
    query: jest.fn(),
  },
}));

describe("WordRepository", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("findRandom() should return a word", async () => {
    // モックのレスポンス
    const mockWord = {
      id: 1,
      word1_text: "hello",
      word1_url: "url1",
      word2_text: "hi",
      word2_url: "url2",
    };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockWord] });

    const result = await wordRepository.findRandom();

    expect(pool.query).toHaveBeenCalledWith(
      "SELECT * FROM words ORDER BY RANDOM() LIMIT 1",
    );
    expect(result).toEqual(mockWord);
  });

  test("findRandom() should return null if no word is found", async () => {
    (pool.query as jest.Mock).mockResolvedValue({ rows: [] });

    const result = await wordRepository.findRandom();

    expect(pool.query).toHaveBeenCalledWith(
      "SELECT * FROM words ORDER BY RANDOM() LIMIT 1",
    );
    expect(result).toBeNull();
  });
});
