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
  address: string;

  @Column({
    unique:true 
  })
    email:String;

    @Column()
    phonenumber: String;
  
  
  @Column({ default: true })
  isActive: boolean;
}