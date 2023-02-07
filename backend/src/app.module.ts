import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './Entities/Post.enitity';
import { PostModule } from './post/post.module';
import { SettingsModule } from './settings/settings.module';

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

// ! Veri tabanı ayarı değildir. Kullanımda olan repolar içindir.
const dbEntities = [TypeOrmModule.forFeature([Post])];

@Module({
  imports: [DatabaseSettings, PostModule, SettingsModule, ...dbEntities],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
