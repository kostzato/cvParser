import { InputJsonValue } from "../../types";
import { ParsedDataCreateNestedManyWithoutResumesInput } from "./ParsedDataCreateNestedManyWithoutResumesInput";

export type ResumeCreateInput = {
  file?: InputJsonValue;
  parsedDataItems?: ParsedDataCreateNestedManyWithoutResumesInput;
  resumeId?: string | null;
};
