import { Controller, Get, Param, Render } from '@nestjs/common';
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
    isArray: false,
    type: Article,
  })
  @Get('')
  @Render('index')
  getArticleListPage() {
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
  async getSelectedArticlePage(@Param('articleID') articleID: number) {
    return { LinkedData: await this.articleService.getArticlePageData(articleID) };
  }
}
