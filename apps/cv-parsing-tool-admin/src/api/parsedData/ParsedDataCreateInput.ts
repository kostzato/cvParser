import { InputJsonValue } from "../../types";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type ParsedDataCreateInput = {
  address?: string | null;
  education?: InputJsonValue;
  email?: string | null;
  lastName?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
  resume?: ResumeWhereUniqueInput | null;
  workExperience?: InputJsonValue;
};
