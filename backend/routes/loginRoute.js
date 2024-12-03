import express from 'express';
import { User } from '../models/userModel.js';
import bcrypt from 'bcryptjs';
//import jwt from 'jsonwebtoken';
import jwtUtils from '../middleware/auth.js';

const router = express.Router();

// Rota de login
router.post('/', async (req, res) => {
    try {
        const { email, senha } = req.body;
        //Verifica se todos os campos foram preenchidos
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
        
        // Verifica se o email foi validado
        if (!user.isVerified) {
            return res.status(403).send({ auth: false, message: 'Verifique seu email para fazer login.' });
        }
        
        // Gera o token 
        const infoCliente = {
            id: user._id,
            email: user.email,
            nome: user.nome,
        };

        const token = jwtUtils.generateToken(infoCliente);
        console.log("Token gerado:", token);
        console.log("USER:", user);
        //console.log("USER VERIFICADO:", user[0].verificado);

        //const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: 86400 });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Envia apenas via HTTPS em produção
            sameSite: 'Strict', // Configuração para evitar CSRF
            expires: dayjs().add(30, 'day').toDate(), // Expira em 30 dias
        });

        // Resposta de sucesso
        res.json({ auth: true, user: user.nome });

    } catch (err) {
        console.error(err);
        res.status(500).send({ auth: false, token: null, message: 'Erro no servidor. Tente novamente mais tarde.' });
    }
});

export default router;
