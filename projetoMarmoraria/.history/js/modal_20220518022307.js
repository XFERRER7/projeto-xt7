function openModal(modalId) {

  const modal = document.getElementById(modalId);

  modal.classList.add('mostrar');

  modal.addEventListener('click', (e) => {


    if (e.target.id == modalId || e.target.className == 'fechar') {
      modal.classList.remove('mostrar');
    }
  })

}

const item = document.getElementById(el)

item.addEventListener('click', () => openModal('modal-info'));



document.querySelectorAll('div.item-catalogo').forEach(function (elemento) {
  elemento.addEventListener('click', (e) => {
    var el = e.target.id;
    return el;
  })
})
