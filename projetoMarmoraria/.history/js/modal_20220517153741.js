function openModal(modalId) {
  
  const modal = document.getElementById(modalId);

  modal.classList.add('mostrar');

  modal.addEventListener('click', (e) => {
    

    if(e.target.id == modalId || e.target.className == 'fechar') {
      modal.classList.remove('mostrar');
    }
  })

}

const item = document.getElementById('ardosia')

item.addEventListener('click', () => openModal('modal-info'));


function getClick() {
  document.querySelectorAll('div.item-catalogo').forEach(function(elemento) {
    elemento.addEventListener('click', (e) => {
      const el = e.target.id  ;
      console.log(el);
    })
  })
}
