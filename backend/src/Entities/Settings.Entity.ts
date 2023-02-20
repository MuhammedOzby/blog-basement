import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryColumn()
  settingsID: 0;

  @ApiProperty({ description: 'Web site main URL with http or https' })
  @Column()
  websiteURL: string;

  @ApiProperty({ description: 'Web site title & meta title' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Web site description & meta description' })
  @Column()
  description: string;

  @ApiProperty({ description: 'Web site banner image data or url' })
  @Column({ length: 7000 })
  imageFilePath: string;
}
