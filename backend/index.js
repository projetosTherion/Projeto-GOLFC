import express, { response } from "express";
import { PORT, mongodbUrl } from "./config.js";
import mongoose from "mongoose";
import usersRoute from './routes/usersRoute.js';
import cors from 'cors';

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

app.get("/", (req, res, next) => {
  console.log(req);
  return res.status(234).send("Welcome!");
});

app.use('/users', usersRoute);

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
