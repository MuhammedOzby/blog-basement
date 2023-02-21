import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from 'src/Entities/Article.enitity';
import { Resume } from 'src/Entities/Resume.entity';
import { User } from 'src/Entities/User.entity';

const dbEntities = TypeOrmModule.forFeature([Article, Resume, User]);

@Module({
  imports: [dbEntities],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
