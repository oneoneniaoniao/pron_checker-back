import { Word } from "@/domain/model/Word";

export interface IWordUseCase {
  getRandom(): Promise<Word | null>;
}
