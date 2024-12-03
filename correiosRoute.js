// routes/correiosRoute.js
import express from 'express';
import ApiNodeCorreios from 'node-correios';

const router = express.Router();
const correios = new ApiNodeCorreios();

// Rota para calcular o frete
router.post('/calcular_frete', async (req, res) => {
    const {
        nCdServico,
        sCepOrigem,
        sCepDestino,
        nVlPeso,
        nCdFormato,
        nVlComprimento,
        nVlAltura,
        nVlLargura,
        nVlDiametro,
    } = req.body;

    try {
        // Timeout de 10 segundos para evitar quedas longas de conexão
        const result = await Promise.race([
            correios.calcPreco({
                nCdServico,
                sCepOrigem,
                sCepDestino,
                nVlPeso,
                nCdFormato,
                nVlComprimento,
                nVlAltura,
                nVlLargura,
                nVlDiametro,
            }),
            new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout na requisição para os Correios')), 10000)
            )
        ]);

        // Retorna o resultado da API
        res.json(result);
    } catch (error) {
        console.error('Erro ao calcular frete:', error.message);

        // Resposta HTTP apropriada ao cliente em caso de erro
        res.status(500).json({ error: 'Erro ao calcular o frete. Tente novamente mais tarde.' });
    }
});

export default router;
