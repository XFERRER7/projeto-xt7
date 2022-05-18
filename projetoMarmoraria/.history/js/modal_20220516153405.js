function openModal(modalId) {
  const modal = document.getElementById(modalId);

  modal.classList.add('mostrar');

  modal.addEventListener('click', (e) => {
    

    if(e.target.id == modalId || e.target.className == '') {
      modal.classList.remove('mostrar');
    }
  })

}