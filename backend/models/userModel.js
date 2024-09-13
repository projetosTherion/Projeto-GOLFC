import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true },
    data_nascimento: { type: Date, required: true },
    documentoID: { type: String, required: true },
    celular: { type: String, required: true },
    cep: { type: String, required: true },
    pais: { type: String, required: true },
    estado: { type: String, required: true },
    cidade: { type: String, required: true },
    bairro: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    complemento: { type: String, required: false },
    time_do_usuario: { type: String, required: true },
}, {
    timestamps: true,
});

export const User = mongoose.model('User',userSchema);