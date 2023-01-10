function openModal(modalId) {

  const modal = document.getElementById(modalId);

  modal.classList.add('mostrar');

  modal.addEventListener('click', (e) => {


    if (e.target.id == modalId || e.target.className == 'fechar') {
      modal.classList.remove('mostrar');
    }
  })

}




function getClick() {
  document.querySelectorAll('div.item-catalogo').forEach(function (elemento) {
    elemento.addEventListener('click', (e) => {
      const el = e.target.id;
      if(el == 'ardosia') {
        
      }
      else if(el == 'ardosia')
      
    })
  })
}

getClick();

