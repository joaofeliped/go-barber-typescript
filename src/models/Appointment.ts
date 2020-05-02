import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column() // Varchar é default no @Column
  provider: string;

  @Column('timestamp with time zone') // Apenas no postgres
  date: Date;
}

export default Appointment;
