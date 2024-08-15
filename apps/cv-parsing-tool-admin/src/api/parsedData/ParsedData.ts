import { JsonValue } from "type-fest";
import { Resume } from "../resume/Resume";

export type ParsedData = {
  address: string | null;
  createdAt: Date;
  education: JsonValue;
  email: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  phoneNumber: string | null;
  resume?: Resume | null;
  updatedAt: Date;
  workExperience: JsonValue;
};
