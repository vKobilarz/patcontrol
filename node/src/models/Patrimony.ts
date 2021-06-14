import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Person from './Person';
import Room from './Room';

@Entity('patrimony')
class Patrimony {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column()
  description?: string;

  @Column()
  number?: string;

  @Column()
  rfid?: string;

  @Column('timestamp with time zone')
  last_scanned_date?: Date;

  @Column('timestamp with time zone')
  last_found_date?: Date;

  @Column()
  person_id: string;

  @ManyToOne(() => Person)
  @JoinColumn({ name: 'person_id' })
  person?: Person;

  @Column()
  room_id?: string;

  @ManyToOne(() => Room)
  @JoinColumn({ name: 'room_id' })
  room?: Room;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}

export default Patrimony;
