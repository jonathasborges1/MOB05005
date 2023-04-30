import { Sequelize } from 'sequelize-typescript';
import appConfig from '@config/config';
import { coachs } from '@modules/coach/model';
import Coach from '@database/models/coach';

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
  .then( () => {Coach.bulkCreate(coachs)} ); // populando o banco de dados com os objetos da lista - valores iniciais
};










// Testa a conexão com o banco de dados
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Conexão com o banco de dados estabelecida com sucesso");
//   } catch (error) {
//     console.error("Erro ao conectar com o banco de dados:", error);
//   }
// }

// testConnection();