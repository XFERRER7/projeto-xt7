getPosition = () => {
  var elemento = document.getElementById('sobre')

  posicao = elemento.getBoundingClientRect();
  console.log(posicao)
}

getPosition();

