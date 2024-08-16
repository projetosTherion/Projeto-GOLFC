import express from 'express';
import { User } from '../models/userModel.js'

const router = express.Router();


router.post("/", async (req, res, next) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.dtNasc ||
      !req.body.docId ||
      !req.body.cel ||
      !req.body.cep
    ) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const newUser = {
      name: req.body.name,
      email: req.body.email,
      dtNasc: req.body.dtNasc,
      docId: req.body.docId,
      cel: req.body.cel,
      cep: req.body.cep,
    };

    const user = await User.create(newUser);

    return res.status(201).send(user);
  } catch (err) {
    console.log(err.message);
    response.status(500).send({ message: err.message });
  }
});
//get all users
router.get("/", async (req, res) => {
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

    return res.status(200).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//update a user
router.put("/:id", async (req, res, next) => {
  try {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.dtNasc ||
      !req.body.docId ||
      !req.body.cel ||
      !req.body.cep
    ) {
      return res.status(400).send({
        message: "Send all required fields",
      });
    }

    const { id } = req.params;

    const result = await User.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.status(200).send({ message: "Usuário atualizado com sucesso" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//delete user
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await User.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    return res.status(200).send({ message: "Usuário deletado com sucesso" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;