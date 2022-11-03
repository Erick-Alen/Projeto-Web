function showModal(idModal){
  const modal = document.getElementById(idModal);
  if(modal){
    modal.classList.add('show');//adiciona a estilização (show) do css, ou seja, faz aparecer o modal.
    modal.addEventListener('click', (event)=>{
      event.preventDefault()
      if(event.target.id == 'idModal' || event.target.className == 'logOutModal'){
        modal.classList.remove('show')
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        hideTableButton('contaheader')
      } else if(event.target.id == 'idModal' || event.target.className == 'closeButton'){
        showTableButton('contaheader')
        modal.classList.remove('show')
      }
    })
  }
}

function showTableButton(button){
  const btn = document.getElementById(button);
  if(btn){
    btn.classList.add('show');
  }
}

function hideTableButton(button){
  const btn = document.getElementById(button);
  if(btn){
    btn.classList.remove('show');
  }
}



const loginImage = document.querySelector('#login-image');
loginImage.addEventListener('click', () => {
  showModal('background-modal')
})

const showCryptoModalButton = document.querySelector('#contaheader');
showCryptoModalButton.addEventListener('click', () => {
  showModal('crypto-modal')
})

function verificaLogin(){
  if (localStorage.getItem('token') != null) {
    let email = localStorage.getItem('email');
    let helloUser = document.querySelector('.helloContainer');
    helloUser.innerHTML += email;
    showModal('crypto-modal')
  }
}



