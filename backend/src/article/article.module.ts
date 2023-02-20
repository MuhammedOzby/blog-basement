import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/Entities/Article.enitity';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

const dbEntities = [TypeOrmModule.forFeature([Article])];
@Module({
  imports: [...dbEntities],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
