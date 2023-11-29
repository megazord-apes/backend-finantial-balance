import { Module } from "@nestjs/common";
import { HealthController } from "./health.controller";
import { CheckHealthService } from "./services/check-health.service";

@Module({
  imports: [],
  controllers: [HealthController],
  providers: [CheckHealthService],
})
export class HealthModule {}
