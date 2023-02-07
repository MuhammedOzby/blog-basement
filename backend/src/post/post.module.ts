import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/Entities/Post.enitity';
import { PostService } from './post.service';
import { PostController } from './post.controller';

const dbEntities = [TypeOrmModule.forFeature([Post])];
@Module({
  imports: [...dbEntities],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
