class MobileNavbar {
  constructor(mobileMenu, navList, navLinks, button) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";
    this.button = document.getElementById(button);

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {

      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();

    if (this.navList.classList.contains('active')) {
      this.button.style.
    }
    else {
      this.button.style.display = "inline-block";
    }

    var menu = document.getElementById('menu-mobile')
    var lista = document.getElementById('list-nav')
    document.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        menu.classList.remove('active')
        lista.classList.remove('active')
      }
    })



  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }



    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
  "button-contact-redirect"
);
mobileNavbar.init();