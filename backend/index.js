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
  console.log(req);
  return res.status(234).send("Welcome!");
});


app.use('/users', usersRoute);
app.use('/correios', correiosRoute);  // Usa a rota dos Correios

mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("Connected");
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
