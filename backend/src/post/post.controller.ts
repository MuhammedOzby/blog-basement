import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Post as PostEntity } from 'src/Entities/Post.enitity';
import { PostService } from './post.service';

@Controller('api/post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiTags('post')
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

  @ApiTags('post')
  @ApiResponse({
    status: 200,
    description: 'Return a post',
    isArray: false,
    type: PostEntity,
  })
  @Get(':postID')
  findOne(@Param('postID') postID: number) {
    return this.postService.getOne(postID);
  }

  @ApiTags('post')
  @ApiResponse({
    status: 200,
    description: 'Add a post',
    isArray: false,
    type: PostEntity,
  })
  @ApiBody({ type: PostEntity })
  @Post('add')
  insertOne(@Body() regedit: PostEntity) {
    return this.postService.insertOne(regedit);
  }
}
