import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ParsedDataResolverBase } from "./base/parsedData.resolver.base";
import { ParsedData } from "./base/ParsedData";
import { ParsedDataService } from "./parsedData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ParsedData)
export class ParsedDataResolver extends ParsedDataResolverBase {
  constructor(
    protected readonly service: ParsedDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
