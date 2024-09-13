import express from "express";
import { PORT, mongodbUrl } from "./config.js";
import mongoose from "mongoose";
import usersRoute from './routes/usersRoute.js';
import cors from 'cors';
import correiosRoute from './routes/correiosRoute.js';  // Importa a rota dos Correios

const app = express();

app.use(express.json());

app.use(cors());
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});


app.use('/users', usersRoute);
app.use('/correios', correiosRoute);  // Usa a rota dos Correios

mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("Conexão com o MongoDB realizada com sucesso!");
    app.listen(PORT, () => {
      console.log(`Porta: ${PORT} - http://localhost:5555/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
