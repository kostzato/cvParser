import { ParsedData as TParsedData } from "../api/parsedData/ParsedData";

export const PARSEDDATA_TITLE_FIELD = "lastName";

export const ParsedDataTitle = (record: TParsedData): string => {
  return record.lastName?.toString() || String(record.id);
};
