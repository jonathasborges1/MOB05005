import { Sequelize } from 'sequelize-typescript';

import appConfig from '@config/config';

import Coach from '@database/models/coach';
import CoachSchedule  from '@database/models/schedule';

import { initCoachs } from '@modules/coach/model';
import { initSchedules } from '@modules/schedule/model';

// Criar a instancia do banco de dados
export const sequelize = new Sequelize({
  host: appConfig.db.host,
  port: appConfig.db.port,
  database: appConfig.db.database,
  dialect: 'postgres',
  username: appConfig.db.user,
  password: appConfig.db.password,
  models: [__dirname + '/../database/models'],
});


// Testa a conexão com o banco de dados
export const syncDatabase = async(): Promise<void> => {
  await sequelize.sync({ force: true }) // forçar a criação das tabelas novamente
  .then( () => {Coach.bulkCreate(initCoachs); CoachSchedule.bulkCreate(initSchedules) }  ); // populando o banco de dados com os objetos da lista - valores iniciais
};

