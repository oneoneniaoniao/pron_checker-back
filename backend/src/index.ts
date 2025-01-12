import express from 'express';
import { Pool } from 'pg';

const app = express();
const port = process.env.PORT || 3001;

// 1) DB 接続プールを作成 (環境変数から読み取る)
const pool = new Pool({
  host: process.env.DB_HOST || 'db',      // docker-compose で定義した service名: db
  port: parseInt(process.env.DB_PORT || '5432'),
  user: process.env.DB_USER || 'myapp_user',
  password: process.env.DB_PASS || 'myapp_pass',
  database: process.env.DB_NAME || 'myapp_db',
});

// 2) ルート (/)
app.get('/', (req, res) => {
  res.send('Hello from Express/TypeScript!!');
});

// 3) DB接続確認用ルート (/db)
app.get('/db', async (req, res) => {
  try {
    // "SELECT NOW()" を実行してDBの現在時刻を取得
    const result = await pool.query('SELECT NOW() as now');
    const serverTime = result.rows[0].now;
    res.send(`DB connection OK! Current time: ${serverTime}`);
  } catch (error) {
    console.error('DB connection error:', error);
    res.status(500).send('DB connection error');
  }
});

// 4) サーバー起動
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});


// import express from 'express';

// const app = express();
// const port = process.env.PORT || 3001;

// app.get('/', (req, res) => {
//   res.send('Hello from Express/TypeScript!');
// });

// app.listen(port, () => {
//   console.log(`Backend server is running on port ${port}`);
// });