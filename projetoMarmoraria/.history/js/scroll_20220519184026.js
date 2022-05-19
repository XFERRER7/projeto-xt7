getPosition = () => {
  var elemento = document.getElementById('sobre')

  posicao = elemento.getBoundingClientRect().y;
  console.log(posicao)
}

document.addEventListener('scroll', () => {
  if(window.pageYOffset > 800) {
    console.log('ok')
    
  }
  return;
})


getPosition();

