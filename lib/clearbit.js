const authorization = "Bearer sk_ce0749938c1b5b621fc141a5e8d92ed7";
const email = document.getElementById("clearbitEmail");
const url = `https://person.clearbit.com/v1/people/email/${email.value}`
// SELICIONAR O INPUT COM EMAIL

// SELECIONAR O FORM PARA ESCUTAR O SUBMIT
const form = document.getElementById("clearbitForm");
// SELECIONAR CAMPOS DA TABELA PARA MOSTRAR AS INFOS
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userBio = document.getElementById("userBio");
const userLocation = document.getElementById("userLocation");
// ESCUTAR EVENTO DE SUBIT DO FORM

const appendHtml =(data) => {
  userName.innerText = data.name.fullName ? data.name.fullName : "Not Found"
  userEmail.innerText = data.email ? data.email : "Not Found"
  userBio.innerText = data.bio ? data.bio : "Not Found"
  userLocation.innerText = data.location ? data.location : "Not Found"
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("clearbitEmail");
  // FAZER UMA REQUEST DO TIPO GET PARA A API DO CLEARBIT
  fetch(`https://person.clearbit.com/v1/people/email/${email.value}`,
  {
    headers: { Authorization: authorization }
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    // MOSTRAR RESPOSTA DA API NA TELA
    appendHtml(data);
  })
})
