import { Controller, Get, Param } from '@nestjs/common';
import { BlogService } from './blog.service';
import { ApiResponse } from '@nestjs/swagger';
import { Post } from 'src/Entities/Post.enitity';

@Controller('')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @ApiResponse({
    status: 200,
    description: 'All post list',
    isArray: true,
    type: Post,
  })
  @Get('posts')
  findAll() {
    return this.blogService.findAll();
  }

  @Get('post/:postID')
  post(@Param('postID') postID: string) {
    return { aa: postID };
  }
}
