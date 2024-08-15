import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParsedDataServiceBase } from "./base/parsedData.service.base";

@Injectable()
export class ParsedDataService extends ParsedDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
