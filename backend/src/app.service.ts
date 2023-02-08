import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './Entities/Post.enitity';
import { Repository } from 'typeorm';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

@Injectable()
export class AppService {
  constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>) {}
  async sitemapGenerator() {
    const allPost = (await this.postRepository.find()).map((post) => ({ url: `/post/${post.postID}` }));
    const links = [{ url: '/page-1/', changefreq: 'daily', priority: 0.3 }, ...allPost];

    // Create a stream to write to
    const stream = new SitemapStream({ hostname: 'https://...' });

    // Return a promise that resolves with your XML string
    return streamToPromise(Readable.from(links).pipe(stream)).then((data) => data.toString());
  }
}
