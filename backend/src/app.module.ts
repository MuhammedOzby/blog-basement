import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Entities/Post.enitity';
import { PostModule } from './post/post.module';

const DatabaseSettings = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'devdb',
  database: 'test',
  entities: [Post],
  synchronize: true,
});
@Module({
  imports: [DatabaseSettings, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
