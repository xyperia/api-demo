import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity('m_participant')
export class Participant {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;
 
  @Column()
  company: string;
}