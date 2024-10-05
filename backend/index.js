import express from "express";
import mongoose from "mongoose";
import { PORT, mongodbUrl } from "./config.js";
import cors from 'cors';
import usersRoute from './routes/usersRoute.js';
import loginRoute from './routes/loginRoute.js';  // Importa a rota de login
import registerRoute from './routes/registerRoute.js';  // Importa a rota de registro
import correiosRoute from './routes/correiosRoute.js';  // Importa a rota dos Correios
import env from 'dotenv';

env.config();

//npm install br-validations
//npm install bcryptjs
//npm install express
//npm install mongoose

const app = express();

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //allowedHeaders: ['Content-Type'],
})
);

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});


app.use('/users', usersRoute);  // Usa a rota de usuários
app.use('/login', loginRoute);  // Usa a rota de login
app.use('/registro', registerRoute);  // Usa a rota de registro
app.use('/correios', correiosRoute);  // Usa a rota dos Correios

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
