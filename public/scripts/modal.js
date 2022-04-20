export default function Modal() {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    // ATRIBUIR A CLASSE ACTIVE PARA A MODAL
    modalWrapper.classList.add('active')
  }

  function close() {
    // REMOVER A CLASSE ACTIVE DA MODAL
    modalWrapper.classList.remove('active')
  }

  return {
    open,
    close
  }
}
