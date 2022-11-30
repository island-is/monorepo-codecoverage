import {Controller, Get} from '@nestjs/common';

import {AppService} from './app.service';
import {environment} from '../environments/environment'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getData() {
    if (!environment.production)
      return this.appService.getData();
    else return {}
  }
}
