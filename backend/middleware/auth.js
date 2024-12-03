import jwt from 'jsonwebtoken'; // Importa a biblioteca 'jsonwebtoken'
import config from '../config';  // Importa o arquivo de configuração

function verifyToken(req, res, next) {
  const token = req.cookies ? req.cookies.token : null; // token in cookie
  // const token = req.headers.authorization; // Ou através do header
  if (!token) {
    return res.status(403).send({
      auth: false,
      message: 'No token provided.',
    });
  }

  jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(500).send({
        auth: false,
        message: 'Fail to Authentication. Error -> ' + err,
      });
    }
    req.userId = decoded.id;
    next();
  });
}

export default verifyToken; // Exporta a função 'verifyToken' como padrão
