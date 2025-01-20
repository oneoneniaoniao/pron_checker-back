import { pool } from "@/config/db";
import { IWordRepository } from "@/domain/repository/IWordRepository";

class WordRepository implements IWordRepository {
  async findRandom() {
    const result = await pool.query(
      "SELECT * FROM words ORDER BY RANDOM() LIMIT 1",
    );
    return result.rows[0];
  }
}

export const wordRepository = new WordRepository();
