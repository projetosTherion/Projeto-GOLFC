import jwt from 'jsonwebtoken'; // Importa a biblioteca 'jsonwebtoken'
import config from '../config.js';  // Importa o arquivo de configuração

const jwtUtils = {
  generateToken(infoCliente) {
    // Gera um token para o login
    
    const token = jwt.sign(infoCliente, config.JWT_SECRET, { expiresIn: '7d' });
    return token
  },
  // generateToken(payload, rememberMe) {
  //   const secretKey = process.env.JWT_SECRET;
  //   const options = rememberMe ? { expiresIn: '7d' } : { expiresIn: '10h' }; // 7 dias ou 1 hora
  
  //   const token = jwt.sign(payload, secretKey, options);
  //   return token;
  // },

  generateTokenVerifyEmail(infoCliente) { //Gera o token para verificação do e-mail
    // Gera um token JWT com os dados do cliente e o JWT_SECRET
    const token = jwt.sign(infoCliente, config.JWT_SECRET, { expiresIn: '1h' }); //TROCAR PARA VARIAVEL DE AMBIENTE FUTURAMENTE
    return token;
  },
  
  verifyToken(token) { //Verifica o token do usuário
    try {
      const secretKey = config.JWT_SECRET;
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (error) {
      throw new Error('Token inválido');
    }
  },
}

export default jwtUtils; // Exporta a função 'verifyToken' como padrão
