import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/Entities/Post.enitity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(@InjectRepository(Post) private readonly postRepository: Repository<Post>) {}

  async findAll() {
    return this.postRepository.find();
  }

  async getOne(postID: number) {
    return this.postRepository.findOneBy({ postID });
  }

  async insertOne(regedit: Post) {
    return this.postRepository.save(regedit);
  }
}
