const basepath = "http://localhost:3000/registro";

const postRegistro = async (RegistroUnificado) => {
  try {
    // Formata a data de nascimento no padrão que o banco de dados espera
    const dataNascimentoFormatada = new Date(RegistroUnificado.data_nascimento).toISOString().replace("Z", "+00:00");

    console.log(RegistroUnificado)
    
    const payload = {
      ...RegistroUnificado,
      data_nascimento: dataNascimentoFormatada  // Nome da chave corrigido para "data_nascimento"
    };
    
    const response = await fetch(basepath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log(payload);

    if (response.ok) {
      const data = await response.json();
      console.log("Usuário registrado com sucesso:", data);
      return data;
    } else {
      console.log("Erro na requisição:", response.status);
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (err) {
    console.error("Erro:", err);
    throw err;
  }
};


export const registroService = { postRegistro };