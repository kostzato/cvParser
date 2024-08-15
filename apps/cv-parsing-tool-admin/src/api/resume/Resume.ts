import { JsonValue } from "type-fest";
import { ParsedData } from "../parsedData/ParsedData";

export type Resume = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  parsedDataItems?: Array<ParsedData>;
  resumeId: string | null;
  updatedAt: Date;
};
