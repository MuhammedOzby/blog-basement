import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { PhysicalAddress } from './PhysicalAddress.entitiy';
import { ResumeSchema } from 'src/DTO/ResumeSchema.schema';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @ApiProperty({ description: 'Login username' })
  @Column({ select: false })
  username: string;

  @ApiProperty({ description: 'Login pass' })
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

  @ApiProperty({ description: 'İmage address.' })
  @Column({ nullable: true })
  image?: string;

  @ApiProperty({ description: 'The job title of the person (for example, Financial Manager, Developer).' })
  @Column()
  jobTitle: string;

  @ApiProperty({ description: 'Physical address of the item.' })
  @OneToOne(() => PhysicalAddress)
  @JoinColumn()
  address?: PhysicalAddress;

  @ApiProperty({ description: 'The telephone number.' })
  @Column()
  telephone?: string;

  @ApiProperty({ description: 'URL of the item.' })
  @Column()
  url?: string;

  @ApiProperty({ description: 'User resume text' })
  @Column({ type: 'mediumtext', nullable: true })
  resumeMarkDown?: string;

  @ApiProperty({ description: 'https://jsonresume.org/schema/' })
  @Column({ type: 'json', nullable: true })
  resume?: ResumeSchema;
}
