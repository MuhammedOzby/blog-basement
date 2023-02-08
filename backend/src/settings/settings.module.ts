import { Module } from '@nestjs/common';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { Settings } from 'src/Entities/Settings.Entity';
import { TypeOrmModule } from '@nestjs/typeorm';

const dbEntities = [TypeOrmModule.forFeature([Settings])];

@Module({
  imports: [...dbEntities],
  controllers: [SettingsController],
  providers: [SettingsService],
})
export class SettingsModule {}
