import { Word } from "@/domain/model/Word";

describe("Word", () => {
  test("should create a Word instance with correct properties", () => {
    const word = new Word(
      1,
      "hello",
      "https://hello.com",
      "world",
      "https://world.com",
    );

    expect(word.id).toBe(1);
    expect(word.word1_text).toBe("hello");
    expect(word.word1_url).toBe("hello_url");
    expect(word.word2_text).toBe("world");
    expect(word.word2_url).toBe("https://world.com");
  });
});
