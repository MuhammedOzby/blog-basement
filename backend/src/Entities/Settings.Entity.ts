import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Settings {
  @PrimaryColumn({ select: false })
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

  @ApiProperty({ description: 'Web site welcome text on markdown' })
  @Column({ type: 'text' })
  welcomeText: string;

  @ApiProperty({ description: 'LinkedIn profile link' })
  @Column({ nullable: true })
  linkedin: string;

  @ApiProperty({ description: 'Twitter profile link' })
  @Column({ nullable: true })
  twitter: string;

  @ApiProperty({ description: 'HackerRank profile link' })
  @Column({ nullable: true })
  hackerrank: string;

  @ApiProperty({ description: 'Stack Overflow profile link' })
  @Column({ nullable: true })
  stackoverflow: string;

  @ApiProperty({ description: 'Github profile link' })
  @Column({ nullable: true })
  github: string;

  @ApiProperty({ description: 'Discord profile link' })
  @Column({ nullable: true })
  discord: string;

  @ApiProperty({ description: 'Mail address' })
  @Column({ nullable: true })
  mail: string;
}
