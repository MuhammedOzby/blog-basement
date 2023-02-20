import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @ApiProperty({ example: 'admin', description: 'Login username' })
  @Column()
  username: string;

  @Column({ select: false })
  @ApiProperty({
    example: 'pA$$wOrd',
    description: 'Github repostory link.',
  })
  password: string;

  @Column()
  @ApiProperty({
    example: 'User surname',
    description: 'Family name etc.',
  })
  surname: string;

  @Column()
  @ApiProperty({
    example: 'User surname',
    description: 'Family name etc.',
  })
  email: string;

  @Column()
  @ApiProperty({
    example: 'User surname',
    description: 'Family name etc.',
  })
  jobTitle: string;

  @Column()
  @ApiProperty({
    example: 'User surname',
    description: 'Family name etc.',
  })
  name: string;

  @Column()
  @ApiProperty({
    example: 'User surname',
    description: 'Family name etc.',
  })
  telephone: string;

  @Column()
  @ApiProperty({
    example: 'User surname',
    description: 'Family name etc.',
  })
  url: string;
}
