import { ApiProperty } from '@nestjs/swagger';

export class HealthDto {
  @ApiProperty({ example: 'API is healthy', description: 'The status of the API' })
  readonly status: string;
}