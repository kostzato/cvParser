/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { GraphQLUpload } from "graphql-upload";
import { FileUpload } from "src/storage/base/storage.types";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Resume } from "./Resume";
import { ResumeCountArgs } from "./ResumeCountArgs";
import { ResumeFindManyArgs } from "./ResumeFindManyArgs";
import { ResumeFindUniqueArgs } from "./ResumeFindUniqueArgs";
import { CreateResumeArgs } from "./CreateResumeArgs";
import { UpdateResumeArgs } from "./UpdateResumeArgs";
import { DeleteResumeArgs } from "./DeleteResumeArgs";
import { ParsedDataFindManyArgs } from "../../parsedData/base/ParsedDataFindManyArgs";
import { ParsedData } from "../../parsedData/base/ParsedData";
import { ResumeService } from "../resume.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Resume)
export class ResumeResolverBase {
  constructor(
    protected readonly service: ResumeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  async _resumesMeta(
    @graphql.Args() args: ResumeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Resume])
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "any",
  })
  async resumes(@graphql.Args() args: ResumeFindManyArgs): Promise<Resume[]> {
    return this.service.resumes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Resume, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "read",
    possession: "own",
  })
  async resume(
    @graphql.Args() args: ResumeFindUniqueArgs
  ): Promise<Resume | null> {
    const result = await this.service.resume(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resume)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "create",
    possession: "any",
  })
  async createResume(@graphql.Args() args: CreateResumeArgs): Promise<Resume> {
    return await this.service.createResume({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Resume)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "update",
    possession: "any",
  })
  async updateResume(
    @graphql.Args() args: UpdateResumeArgs
  ): Promise<Resume | null> {
    try {
      return await this.service.updateResume({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Resume)
  @nestAccessControl.UseRoles({
    resource: "Resume",
    action: "delete",
    possession: "any",
  })
  async deleteResume(
    @graphql.Args() args: DeleteResumeArgs
  ): Promise<Resume | null> {
    try {
      return await this.service.deleteResume(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Resume)
  async uploadFile(
    @graphql.Args({
      name: "file",
      type: () => GraphQLUpload,
    })
    file: FileUpload,
    @graphql.Args()
    args: ResumeFindUniqueArgs
  ): Promise<Resume> {
    return await this.service.uploadFile(args, file);
  }

  @graphql.Mutation(() => Resume)
  async deleteFile(
    @graphql.Args()
    args: ResumeFindUniqueArgs
  ): Promise<Resume> {
    return await this.service.deleteFile(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ParsedData], { name: "parsedDataItems" })
  @nestAccessControl.UseRoles({
    resource: "ParsedData",
    action: "read",
    possession: "any",
  })
  async findParsedDataItems(
    @graphql.Parent() parent: Resume,
    @graphql.Args() args: ParsedDataFindManyArgs
  ): Promise<ParsedData[]> {
    const results = await this.service.findParsedDataItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
