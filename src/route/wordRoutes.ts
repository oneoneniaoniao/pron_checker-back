import { Router } from "express";
import { WordController } from "@/interface/controller/wordController";

const router = Router();
const wordController = new WordController();

router.get("/word/random", (req, res) =>
  wordController.getRandomWord(req, res),
);

export default router;
