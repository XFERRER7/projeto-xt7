getPosition = () => {
  var elemento = document.getElementById('sobre')

  posicao = elemento.getBoundingClientRect().y;
  console.log(posicao)
  alert(posicao)
}

getPosition();

