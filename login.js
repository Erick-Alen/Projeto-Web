const URL_API_LOGIN = "https://reqres.in";
let request_login = new XMLHttpRequest();

function login() {

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value

  if (validation(email, password)) {

    let data = {
      email,
      password
    }
    request_login.open("POST", URL_API_LOGIN + "/api/login", true);
    request_login.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    request_login.onreadystatechange = function () {
      if (request_login.readyState === 4 && request_login.status === 200) {
        localStorage.setItem("token", JSON.parse(request_login.responseText).token)
        localStorage.setItem("email", email)
        document.getElementById('login-image');
        document.querySelector('#background-modal').style.display = 'none';
        let emailUser = localStorage.getItem('email');
        let helloUser = document.querySelector('.helloContainer');
        helloUser.innerHTML += emailUser;
        showModal('crypto-modal');
      } else if (request_login.status === 400) {
        document.getElementsByClassName('errorMessage')[0].style.display = 'flex'

      }
    }
    request_login.send(JSON.stringify(data));
  }

}

function validation(email, password) {
  if (email.length < 3) {
    document.getElementsByClassName('errorMessage')[0].style.display = 'flex'
    document.getElementsByClassName('errorMessage')[0].textContent = 'E-mail inválido!'
    return false
  }
  if (password.length < 3) {
    document.getElementsByClassName('errorMessage')[0].style.display = 'flex'
    document.getElementsByClassName('errorMessage')[0].textContent = 'Senha inválida!'
    return false
  }
  return true
}

const submit = document.getElementsByClassName('submitButton')[0];
submit.addEventListener('click', login);
