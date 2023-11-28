import { Injectable } from "@nestjs/common";
import { HealthDto } from "../dtos/check-health-response.dto";

@Injectable()
export class CheckHealthService {
  async execute(): Promise<HealthDto> {
    try {
      return { status: "API is healthy" };
    } catch (error) {
      console.error("Error checking health:", error);
      throw new Error("Internal Server Error");
    }
  }
}
