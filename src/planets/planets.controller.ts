import { Controller, Get } from '@nestjs/common';
import { PlanetsService } from './planets.service';
import { Planet } from './planet.model';

@Controller('planets')
export class PlanetsController {
  constructor(private readonly planetsService: PlanetsService) {}

  @Get()
  async getPlanets(): Promise<Planet[]> {
    return this.planetsService.getPlanets();
  }
}
