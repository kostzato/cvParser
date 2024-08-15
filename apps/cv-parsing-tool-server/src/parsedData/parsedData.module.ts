import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ParsedDataModuleBase } from "./base/parsedData.module.base";
import { ParsedDataService } from "./parsedData.service";
import { ParsedDataController } from "./parsedData.controller";
import { ParsedDataResolver } from "./parsedData.resolver";

@Module({
  imports: [ParsedDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [ParsedDataController],
  providers: [ParsedDataService, ParsedDataResolver],
  exports: [ParsedDataService],
})
export class ParsedDataModule {}
