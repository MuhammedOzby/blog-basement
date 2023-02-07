import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/Entities/Post.enitity';

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  providers: [BlogService],
  controllers: [BlogController],
})
export class BlogModule {}
