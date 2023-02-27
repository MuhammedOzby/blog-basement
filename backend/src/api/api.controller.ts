import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Article } from 'src/Entities/Article.enitity';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @ApiTags('article api')
  @ApiResponse({
    status: 200,
    description: 'All post list',
    isArray: true,
    type: Article,
  })
  @Get('articles')
  async getAllArticles() {
    return await this.apiService.getArticles();
  }

  @ApiTags('article api')
  @ApiResponse({
    status: 200,
    description: 'Return a post',
    isArray: false,
    type: Article,
  })
  @Get('articles/:articleID')
  async getArticle(@Param('articleID') postID: number) {
    return await this.apiService.getArticle(postID);
  }

  @ApiTags('resume api')
  @ApiResponse({
    status: 200,
    description: 'Return a post',
    isArray: false,
    type: Article,
  })
  @Get('resume')
  async getResume() {
    return await this.apiService.getMainUser();
  }
}
