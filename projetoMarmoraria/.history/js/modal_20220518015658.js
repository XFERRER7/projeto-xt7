function openModal(modalId) {
  
  const modal = document.getElementById(modalId);

  modal.classList.add('mostrar');

  modal.addEventListener('click', (e) => {
    

    if(e.target.id == modalId || e.target.className == 'fechar') {
      modal.classList.remove('mostrar');
    }
  })

}

const itemA = document.getElementById('ardosia')

itemA.addEventListener('click', () => openModal('modal-info'));


function getClick() {
  document.querySelectorAll('div.item-catalogo').forEach(function(elemento) {
    elemento.addEventListener('click', (e) => {
      const el = e.target.id;
      console.log(el);
    })
  })
}

getClick();


function changeColor() {
  var btn = document.getElementById('btn-change');
  var rodape = document.

  btn.addEventListener('click', () => {

  })
}