var menu = document.getElementById('menu-mobile')
var lista = document.getElementById('list-nav')
document.addEventListener('scroll', () => {
  if(window.pageYOffset > 500) {
    menu.classList.remove('active')
    lista.classList.remove('active')
  }
  else {
    menu.classList.remove('active')
    lista.classList.remove('active')
  }
  return;
})



