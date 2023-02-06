import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiProperty({
    description: 'The age of a cat',
    minimum: 1,
    default: 1,
  })
  age: number;
  @Post()
  root() {
    return { message: 'Hello world!' };
  }
}
