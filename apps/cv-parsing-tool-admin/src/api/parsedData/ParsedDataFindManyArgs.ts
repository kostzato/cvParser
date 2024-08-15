import { ParsedDataWhereInput } from "./ParsedDataWhereInput";
import { ParsedDataOrderByInput } from "./ParsedDataOrderByInput";

export type ParsedDataFindManyArgs = {
  where?: ParsedDataWhereInput;
  orderBy?: Array<ParsedDataOrderByInput>;
  skip?: number;
  take?: number;
};
