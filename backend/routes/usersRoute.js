import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const {
      nome,
      email,
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

    if (
      !nome ||
      !email ||
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

    const newUser = {
      nome,
      email,
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

    const user = await User.create(newUser);

    return res.status(201).send(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//get all users
router.get("/", async (req, res) => {
  console.log("Rota /users foi acessada");
  try {
    const users = await User.find({});
    return res.status(200).json({
      count: users.length,
      data: users,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//get user by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;