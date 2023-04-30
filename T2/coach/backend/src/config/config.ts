import dotenv from 'dotenv';

dotenv.config({
   path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const appConfig = {
port: process.env.PORT || 3000,
db: {
   host: process.env.DB_HOST || 'localhost',
   port: parseInt(process.env.DB_PORT) || 5432,
   user: process.env.DB_USER || 'postgres',
   password: process.env.DB_PASSWORD || 'my_password',
   database: process.env.DB_DATABASE || 'my_database',
},
};


export default appConfig;