import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Rota de login
router.post('/', async (req, res) => {
    try {
        const { email, senha } = req.body;

        if (!email || !senha) {
            return res.status(400).send({ auth: false, message: 'E-mail ou senha não foram fornecidos.' });
        }

        // Verifica se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send({ auth: false, message: 'E-mail não encontrado.' });
        }

        // Comparando a senha fornecida com o hash armazenado usando bcrypt
        const passwordIsValid = await bcrypt.compare(senha, user.senha);
        if (!passwordIsValid) {
            return res.status(401).send({ auth: false, token: null, message: 'Senha inválida.' });
        }

        // Gera o token JWT e envia a resposta (ajuste o authService conforme necessário)
        //const { token, userData } = await authService.signin(email, senha);
        const token = jwt.sign({ id: user._id }, "teste", { expiresIn: 86400 });
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });

        //console.log(req.cookies);

        // Resposta de sucesso
        res.json({ auth: true, user: user.nome });

    } catch (err) {
        console.error(err);
        res.status(500).send({ auth: false, token: null, message: 'Erro no servidor. Tente novamente mais tarde.' });
    }
});

export default router;