import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

// Rota para obter todos os usuários
router.get("/", async (req, res, next) => {
  console.log("Rota GET /users foi acessada");
  try {
    const users = await User.find({});
    console.log(`Total de usuários encontrados: ${users.length}`);
    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (err) {
    console.log('Erro ao obter usuários:', err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

// Rota para obter usuário por ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(`Buscando usuário com ID: ${id}`);
    const user = await User.findById(id);

    // Verifica se o usuário foi encontrado
    if (!user) {
      console.log(`Usuário com ID ${id} não encontrado`);
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    console.log(`Usuário encontrado: ${user.nome}`);
    // Retorna os dados do usuário encontrado
    return res.status(200).json(user);
  } catch (err) {
    console.log(`Erro ao buscar usuário por ID (${id}):`, err.message);
    next(err); // Encaminha o erro para o middleware de tratamento de erros
  }
});

export default router;
