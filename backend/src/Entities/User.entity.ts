import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { PhysicalAddress } from './PhysicalAddress.entitiy';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @ApiProperty({ description: 'Login username' })
  @Column({ select: false })
  username: string;

  @ApiProperty({ description: 'Github repostory link.' })
  @Column({ select: false })
  password: string;

  @ApiProperty({ description: 'Given name. In the U.S., the first name of a Person.' })
  @Column()
  givenName: string;

  @ApiProperty({ description: 'An additional name for a Person, can be used for a middle name.' })
  @Column()
  additionalName: string;

  @ApiProperty({ description: 'Family name. In the U.S., the last name of a Person.' })
  @Column()
  familyName: string;

  @ApiProperty({ description: 'Email address.' })
  @Column()
  email: string;

  @ApiProperty({ description: 'The job title of the person (for example, Financial Manager).' })
  @Column()
  jobTitle: string;

  @ApiProperty({ description: 'Physical address of the item.' })
  @OneToOne(() => PhysicalAddress)
  @JoinColumn()
  address?: PhysicalAddress;

  @ApiProperty({ description: 'The name of the item.' })
  @Column()
  name?: string;

  @ApiProperty({ description: 'The telephone number.' })
  @Column()
  telephone?: string;

  @ApiProperty({ description: 'URL of the item.' })
  @Column()
  url?: string;
}
