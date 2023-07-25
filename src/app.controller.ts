import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ad')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Req() req, @Res() res) {
    return this.appService.getHello(res);
  }
}
