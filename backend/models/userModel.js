import mongoose from "mongoose";
import bcrypt from 'bcryptjs';  // Importa a biblioteca para criptografar senhas
import {validateCPF, validateCep, validatePhone} from 'validations-br';  // Importa a biblioteca para validações brasileiras

// Definindo o schema do usuário
const userSchema = mongoose.Schema({
    nome: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true,  // Email deve ser único
        validate: {
            validator: function(v) {
                const isValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
                console.log(`Validando e-mail: ${v}, válido: ${isValid}`);
                return isValid;  // Expressão regular para validação de e-mail
            },
            message: props => `${props.value} E-mail inválido!`
        }
    },
    role: { type: String, required: true, default: 'user' },
    senha: { type: String, required: true },  // select: false para não retornar a senha nas consultas
    data_nascimento: { type: String, required: true },
    documentoID: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                const isValid = validateCPF(v);
                console.log(`Validando CPF: ${v}, válido: ${isValid}`);
                return isValid;  // Valida o CPF usando o br-validations
            },
            message: props => `${props.value} CPF inválido!`
        }
    },
    celular: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                const isValid = validatePhone(v);
                console.log(`Validando celular: ${v}, válido: ${isValid}`);
                return isValid;  // Valida o celular usando o br-validations
            },
            message: props => `${props.value} número de telefone inválido!`
        }
    },
    cep: { 
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                const isValid = validateCep(v);
                console.log(`Validando CEP: ${v}, válido: ${isValid}`);
                return isValid;  // Valida o CEP usando o br-validations
            },
            message: props => `${props.value} CEP inválido.`
        }
    },
    pais: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: false },
    time_do_usuario: { type: String, required: true },
}, {
    timestamps: true,  // Adiciona campos de timestamp (createdAt, updatedAt)
});

// Middleware para criptografar a senha antes de salvar
userSchema.pre('save', async function(next) {
    console.log('Iniciando criptografia da senha...');
    this.senha = await bcrypt.hash(this.senha, 10);  // Criptografa a senha
    console.log('Senha criptografada com sucesso.');
    next();
});

// Exporta o modelo User
export const User = mongoose.model('User', userSchema);
