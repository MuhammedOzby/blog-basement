import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ResumeSchema } from 'src/DTO/ResumeSchema.schema';
import { Article } from 'src/Entities/Article.enitity';
import { User } from 'src/Entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApiService {
  constructor(
    @InjectRepository(Article) private readonly articleRepository: Repository<Article>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
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

  async getMainUser(): Promise<User> {
    return await this.userRepository.findOne({ where: { userID: 1 } });
  }
}
