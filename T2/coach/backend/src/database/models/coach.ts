
import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { ICoach } from '@modules/coach/model';

@Table({ tableName: 'coach' })
export default class Coach extends Model<ICoach> {
   
   @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
   id: string;

   @Column({ type: DataType.STRING, allowNull: true })
   avatar: string;

   @Column({ type: DataType.STRING, allowNull: true })
   bio: string;

   @Column({ type: DataType.STRING, allowNull: true })
   cost: string;

   @Column({ type: DataType.STRING, allowNull: true })
   name: string;

   @Column({ type: DataType.STRING, allowNull: true })
   subject: string;

   @Column({ type: DataType.STRING, allowNull: true })
   whatsapp: string;

   @Column({ type: DataType.STRING, allowNull: true })
   email: string;
   
}

