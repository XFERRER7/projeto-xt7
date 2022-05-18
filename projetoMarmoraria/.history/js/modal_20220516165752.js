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
  document.querySelectorAll()
}