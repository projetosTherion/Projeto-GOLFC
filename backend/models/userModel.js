import mongoose from "mongoose";

// Função de validação de telefone
function telefone_validation(telefone) {
    // Retira todos os caracteres menos os números
    telefone = telefone.replace(/\D/g, '');

    // Verifica se tem a quantidade de números correta
    if (!(telefone.length >= 10 && telefone.length <= 11)) return false;

    // Se tiver 11 caracteres, verificar se começa com 9 (número de celular)
    if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9) return false;

    // Verifica se não é nenhum número repetido (ex: 11111111111)
    for (var n = 0; n < 10; n++) {
        if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n)) return false;
    }

    // DDDs válidos
    var codigosDDD = [11, 12, 13, 14, 15, 16, 17, 18, 19,
        21, 22, 24, 27, 28, 31, 32, 33, 34,
        35, 37, 38, 41, 42, 43, 44, 45, 46,
        47, 48, 49, 51, 53, 54, 55, 61, 62,
        64, 63, 65, 66, 67, 68, 69, 71, 73,
        74, 75, 77, 79, 81, 82, 83, 84, 85,
        86, 87, 88, 89, 91, 92, 93, 94, 95,
        96, 97, 98, 99];

    // Verifica se o DDD é válido
    if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1) return false;

    // Verificação extra de números de telefone fixo e celular (antes de 2017)
    if (new Date().getFullYear() < 2017) return true;
    if (telefone.length == 10 && [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1) return false;

    // Se passar por todas as validações, retorna true
    return true;
}
// Função de validação de CPF
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false
    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
    cpf = cpf.split('').map(el => +el)
    const rest = (count) => (cpf.slice(0, count-12)
        .reduce( (soma, el, index) => (soma + el * (count-index)), 0 )*10) % 11 % 10
    return rest(10) === cpf[9] && rest(11) === cpf[10]
}

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
    document.getElementById("msgemail").innerHTML="E-mail válido";
    alert("E-mail valido");
    }
    else{
    document.getElementById("msgemail").innerHTML="<font color='red'>E-mail inválido </font>";
    alert("E-mail invalido");
    }
    }
// Definindo o schema do usuário
const userSchema = mongoose.Schema({
    nome: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        //validate: {
        //    validator: validacaoEmail,
        //    message: props => `${props.value} E-mail inválido!`
        //}
    },
    role: { type: String, required: true, default: 'user' },
    senha: { type: String, required: true },
    data_nascimento: { type: Date, required: true },
    documentoID: { 
        type: String, 
        required: true,
        validate: {
            validator: isValidCPF,
            message: props => `${props.value} CPF inválido!`
        }
    },
    celular: { 
        type: String, 
        required: true,
        validate: {
            validator: telefone_validation,
            message: props => `${props.value} número de telefone inválido!`
        }
    },
    cep: { 
        type: String, 
        required: true,
        validate: {
            validator: function(v) {
                return /^[0-9]{5}-[0-9]{3}$/.test(v);
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
    timestamps: true,
});

// Exporta o modelo User
export const User = mongoose.model('User', userSchema);
