import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Resume {
  @PrimaryGeneratedColumn()
  resumeID: number;

  @Column({ type: 'mediumtext' })
  resumeMarkDown: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
