// ===== Efeito typewriter no título do hero =====
// Alterna entre as especializações, digitando e apagando em loop infinito
const especialidades = [
  'Desenvolvedor Fullstack',
  'Builder de SaaS',
  'Especialista em Automação com IA',
  'Criador de Sistemas Reais'
];

const typewriterEl = document.getElementById('typewriter');
let fraseIndex = 0;
let charIndex = 0;
let apagando = false;

function typewriterLoop() {
  const fraseAtual = especialidades[fraseIndex];
  let velocidade = apagando ? 40 : 80;

  if (!apagando) {
    charIndex++;
    typewriterEl.textContent = fraseAtual.substring(0, charIndex);
    if (charIndex === fraseAtual.length) {
      apagando = true;
      velocidade = 1800; // pausa antes de apagar
    }
  } else {
    charIndex--;
    typewriterEl.textContent = fraseAtual.substring(0, charIndex);
    if (charIndex === 0) {
      apagando = false;
      fraseIndex = (fraseIndex + 1) % especialidades.length;
      velocidade = 400; // pausa antes de digitar a próxima
    }
  }

  setTimeout(typewriterLoop, velocidade);
}

typewriterLoop();

// ===== Menu mobile (hambúrguer) =====
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMobile.classList.toggle('active');
});

// Fecha o menu mobile ao clicar em um link
navMobile.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMobile.classList.remove('active');
  });
});

// ===== Fade-in das seções ao rolar a página =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
