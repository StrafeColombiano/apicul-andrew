import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  adress: string;

  @Column()
  phonenumber: String;

  @Column()
  email: string;

  @Column({ default: true })
  isActive: boolean;
}