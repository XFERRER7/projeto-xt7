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
      if(el == 'ardosia' || el == 'ardosia-title') {
        openModal('ardosia-info')
      }
      else if(el == 'granito' || el == 'granito-title') {
        openModal('granito-info')
      }
      else if(el == 'marmoglass' || el == 'marmoglass-title') {
        openModal('marmoglass-info')
      }
      else if(el == 'marmore' || el == 'marmore-title') {
        openModal('marmore-info')
      }
      else if(el == 'nanoglass' || el == 'nanoglass-title') {
        openModal('nanoglass-info')
      }
      else if(el == 'onyx' || el == 'onyx-title') {
        openModal('onyx-info')
      }
      else if(el == 'granito' || el == 'granito-title') {
        openModal('granito-info')
      }
      else if(el == 'granito' || el == 'granito-title') {
        openModal('granito-info')
      }
      else if(el == 'granito' || el == 'granito-title') {
        openModal('granito-info')
      }
      else if(el == 'granito' || el == 'granito-title') {
        openModal('granito-info')
      }
      else if(el == 'granito' || el == 'granito-title') {
        openModal('granito-info')
      }
      else if(el == 'granito' || el == 'granito-title') {
        openModal('granito-info')
      }
      
    })
  })
}

getClick();

