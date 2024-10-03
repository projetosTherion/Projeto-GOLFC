import express from 'express';
import AuthService from '../services/auth';
import { User } from '../models';
import config from '../config';
import bcrypt from 'bcryptjs';

const router = express.Router();
const authService = new AuthService(User);

// Rota de login
router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).send({ auth: false, message: 'Email ou senha não foram fornecidos.' });
      }
  
      // Verifica se o usuário existe
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).send({ auth: false, message: 'Usuário não encontrado.' });
      }
  
      // Compara a senha fornecida com a senha criptografada
      const passwordIsValid = await bcrypt.compare(password, user.senha);
      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null, message: 'Senha inválida.' });
      }
  
      // Gera o token JWT e envia resposta
      const { token, userData } = await authService.signin(email, password);
      res.cookie('token', token, { /* opções do cookie */ });
      res.json({ auth: true, user: userData });
    } catch (err) {
      res.status(401).send({ auth: false, token: null, message: err.message });
    }
  });

// Rota para signup (registro)
router.post('/signup', async (req, res) => {
  try {
    const { nome, email, senha, data_nascimento, documentoID, celular, cep, pais, estado, cidade, bairro, rua, numero, complemento, time_do_usuario } = req.body;

    // Verifica se todos os campos obrigatórios foram fornecidos
    if (!nome || !email || !senha || !data_nascimento || !documentoID || !celular || !cep || !pais || !estado || !cidade || !bairro || !rua || !numero || !time_do_usuario) {
        return res.status(400).json({ message: 'Todos os campos obrigatórios devem ser preenchidos.' });
    }

    // Tenta criar o novo usuário
    const newUser = new User({
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
      time_do_usuario,
    });

    // Validação interna do Mongoose será realizada antes do save
    await newUser.save();

    // Retorna resposta de sucesso
    res.status(201).json({ nome, email });
  } catch (err) {
    // Tratamento de erro, retornando a mensagem do Mongoose (como erros de validação de CPF, celular, etc.)
    res.status(400).send(err.message);
  }
});

export default router;
