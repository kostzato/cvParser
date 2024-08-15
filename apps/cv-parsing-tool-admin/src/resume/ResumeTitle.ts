import { Resume as TResume } from "../api/resume/Resume";

export const RESUME_TITLE_FIELD = "resumeId";

export const ResumeTitle = (record: TResume): string => {
  return record.resumeId?.toString() || String(record.id);
};
