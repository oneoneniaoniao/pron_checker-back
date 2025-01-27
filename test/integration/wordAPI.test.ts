import request from "supertest";
import { app } from "@/server";
import { pool } from "@/config/db";

jest.mock("@/config/db", () => ({
  pool: {
    query: jest.fn(),
    end: jest.fn(),
  },
}));

describe("Word API", () => {
  afterAll(() => {
    pool.end();
  });

  test("GET /word/random should return a random word", async () => {
    const mockWord = {
      id: 1,
      word1_text: "hello",
      word1_url: "https://hello.com",
      word2_text: "world",
      word2_url: "https://world.com",
    };

    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockWord] });

    const response = await request(app).get("/word/random");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockWord);
  });

  test("GET /word/random should handle errors", async () => {
    (pool.query as jest.Mock).mockRejectedValue(new Error("Database error"));

    const response = await request(app).get("/word/random");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      message: "Internal server error: Error: Database error",
    });
  });
});
