import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CvParsingService } from "./cvparsing.service";
import { ResumeDto } from "../cvParsing/ResumeDto";
import { ParsedDataDto } from "../cvParsing/ParsedDataDto";

@swagger.ApiTags("cvParsings")
@common.Controller("cvParsings")
export class CvParsingController {
  constructor(protected readonly service: CvParsingService) {}

  @common.Post("/parse-resume")
  @swagger.ApiOkResponse({
    type: ResumeDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReceiveResumeFile(
    @common.Body()
    body: string
  ): Promise<ResumeDto> {
        return this.service.ReceiveResumeFile(body);
      }

  @common.Get("/parsed-data/:resumeId")
  @swagger.ApiOkResponse({
    type: ParsedDataDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RetrieveParsedData(
    @common.Body()
    body: string
  ): Promise<ParsedDataDto> {
        return this.service.RetrieveParsedData(body);
      }
}
