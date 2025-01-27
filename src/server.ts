import express from "express";
import wordRoutes from "@/route/wordRoutes";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/", wordRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { app };
