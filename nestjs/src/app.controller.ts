import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('prefixo')
export class AppController {
  //aqui fica o container de serviços
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(): string {
    return this.appService.getHello();
  }
}
