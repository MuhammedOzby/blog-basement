import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @ApiProperty({ example: 'admin', description: 'Login username' })
  @Column()
  username: string;

  @Column()
  @ApiProperty({
    example: 'pA$$wOrd',
    description: 'Github repostory link.',
  })
  password: string;

  @Column()
  @ApiProperty({
    example: 'User real first name',
    description: 'Github source link.',
  })
  firstName: string;

  @Column()
  @ApiProperty({
    example: 'User surname',
    description: 'Family name etc.',
  })
  surname: string;
}
