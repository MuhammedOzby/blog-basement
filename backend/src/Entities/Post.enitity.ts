import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Title', description: 'Post title' })
  @Column()
  title: string;

  @Column()
  @ApiProperty({
    example: 'Github Link',
    description: 'Github repostory link.',
  })
  githubURL: string;

  @Column()
  @ApiProperty({
    example: 'Github Source Link',
    description: 'Github source link.',
  })
  githubRawURL: string;

  @Column()
  @ApiProperty({
    example: 'image-path.jpg',
    description: 'Naaaah image.',
  })
  imagePath?: string;
}
