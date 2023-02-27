import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/Entities/Article.enitity';
import { User } from 'src/Entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ApiService {
  private mainUser?: User;
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

  /**
   * Main user always has ID: 1
   */
  async getMainUser(): Promise<User> {
    if (!this.mainUser) this.mainUser = await this.userRepository.findOne({ where: { userID: 1 } });
    return this.mainUser;
  }
}
