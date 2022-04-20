import Modal from './modal.js'

const modal = Modal()

// PEGAR TODOS OS BOTÕES QUE EXISTE COM A CLASSE CHECK
const checkButtons = document.querySelectorAll('.actions a.check')

// PEGAR QUANDO O MARCAR COMO LIDO FOR CLICADO

checkButtons.forEach(button => {
  //adicionar a escuta
  button.addEventListener('click', event => {
    // ABRIR MODAL
    modal.open()
  })
})

// /*Quando o botão delete for clicado ele abre a modal */
// const deleteButton = document.querySelectorAll('.actions a.delete')

// deleteButton.forEach(button => {
//   button.addEventListener('click', event => handleClick(event, false))
// })
