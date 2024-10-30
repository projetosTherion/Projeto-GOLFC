import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Rota de login
router.post('/', async (req, res) => {
    try {
        const { email, senha } = req.body;

        // Verifica se e-mail ou senha foram fornecidos
        if (!email || !senha) {
            console.log('E-mail ou senha não fornecidos:', { email, senha });
            return res.status(400).send({ auth: false, message: 'E-mail ou senha não foram fornecidos.' });
        }

        console.log('Tentativa de login com o e-mail:', email);

        // Verifica se o usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            console.log(`Usuário não encontrado com o e-mail: ${email}`);
            return res.status(401).send({ auth: false, message: 'E-mail não encontrado.' });
        }

        console.log(`Usuário encontrado: ${user.nome}`);

        // Comparando a senha fornecida com o hash armazenado usando bcrypt
        const passwordIsValid = await bcrypt.compare(senha, user.senha);
        if (!passwordIsValid) {
            console.log(`Senha inválida para o usuário: ${user.nome}`);
            return res.status(401).send({ auth: false, token: null, message: 'Senha inválida.' });
        }

        console.log('Senha validada com sucesso para o usuário:', user.nome);

        // Gera o token JWT e envia a resposta
        const token = jwt.sign({ id: user._id }, "teste", { expiresIn: 86400 });
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });

        console.log('Token JWT gerado e enviado no cookie:', token);

        // Resposta de sucesso
        res.json({ auth: true, user: user.nome });

    } catch (err) {
        console.error('Erro no servidor:', err);
        res.status(500).send({ auth: false, token: null, message: 'Erro no servidor. Tente novamente mais tarde.' });
    }
});

export default router;
