import { Controller, Get } from "@nestjs/common";
import { CheckHealthService } from "./services/check-health.service";
import { HealthDto } from "./dtos/check-health-response.dto";

@Controller("health")
export class HealthController {
  constructor(private readonly checkHealthService: CheckHealthService) {}

  @Get()
  checkHealth(): Promise<HealthDto> {
    return this.checkHealthService.execute();
  }
}
