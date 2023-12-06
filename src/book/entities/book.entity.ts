import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: "book" })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  book_name: string;

  @Column({ type: 'varchar', length: 100 })
  author: string;

  @Column({ type: 'boolean', default: false })
  delete_status: boolean;
  default : false

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
