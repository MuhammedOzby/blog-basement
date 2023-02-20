import { Controller, Get, Param, Post, Render } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Article } from 'src/Entities/Article.enitity';
import { ArticleService } from './article.service';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiTags('article')
  @ApiResponse({
    status: 200,
    description: 'All post list',
    isArray: true,
    type: Article,
  })
  @Get('')
  @Render('index')
  findAll() {
    return {};
  }

  @ApiTags('article')
  @ApiResponse({
    status: 200,
    description: 'Return a post',
    isArray: false,
    type: Article,
  })
  @Get(':articleID')
  @Render('index')
  async getSelectedPost(@Param('articleID') articleID: number) {
    return { LinkedData: await this.articleService.getArticlePageData(articleID) };
  }

  @ApiTags('article api')
  @ApiResponse({
    status: 200,
    description: 'All post list',
    isArray: true,
    type: Article,
  })
  @Get('api')
  async findAllAPI() {
    return await this.articleService.findAll();
  }

  @ApiTags('article api')
  @ApiResponse({
    status: 200,
    description: 'Return a post',
    isArray: false,
    type: Article,
  })
  @Get('api/:articleID')
  findOneAPI(@Param('articleID') postID: number) {
    return this.articleService.getOne(postID);
  }
}
