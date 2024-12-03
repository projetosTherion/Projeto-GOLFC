import express from 'express';
import { User } from '../models/userModel.js';
//import jwt from 'jsonwebtoken';
import axios from 'axios';
import jwtUtils from '../middleware/auth.js';
import { enviarEmailValidacao } from '../routes/verificaEmailRoute.js';
//var SibApiV3Sdk = require('sib-api-v3-sdk');
//var defaultClient = SibApiV3Sdk.ApiClient.instance;

const router = express.Router();

// const sendVerificationEmail = async (userEmail, token) => {
//  const apiKey = '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'; // Substitua pela sua chave de API do Brevo

//   const emailData = {
//    sender: { email: '7e156a001@smtp-brevo.com', name: 'GOLFC' },
//     to: [{ email: userEmail }],
//     subject: 'Confirme seu email',
//     htmlContent: `
//       <p>Olá,</p>
//       <p>Clique no link abaixo para verificar seu email:</p>
//       <a href="http://yourapp.com/verify-email?token=${token}">Verificar Email</a>
//     `
//   };

//   try {
//     await axios.post('https://api.brevo.com/v3/smtp/email', emailData, {
//       headers: { 'api-key': apiKey, 'Content-Type': 'application/json' }
//     });
//     console.log('Email de verificação enviado.');
//   } catch (error) {
//    console.error('Erro ao enviar email:', error.response ? error.response.data : error.message);
//   }
// };


// Rota para criar um novo usuário
router.post("/", async (req, res, next) => {
  try {
    const {
      nome, email, senha, data_nascimento, documentoID, celular, cep,
      pais, estado, cidade, bairro, rua, numero, complemento, time_do_usuario
    } = req.body;

    // Verificação dos campos obrigatórios
    if (
      !nome || !email || !senha || !data_nascimento || !documentoID ||
      !celular || !cep || !pais || !estado || !cidade || !bairro || !rua || !numero || !time_do_usuario
    ) {
      console.log('Campos obrigatórios ausentes:', req.body);
      return res.status(400).send({
        message: "Send all required fields",
      });
    }

    console.log('Dados recebidos para criar o usuário:', req.body);
    
    // Criação do novo usuário com os dados recebidos
    const newUser = {
      nome, email, senha, data_nascimento, documentoID, celular, cep,
      pais, estado, cidade, bairro, rua, numero, complemento, time_do_usuario,
      isVerified: false // O email ainda não foi verificado
    };

    const user = await User.create(newUser);

    // const infoCliente = {
    //   userId: user._id,
    //   email: user.email,
    // };
    // Gera token JWT para verificação do email
    // const token = jwtUtils.generateTokenVerificyEmail(infoCliente);
    
    //const token = jwt.sign({ userId: user._id, email: user.email }, 'secret_key', { expiresIn: '1h' });

    // Envia email de verificação
    //COMENTADO PARA TESTES, REMOVER QUANDO TIVER ACESSO AO BREVO DO PREDO
    //await enviarEmailValidacao(user.email); 
    
    // Retornando o usuário criado
    return res.status(201).send(user);

  } catch (err) {
    
    console.log(err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

export default router;