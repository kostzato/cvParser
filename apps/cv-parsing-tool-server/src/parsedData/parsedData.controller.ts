import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParsedDataService } from "./parsedData.service";
import { ParsedDataControllerBase } from "./base/parsedData.controller.base";

@swagger.ApiTags("parsedData")
@common.Controller("parsedData")
export class ParsedDataController extends ParsedDataControllerBase {
  constructor(
    protected readonly service: ParsedDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
