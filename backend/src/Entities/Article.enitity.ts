import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  articleID: number;

  @ApiProperty({ example: 'Headline', description: 'Post title' })
  @Column()
  headline: string;
  @ApiProperty({ example: 'Alternative Headline', description: 'Post title' })
  @Column()
  alternativeHeadline: string;
  @ApiProperty({ example: 'Genre', description: 'Post title' })
  @Column()
  genre: string;
  @ApiProperty({ example: 'Keywords', description: 'Post title' })
  @Column()
  keywords: string;
  @ApiProperty({ example: 'desc', description: 'Post title' })
  @Column()
  description: string;
  @ApiProperty({ example: 'Article content', description: 'Post title' })
  @Column()
  articleBody: string;
  @Column({ type: 'mediumtext' })
  content: string;

  @ApiProperty({ example: 'Publisher', description: 'Post title' })
  @OneToOne(() => User)
  @JoinColumn()
  publisher: User;
  @ApiProperty({ example: 'Author', description: 'Post title' })
  @OneToOne(() => User)
  @JoinColumn()
  author: User;
  @ApiProperty({ example: 'Editor', description: 'Post title' })
  @OneToOne(() => User)
  @JoinColumn()
  editor: User;

  @ApiProperty({ example: 'Title', description: 'Post title' })
  @Column()
  datePublished: Date;
  @ApiProperty({ example: 'Title', description: 'Post title' })
  @Column()
  dateCreated: Date;
  @ApiProperty({ example: 'Title', description: 'Post title' })
  @Column()
  dateModified: Date;
}
