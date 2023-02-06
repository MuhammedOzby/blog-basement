import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  githubURL: string;

  @Column()
  githubRawURL: string;

  @Column()
  imagePath?: string;

  @Column({ default: true })
  isActive: boolean;
}
