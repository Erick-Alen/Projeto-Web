function showModal(idModal){
  const modal = document.getElementById(idModal);
  if(modal){
    modal.classList.add('show');//adiciona a estilização (show) do css, ou seja, faz aparecer o modal.
    modal.addEventListener('click', (event)=>{
      event.preventDefault()
      if(event.target.id == 'idModal' || event.target.className == 'closeButton'){
        modal.classList.remove('show')
      }
    })
  }
}

const loginImage = document.querySelector('#login-image');
loginImage.addEventListener('click', () => {
  showModal('background-modal')
})



const internalLogin = document.querySelector('#internal-login');
internalLogin.addEventListener('click', () => {
  showModal('background-modal')
})