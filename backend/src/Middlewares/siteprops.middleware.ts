import { Injectable, NestMiddleware } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request, Response, NextFunction } from 'express';
import { Settings } from 'src/Entities/Settings.Entity';
import { Repository } from 'typeorm';

type SiteVariables = {
  title: string;
  description: string;
  websiteURL: string;
  imageFilePath: string;
};

@Injectable()
export class SitePropsMiddleware implements NestMiddleware {
  constructor(@InjectRepository(Settings) private readonly settingsRepository: Repository<Settings>) {}
  async use(req: Request, res: Response, next: NextFunction) {
    if (!req.originalUrl.includes('api')) {
      const siteVariables: SiteVariables = await this.getSiteProps();
      res.locals = { ...siteVariables };
    }
    next();
  }

  async getSiteProps(): Promise<Settings> {
    return await this.settingsRepository.findOneBy({ settingsID: 0 });
  }
}
