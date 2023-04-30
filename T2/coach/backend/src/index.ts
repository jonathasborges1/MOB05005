import { sequelize } from "@config/database";
import app from "./app"
import Coach from "src/database/models/coach";
import { coachs } from "@modules/coach/model";

const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server started at http://localhost:${PORT}`);
// });

sequelize.sync({ force:true }) // forçar a criação das tabelas novamente
.then( () => {
  Coach.bulkCreate(coachs)  // populando o banco de dados com os objetos da lista
  app.listen( PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
  });
}).catch((error) => console.log(error));

