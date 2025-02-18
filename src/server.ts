import express from "express";
import path from "path";
import wordRoutes from "@/route/wordRoutes";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/audio", express.static(path.join(__dirname, "../audio")));

app.use("/", wordRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
