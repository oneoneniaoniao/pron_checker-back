CREATE TABLE IF NOT EXISTS questions (
  id SERIAL PRIMARY KEY,
  word1_text TEXT NOT NULL,
  word1_url TEXT NOT NULL,
  word2_text TEXT NOT NULL,
  word2_url TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

INSERT INTO questions (word1_text, word1_url, word2_text, word2_url)
VALUES
  ('flee', 'audio/flee.mp3', 'free', 'audio/free.mp3'),
  ('light', 'audio/light.mp3', 'right', 'audio/right.mp3'),
  ('low', 'audio/low.mp3', 'row', 'audio/row.mp3');