import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

// Rota para criar um novo usuário
router.post("/", async (req, res, next) => {
  try {
    const {
      nome, email, senha, documentoID, celular, cep, data_nascimento,
      pais, estado, cidade, bairro, rua, numero, complemento, time_do_usuario, roler,
    } = req.body;

    // Verificação dos campos obrigatórios
    if (
      !nome || !email || !senha || !documentoID || !celular || !cep || !pais || !estado || !cidade || !bairro || !rua || !numero || !time_do_usuario || !data_nascimento
    ) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }


    // Criação do novo usuário com os dados recebidos
    const newUser = {
      nome, email, senha, documentoID, celular, cep,
      pais, estado, cidade, bairro, rua, numero, complemento, time_do_usuario
    };

    const user = await User.create(newUser);

    // Retornando o usuário criado
    return res.status(201).send(user);

  } catch (err) {
    console.log(err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

export default router;