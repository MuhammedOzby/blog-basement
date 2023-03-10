import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from './Entities/Article.enitity';
import { ArticleModule } from './article/article.module';
import { Settings } from './Entities/Settings.Entity';
import { User } from './Entities/User.entity';
import { SitePropsMiddleware } from './Middlewares/siteprops.middleware';
import { ApiModule } from './api/api.module';
import { PhysicalAddress } from './Entities/PhysicalAddress.entitiy';

const DatabaseSettings = TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'devdb',
  database: 'test',
  entities: [Article, Settings, User, PhysicalAddress],
  synchronize: true,
});

// ! Veri tabanı ayarı değildir. Kullanımda olan repolar içindir.
const dbEntities = [TypeOrmModule.forFeature([Article, Settings, User])];

@Module({
  imports: [DatabaseSettings, ArticleModule, ...dbEntities, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SitePropsMiddleware).forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
