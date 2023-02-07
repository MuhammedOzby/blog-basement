import { Controller, Get, Param, Post } from '@nestjs/common';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import { Post as PostEntity } from 'src/Entities/Post.enitity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @ApiResponse({
    status: 200,
    description: 'All post list',
    isArray: true,
    type: PostEntity,
  })
  @Get('')
  findAll() {
    return this.postService.findAll();
  }

  @Get(':postID')
  findOne(@Param('postID') postID: number) {
    return this.postService.getOne(postID);
  }

  @ApiProperty({ type: PostEntity })
  @Post('add')
  insertOne(regedit: PostEntity) {
    return this.postService.insertOne(regedit);
  }
}
