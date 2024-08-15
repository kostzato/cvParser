import * as graphql from "@nestjs/graphql";
import { ResumeDto } from "../cvParsing/ResumeDto";
import { ParsedDataDto } from "../cvParsing/ParsedDataDto";
import { CvParsingService } from "./cvparsing.service";

export class CvParsingResolver {
  constructor(protected readonly service: CvParsingService) {}

  @graphql.Mutation(() => ResumeDto)
  async ReceiveResumeFile(
    @graphql.Args()
    args: ResumeDto
  ): Promise<ResumeDto> {
    return this.service.ReceiveResumeFile(args);
  }

  @graphql.Query(() => ParsedDataDto)
  async RetrieveParsedData(
    @graphql.Args("args")
    args: string
  ): Promise<ParsedDataDto> {
    return this.service.RetrieveParsedData(args);
  }
}
