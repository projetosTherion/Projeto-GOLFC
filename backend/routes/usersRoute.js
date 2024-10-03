import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcryptjs';

const router = express.Router();

// Rota para criar um novo usuário
router.post("/", async (req, res, next) => {
  try {
    const {
      nome,
      email,
      senha,
      data_nascimento,
      documentoID,
      celular,
      cep,
      pais,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
      time_do_usuario
    } = req.body;

    // Verificação dos campos obrigatórios
    if (
      !nome ||
      !email ||
      !senha ||
      !data_nascimento ||
      !documentoID ||
      !celular ||
      !cep ||
      !pais ||
      !estado ||
      !cidade ||
      !bairro ||
      !rua ||
      !numero ||
      !time_do_usuario
    ) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }

    const hashedPassword = await bcrypt.hash(senha, 10);

    // Criação do novo usuário com os dados recebidos
    const newUser = {
      nome,
      email,
      senha: hashedPassword, // Armazena a senha criptografada
      data_nascimento,
      documentoID,
      celular,
      cep,
      pais,
      estado,
      cidade,
      bairro,
      rua,
      numero,
      complemento,
      time_do_usuario
    };

    // Salvando o usuário no banco de dados
    const user = await User.create(newUser);
    const userWithoutPassword = user.toObject();
    delete userWithoutPassword.senha;  // Remove a senha antes de retornar


    // Retornando o usuário criado
    return res.status(201).send(userWithoutPassword);
    //return res.status(201).send(user);
  } catch (err) {
    console.log(err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

// Rota para obter todos os usuários
router.get("/", async (req, res, next) => {
  console.log("Rota /users foi acessada");
  try {
    const users = await User.find({});
    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (err) {
    console.log(err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

// Rota para obter usuário por ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    // Verifica se o usuário foi encontrado
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Retorna os dados do usuário encontrado
    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

export default router;
