// Seleção de elementos do DOM
const form = document.getElementById("form-visita");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");

const erroNome = document.getElementById("erro-nome");
const erroEmail = document.getElementById("erro-email");
const erroTelefone = document.getElementById("erro-telefone");

const modal = document.getElementById("modal-sucesso");
const btnFecharModal = document.getElementById("btn-fechar-modal");
const modalMensagem = document.getElementById("modal-mensagem");

// Função de validação por Regex para E-mail
function validarEmailFormat(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Evento de submissão do formulário
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Impede o recarregamento da página

  let isValid = true;

  // Reset de erros anteriores
  erroNome.innerText = "";
  erroEmail.innerText = "";
  erroTelefone.innerText = "";
  inputNome.classList.remove("invalid");
  inputEmail.classList.remove("invalid");
  inputTelefone.classList.remove("invalid");

  // Validação do Nome
  if (inputNome.value.trim().length < 3) {
    erroNome.innerText = "Por favor, digite seu nome completo.";
    inputNome.classList.add("invalid");
    isValid = false;
  }

  // Validação do E-mail
  if (!validarEmailFormat(inputEmail.value.trim())) {
    erroEmail.innerText = "Insira um e-mail válido.";
    inputEmail.classList.add("invalid");
    isValid = false;
  }

  // Validação do Telefone
  const apenasNumeros = inputTelefone.value.replace(/\D/g, "");
  if (apenasNumeros.length < 10) {
    erroTelefone.innerText = "Insira um número com DDD (mínimo 10 dígitos).";
    inputTelefone.classList.add("invalid");
    isValid = false;
  }

  // Se todos os campos estiverem válidos
  if (isValid) {
    modalMensagem.innerText = `Obrigado, ${inputNome.value.trim()}! Recebemos sua solicitação de agendamento e entraremos em contato via WhatsApp/E-mail.`;
    modal.style.display = "flex"; // Exibe o modal na tela
    form.reset(); // Limpa os campos do formulário
  }
});

// Fechar o modal ao clicar no botão
btnFecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
