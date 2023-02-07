import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'Return main page SSR' })
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @ApiOkResponse({ description: 'Return main page SSR' })
  @Get('sitemap.xml')
  sitemap() {
    return this.appService.sitemapGenerator();
  }
}
