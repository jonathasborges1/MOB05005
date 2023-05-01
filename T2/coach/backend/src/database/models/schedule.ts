import { Table, Column, Model, ForeignKey, DataType, BelongsTo } from 'sequelize-typescript';

import { ICoachSchedule } from '@modules/coach/model';
import Coach from '@database/models/coach';

@Table
export default class CoachSchedule extends Model<ICoachSchedule> {
  
  @ForeignKey(() => Coach)
  @Column({ type: DataType.UUID, allowNull: false })
  coachId: string;

  // relacionamento de "um-para-um" 
  @BelongsTo(() => Coach)
  coach: Coach;

  @Column({ type: DataType.STRING, allowNull: false })
  dayOfWeek: string;

  @Column({ type: DataType.STRING, allowNull: false })
  from: string;

  @Column({ type: DataType.STRING, allowNull: false })
  to: string;

}