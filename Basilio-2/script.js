// Alternar entre abas (Login e Cadastro)
function showTab(tabIndex) {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const tabs = document.querySelectorAll('.tab-btn');

  if (tabIndex === 0) {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }

  tabs.forEach((tab, index) => {
    if (index === tabIndex) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
}

// Validação do formulário de Cadastro
document.getElementById('registerForm').addEventListener('submit', function(e) {
  const senha = document.getElementById('registerSenha').value;
  const confirmSenha = document.getElementById('confirmSenha').value;
  const messageEl = document.getElementById('registerMessage');

  if (senha.length < 6) {
    e.preventDefault();
    messageEl.textContent = "A senha deve ter no mínimo 6 caracteres!";
    messageEl.style.color = "red";
    return;
  }

  if (senha !== confirmSenha) {
    e.preventDefault();
    messageEl.textContent = "As senhas não coincidem!";
    messageEl.style.color = "red";
    return;
  }

  messageEl.textContent = "";
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  const email = document.getElementById('loginEmail').value;
  const senha = document.getElementById('loginSenha').value;
  const messageEl = document.getElementById('loginMessage');

  if (!email || !senha) {
    e.preventDefault();
    messageEl.textContent = "Preencha email e senha!";
    messageEl.style.color = "red";
  }
});

window.onload = () => {
  showTab(0);
};