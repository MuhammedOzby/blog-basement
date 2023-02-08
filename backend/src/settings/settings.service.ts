import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Settings } from 'src/Entities/Settings.Entity';
import { Repository } from 'typeorm';

@Injectable()
export class SettingsService {
  constructor(@InjectRepository(Settings) private readonly settingsRepository: Repository<Settings>) {}

  getSettings() {
    return this.settingsRepository.findOneBy({ settingsID: 0 });
  }

  setSettings(settings: Settings) {
    return this.settingsRepository.save({ ...settings, settingsID: 0 });
  }
}
