import express from 'express';
import cors from 'cors';

import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.errorHandling();
  }

  private middlewares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private routes(): void {
   this.express.use(routes);
  }

  private errorHandling(): void {
   // Middleware para tratar erros de rota não encontrada
   this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
     const error = new Error('Rota não encontrada');
     res.status(404);
     next(error);
   });

   // Middleware para tratar erros internos do servidor
   this.express.use((error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
     res.status(500).json({
       message: 'Ocorreu um erro interno no servidor',
       error: error.message
     });
   });
  }

}

export default new App().express;
