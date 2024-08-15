import { InputJsonValue } from "../../types";
import { ParsedDataUpdateManyWithoutResumesInput } from "./ParsedDataUpdateManyWithoutResumesInput";

export type ResumeUpdateInput = {
  file?: InputJsonValue;
  parsedDataItems?: ParsedDataUpdateManyWithoutResumesInput;
  resumeId?: string | null;
};
