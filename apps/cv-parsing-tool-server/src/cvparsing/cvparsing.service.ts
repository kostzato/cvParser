import { Injectable } from "@nestjs/common";
import { ResumeDto } from "../cvParsing/ResumeDto";
import { ParsedDataDto } from "../cvParsing/ParsedDataDto";

@Injectable()
export class CvParsingService {
  constructor() {}
  async ReceiveResumeFile(args: ResumeDto): Promise<ResumeDto> {
    throw new Error("Not implemented");
  }
  async RetrieveParsedData(args: string): Promise<ParsedDataDto> {
    throw new Error("Not implemented");
  }
}
