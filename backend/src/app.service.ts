import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './Entities/Article.enitity';
import { Repository } from 'typeorm';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

type SitemapList = Array<{
  url: string;
  changefreq: string;
  priority: number;
  lastmod: string;
}>;

@Injectable()
export class AppService {
  constructor(@InjectRepository(Article) private readonly postRepository: Repository<Article>) {}
  async sitemapGenerator() {
    const allPost: SitemapList = (await this.postRepository.find()).map((article) => ({
      url: `/article/${article.articleID}`,
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: article.dateModified.toISOString().split('T')[0],
    }));
    const links: SitemapList = [...allPost];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: 'https://...' });

    // Return a promise that resolves with your XML string
    return streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());
  }
}
