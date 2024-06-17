function toggleMenu() {
    var menu = document.getElementById("menu");
    var toggleButton = document.querySelector(".toggle-button");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&#10006;"; // Define o ícone de "X"
    } else {
        toggleButton.innerHTML = "&#9776;"; // Define o ícone de "☰"
    }
}
function exibirCards() {
    var select = document.getElementById("anoSelect");
    var anoSelecionado = select.value;
    var cards = document.getElementsByClassName("card");

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var dataAno = card.getAttribute("data-ano");

        if (dataAno === anoSelecionado) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}
exibirCards();
var seconds = 0;
var minutes = 0;
var hours = 0;
var timerInterval;
var isRunning = false;

// javascript do cabeçalho
class MobileNavbar {
    constructor(mobileMenu, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
      this.currentIndex = 0; // Índice atual do banner
      this.totalBanners = this.navLinks.length; // Total de banners
  
      this.handleClick = this.handleClick.bind(this);
      this.handleBannerChange = this.handleBannerChange.bind(this);
      this.startBannerLoop = this.startBannerLoop.bind(this);
      this.init();
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    handleBannerChange() {
      // Atualizar o índice do banner
      this.currentIndex = (this.currentIndex + 1) % this.totalBanners;
  
      // Esconder todos os banners
      this.navLinks.forEach(link => {
        link.style.display = "none";
      });
  
      // Mostrar o banner atual
      this.navLinks[this.currentIndex].style.display = "block";
    }
  
    startBannerLoop() {
      // Alterar o banner a cada 3 segundos
      setInterval(this.handleBannerChange, 3000);
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
        this.startBannerLoop(); // Iniciar o loop de banners
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".slide"
  );
  mobileNavbar.init();