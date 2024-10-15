import express from "express"; // Importa o express
import mongoose from "mongoose"; // Importa o mongoose
import { PORT, mongodbUrl } from "./config.js"; // Importa a porta e a URL do MongoDB
import cors from 'cors'; // Importa o CORS
import usersRoute from './routes/usersRoute.js'; // Importa a rota de usuários
import loginRoute from './routes/loginRoute.js';  // Importa a rota de login
import registerRoute from './routes/registerRoute.js';  // Importa a rota de registro
import correiosRoute from './routes/correiosRoute.js';  // Importa a rota dos Correios
import nodemailer from 'nodemailer'; // Importa o Nodemailer

//npm install br-validations
//npm install bcryptjs
//npm install express
//npm install mongoose
//npm install nodemailer

const app = express(); // Cria uma instância do express

app.use(express.json()); // Habilita o uso de JSON no express

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

const user = "email" // email do site da gol 
const pass = "senha" //Usar variável de ambiente

app.get("/sendmail", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // verificar com o vitor onde hospedar o email
    port: 587,
    auth: {user: user, pass: pass,
    },
  });

  transporter.sendMail({
    from: user,
    to: emailDoUsuario,
    subject: "Validação de e-mail",
    text: "Clique no link para validar seu e-mail",
  }).then(info=>{
    res.send(info);
  }).catch(err=>{
    res.send(err);
  })
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
