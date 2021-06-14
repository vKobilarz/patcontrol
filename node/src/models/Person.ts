import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Patrimony from './Patrimony';
import Room from './Room';

@Entity('person')
class Person {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  hashed_password: string;

  @Column()
  is_admin: boolean;

  @OneToMany(() => Room, room => room.person)
  rooms: Room[];

  @OneToMany(() => Patrimony, patrimony => patrimony.person)
  patrimonies: Patrimony[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Person;
