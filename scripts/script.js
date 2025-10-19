const botao = document.getElementById('botao-tema');
const body = document.body;
const temaSalvo = localStorage.getItem('tema');

// Função para aplicar o tema (claro ou escuro)
function aplicarTema(escuro) {
  body.classList.toggle('escuro', escuro);
  // Adiciona ou remove o ícone do sol, o CSS fará o resto
  botao.innerHTML = escuro ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem('tema', escuro ? 'escuro' : 'claro');
}

// Aplica o tema salvo ao carregar a página
aplicarTema(temaSalvo === 'escuro');

botao.addEventListener('click', () => {
  // Inverte o estado atual do tema no body e aplica as mudanças
  aplicarTema(!body.classList.contains('escuro'));
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
const header = document.querySelector('header');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = header.offsetHeight;
      // Usar getBoundingClientRect para uma posição mais precisa
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});