import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Entities/Post.enitity';

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
  imports: [DatabaseSettings, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
