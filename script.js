function filterCars() {
  const select = document.getElementById('car-category');
  const selectedCategory = select.value;
  const elementos = document.querySelectorAll('.elemento');

  elementos.forEach(elemento => {
      if (selectedCategory === 'todos' || elemento.classList.contains(selectedCategory)) {
          elemento.classList.remove('hidden');
      } else {
          elemento.classList.add('hidden');
      }
  });
}

// Adiciona eventos de toque e clique ao select para desativar temporariamente o ponteiro do mouse sobre as imagens em dispositivos móveis
const select = document.getElementById('car-category');

let isTouchDevice = 'ontouchstart' in document.documentElement;

if (isTouchDevice) {
  select.addEventListener('touchstart', () => {
      const imagens = document.querySelectorAll('.imagem-container img');
      imagens.forEach(imagem => {
          imagem.style.pointerEvents = 'none';
      });
  });

  select.addEventListener('touchend', () => {
      const imagens = document.querySelectorAll('.imagem-container img');
      imagens.forEach(imagem => {
          imagem.style.pointerEvents = 'auto';
      });
  });
} else {
  select.addEventListener('click', () => {
      const imagens = document.querySelectorAll('.imagem-container img');
      imagens.forEach(imagem => {
          imagem.style.pointerEvents = 'none';
      });
  });

  select.addEventListener('blur', () => {
      const imagens = document.querySelectorAll('.imagem-container img');
      imagens.forEach(imagem => {
          imagem.style.pointerEvents = 'auto';
      });
  });
}

// Executa o filtro ao carregar a página
document.addEventListener('DOMContentLoaded', filterCars);
