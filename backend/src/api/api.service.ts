import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/Entities/Article.enitity';
import { Resume } from 'src/Entities/Resume.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Article) private readonly articleRepository: Repository<Article>,
    @InjectRepository(Resume) private readonly resumeRepository: Repository<Resume>,
  ) {}

  async getArticles() {
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

  async getArticle(articleID: number): Promise<Article> {
    return this.articleRepository.findOne({ where: { articleID }, relations: ['author'] });
  }

  async getResume(): Promise<Resume> {
    return await this.resumeRepository.findOne({ where: { resumeID: 1 } });
  }
}
