
import jwtUtils from './middleware/auth.js'; // Importa a função 'verifyToken' do arquivo 'auth.js'

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido' });
  }

  try {
    const decoded = jwtUtils.verifyToken(token); // Use a função verifyToken do jwtUtils
    req.user = decoded; // Adiciona os dados do usuário decodificado ao objeto de solicitação (opcional)
    next(); // Chama next() para continuar o fluxo
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado' });
    }
    return res.status(401).json({ message: 'Token inválido' });
  }
};

export default authMiddleware;
