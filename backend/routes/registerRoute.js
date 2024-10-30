import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

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
      pais, estado, cidade, bairro, rua, numero, complemento, time_do_usuario
    };

    const user = await User.create(newUser);

    console.log('Usuário criado com sucesso:', user);

    // Retornando o usuário criado
    return res.status(201).send(user);

  } catch (err) {
    console.log('Erro ao criar usuário:', err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

export default router;
