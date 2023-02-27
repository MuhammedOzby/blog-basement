import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from 'src/Entities/Article.enitity';
import { Repository } from 'typeorm';
import { Article as ArticleLinkedData, Person } from '../lib/linkedData.referances';
import { User } from 'src/Entities/User.entity';

@Injectable()
export class ArticleService {
  constructor(@InjectRepository(Article) private readonly articleRepository: Repository<Article>) {}

  async getArticles() {
    return await this.articleRepository.find({
      select: [
        'articleID',
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

  async getArticle(articleID: number) {
    return this.articleRepository.findOne({ where: { articleID }, relations: ['author'] });
  }

  async getArticlePageData(articleID: number): Promise<ArticleLinkedData> {
    const article: Article = await this.articleRepository.findOne({
      where: { articleID },
      relations: ['author', 'editor', 'publisher'],
    });
    if (article === null)
      throw new BadRequestException('Not find article', {
        cause: new Error(),
        description: 'Get and search article page',
      });
    delete article.articleID;
    const author: Person = personDataControl(article.author);
    const editor: Person = personDataControl(article.editor);
    const publisher: Person = personDataControl(article.publisher);
    return {
      '@context': 'https://schema.org/',
      '@type': 'Article',
      ...article,
      author,
      editor,
      publisher,
    };
  }
}

function personDataControl(person: User): Person {
  delete person.userID;
  delete person.address?.addressID;
  if (person.address)
    return {
      '@context': 'https://schema.org/',
      '@type': 'Person',
      ...person,
      address: {
        '@context': 'https://schema.org/',
        '@type': 'Address',
        ...person.address,
      },
    };
  if (!person.address) return { '@context': 'https://schema.org/', '@type': 'Person', ...person, address: undefined };
}
