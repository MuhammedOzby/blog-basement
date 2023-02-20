import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/Entities/Article.enitity';
import { Repository } from 'typeorm';
import { Article as ArticleLinkedData } from '../lib/linkedData.referances';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private readonly articleRepository: Repository<Article>) {}

  async findAll() {
    return await this.articleRepository.find({
      select: [
        'articleID',
        'alternativeHeadline',
        'alternativeHeadline',
        'dateCreated',
        'dateModified',
        'description',
        'editor',
        'headline',
        'keywords',
      ],
    });
  }

  async getOne(articleID: number) {
    return this.articleRepository.findOne({ where: { articleID }, relations: ['author'] });
  }

  async getArticlePageData(articleID: number) {
    const article: Article = await this.articleRepository.findOne({
      where: { articleID },
      relations: ['author', 'editor', 'publisher'],
    });
    const LinkedData: ArticleLinkedData = {
      '@context': 'https://schema.org/',
      '@type': 'Article',
      ...article,
      author: {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        ...article.author,
      },
      editor: {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        ...article.editor,
      },
      publisher: {
        '@context': 'https://schema.org/',
        '@type': 'Person',
        ...article.publisher,
      },
    };
    return LinkedData;
  }
}
