import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

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
