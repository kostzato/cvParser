import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ResumeWhereUniqueInput } from "../resume/ResumeWhereUniqueInput";

export type ParsedDataWhereInput = {
  address?: StringNullableFilter;
  education?: JsonFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  resume?: ResumeWhereUniqueInput;
  workExperience?: JsonFilter;
};
