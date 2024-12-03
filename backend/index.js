import express from "express"; // Importa o express
import mongoose from "mongoose"; // Importa o mongoose
import { PORT, mongodbUrl } from "./config.js"; // Importa a porta e a URL do MongoDB
import cors from 'cors'; // Importa o CORS
import usersRoute from './routes/usersRoute.js'; // Importa a rota de usuários
import loginRoute from './routes/loginRoute.js';  // Importa a rota de login
import registerRoute from './routes/registerRoute.js';  // Importa a rota de registro
import correiosRoute from './routes/correiosRoute.js';  // Importa a rota dos Correios
//import verificaEmailRoute from './routes/verificaEmailRoute.js';  // Importa a rota de verificação de email

const app = express(); // Cria uma instância do express

app.use(express.json()); // Habilita o uso de JSON no express

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.get("/", (req, res) => {
  res.send(
    "Welcome to the API!<br>" +
    "Available Routes:<br>" +
    "Login: <a href='http://localhost:3000/login'>http://localhost:3000/login</a><br>" +
    "Register: <a href='http://localhost:3000/register'>http://localhost:3000/registro</a><br>" +
    "Users: <a href='http://localhost:3000/users'>http://localhost:3000/users</a><br>" +
    "User Details: <a href='http://localhost:3000/users/:id'>http://localhost:3000/users/:id</a><br>" +
    "Calculate Freight: <a href='http://localhost:3000/calcular_frete'>http://localhost:3000/calcular_frete</a><br>"
  );
});




// Usa as rotas
app.use('/users', usersRoute);  
app.use('/login', loginRoute);  
app.use('/registro', registerRoute);  
app.use('/correios', correiosRoute);  
//app.use('/validaEmail', verificaEmailRoute);  // Nova rota para verificação de email

// Conexão com o MongoDB
mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
    app.listen(PORT, () => {
      console.log(`Porta: ${PORT} - http://localhost:3000/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
