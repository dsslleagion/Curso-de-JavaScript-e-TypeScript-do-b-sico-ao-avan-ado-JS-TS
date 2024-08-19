function eCPF(cpf) {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D+/g,'');
  
    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
      return false;
    }
  
    // Verifica se todos os dígitos são iguais
    if (/^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    // Calcula o primeiro dígito verificador
    const digito10 = calcularDigito(cpf, 10);
  
    // Calcula o segundo dígito verificador
    const digito11 = calcularDigito(cpf, 11);
  
    // Verifica se os dígitos verificadores são iguais aos informados
    return digito10 === parseInt(cpf.charAt(9)) && digito11 === parseInt(cpf.charAt(10));
  }
  
  function calcularDigito(cpf, posicao) {
    let soma = 0;
    let peso = posicao;
    for (let i = 0; i < posicao - 1; i++) {
      soma += parseInt(cpf.charAt(i)) * peso;
      peso--;
    }
  
    let resto = 11 - (soma % 11);
    if (resto === 10 || resto === 11) {
      return 0;
    } else {
      return resto;
    }
  }
  
  // Exemplo de uso
  const cpf = "411.211.511.16";
  if (eCPF(cpf)) {
    console.log(`O CPF ${cpf} é válido.`);
  } else {
    console.log(`O CPF ${cpf} é inválido.`);
  }
  
