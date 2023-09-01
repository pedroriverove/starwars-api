import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Planet } from './planet.model';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlanetsService {
  constructor(private readonly httpService: HttpService) {}

  async getPlanets(): Promise<Planet[]> {
    const { data } = await firstValueFrom(
      this.httpService.get('https://swapi.dev/api/planets'),
    );
    return data;
  }
}
