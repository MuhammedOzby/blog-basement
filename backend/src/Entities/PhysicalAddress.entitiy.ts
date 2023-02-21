import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PhysicalAddress {
  @PrimaryGeneratedColumn({})
  addressID: number;

  @ApiProperty({ description: 'Web site main URL with http or https' })
  @Column()
  addressLocality: string;

  @ApiProperty({ description: 'Web site title & meta title' })
  @Column()
  addressRegion: string;

  @ApiProperty({ description: 'Web site description & meta description' })
  @Column()
  postalCode: string;

  @ApiProperty({ description: 'Web site banner image data or url' })
  @Column()
  streetAddress: string;
}
