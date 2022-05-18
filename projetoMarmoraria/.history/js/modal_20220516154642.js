function openModal(modalId) {
  
  const modal = document.getElementById(modalId);

  modal.c

  modal.addEventListener('click', (e) => {
    

    if(e.target.id == modalId || e.target.className == 'fechar') {
      modal.classList.remove('mostrar');
    }
  })

}

const itemA = document.getElementById('item-a')

itemA.addEventListener('click', () => openModal('modal-container'));
