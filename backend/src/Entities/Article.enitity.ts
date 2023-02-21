import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  articleID: number;

  @ApiProperty({ example: 'Headline', description: 'Headline of the article.' })
  @Column()
  headline: string;

  @ApiProperty({ example: 'Alternative Headline', description: 'A secondary title of the CreativeWork.' })
  @Column()
  alternativeHeadline: string;

  @ApiProperty({ example: 'Genre', description: 'Genre of the creative work, broadcast channel or group.' })
  @Column()
  genre: string;

  @ApiProperty({
    example: 'Keywords',
    description:
      'Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.',
  })
  @Column()
  keywords: string;

  @ApiProperty({ example: 'desc', description: 'A description of the item.' })
  @Column()
  description: string;

  @ApiProperty({ example: 'Article content', description: 'The actual body of the article.' })
  @Column({ type: 'mediumtext' })
  articleBody: string;

  @ApiProperty({
    example: 'Publisher',
    description: 'The publisher of the creative work. Only person: https://schema.org/Person',
  })
  @OneToOne(() => User)
  @JoinColumn()
  publisher: User;

  @ApiProperty({
    example: 'Author',
    description:
      'The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably. Only person: https://schema.org/Person',
  })
  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  @ApiProperty({
    example: 'Editor',
    description: 'Specifies the Person who edited the CreativeWork. Only person: https://schema.org/Person',
  })
  @OneToOne(() => User)
  @JoinColumn()
  editor: User;

  @ApiProperty({ example: 'Title', description: 'Date of first broadcast/publication.' })
  @Column()
  datePublished: Date;

  @ApiProperty({
    example: 'Title',
    description: 'The date on which the CreativeWork was created or the item was added to a DataFeed.',
  })
  @Column()
  dateCreated: Date;

  @ApiProperty({
    example: 'Title',
    description:
      'The date on which the CreativeWork was most recently modified or when the item`s entry was modified within a DataFeed.',
  })
  @Column()
  dateModified: Date;
}
