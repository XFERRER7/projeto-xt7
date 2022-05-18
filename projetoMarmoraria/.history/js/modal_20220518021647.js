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
 
}
getClick();
