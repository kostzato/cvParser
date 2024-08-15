import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ParsedDataListRelationFilter } from "../parsedData/ParsedDataListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ResumeWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
  parsedDataItems?: ParsedDataListRelationFilter;
  resumeId?: StringNullableFilter;
};
