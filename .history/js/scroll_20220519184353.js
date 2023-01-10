var menu = document.getElementById('menu-mobile')
var lista = document.getElementById('list-nav')
document.addEventListener('scroll', () => {
  if(window.pageYOffset > 800) {
    menu.classList.remove('active')
    
  }
  return;
})



