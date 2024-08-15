import { Module } from "@nestjs/common";
import { CvParsingService } from "./cvparsing.service";
import { CvParsingController } from "./cvparsing.controller";
import { CvParsingResolver } from "./cvparsing.resolver";

@Module({
  controllers: [CvParsingController],
  providers: [CvParsingService, CvParsingResolver],
  exports: [CvParsingService],
})
export class CvParsingModule {}
