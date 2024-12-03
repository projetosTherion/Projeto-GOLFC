import dotenv from 'dotenv';
import jwtUtils from '../middleware/auth.js';
import SibApiV3Sdk from 'sib-api-v3-sdk';

dotenv.config();

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi(); // Criação da instância da API
SibApiV3Sdk.ApiClient.instance.authentications['api-key'].apiKey = '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'; // Chave da aba Api do Brevo

// Rota para enviar o e-mail de verificação
export const enviarEmailValidacao = async (email, res) => {

  if (!email) {
    return res.status(400).send({ error: 'Email é obrigatório' });
  }

  try {
    // Gerar token JWT de verificação
    const token = jwtUtils.generateTokenVerifyEmail({
      username: email
    });
    

    // URL de verificação de e-mail com o token
    //const verificationUrl = `${process.env.URL_FRONT}/ThanksPageRegister?token=${token}`;
    const verificationUrl = `http://localhost:3000/ThanksPageRegister?token=${token}`;

    // Opções do e-mail
    const sendSmtpEmail = {
      to: [{ email }],
      sender: { email: '7e156a001@smtp-brevo.com' },
      subject: 'Verificação de E-mail',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; background-color: #f0f0f0; padding: 20px;">
          <div style="background-color: #fff; max-width: 600px; margin: 0 auto; padding: 20px; box-shadow: 0 4px 8px rgba(0,0,0,0.1); border-radius: 8px;">
            <div style="text-align: center; background-color: #000; padding: 20px; border-radius: 8px 8px 0 0;">
              <h1 style="color: #fff; font-size: 24px; margin: 0;">Email de Confirmação</h1>
            </div>
            <div style="padding: 20px;">
              <p style="font-size: 16px; color: #333; line-height: 1.5;">Olá,</p>
              <p style="font-size: 16px; color: #333; line-height: 1.5;">
                Obrigado por se registrar! Por favor, clique no botão abaixo para confirmar seu endereço de e-mail.
              </p>
              <a href="${verificationUrl}" style="display: inline-block; background-color: gray; color: white; text-decoration: none; padding: 10px 20px; border-radius: 5px; margin-top: 20px; font-weight: bold;">
                Confirmar e-mail
              </a>
              <p style="font-size: 16px; color: #333; line-height: 1.5;">
                Se você não se registrou, ignore este e-mail.
              </p>
            </div>
            <div style="text-align: center; padding: 10px; background-color: #000; border-radius: 0 0 8px 8px; color: white; font-size: 14px;">
              <p>&copy; 2024 Arcseed AI</p>
              <p>
                <a href="#" style="color: white; text-decoration: underline;">Política de Privacidade</a> | 
                <a href="#" style="color: white; text-decoration: underline;">Contato</a>
              </p>
            </div>
          </div>
        </div>`
    };

    // Enviar o e-mail com o link de verificação
    await apiInstance.sendTransacEmail(sendSmtpEmail);
    res.status(200).send('E-mail enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar verificação de e-mail:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

export default enviarEmailValidacao;