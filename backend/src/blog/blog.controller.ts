import { Controller, Get, Param, Render } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  root() {
    return { message: 'Hello world!' };
  }

  @Get('post/:postID')
  post(@Param('postID') postID: string) {
    return { aa: postID };
  }
}
