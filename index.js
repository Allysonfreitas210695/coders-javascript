const usuários = [
  {
    email: "allyson@123.com",
    senha: "123"
  },
  {
    email: "bruno@123.com",
    senha: "12345"
  }
];

function login() {
  let email = document.querySelector("input#email").value;
  let senha = document.querySelector("input#senha").value;
  let acesso = false;

  if(email === '' || senha === ''){
    alert("Campo "+(email == '' && senha === '' ? 'Email e senha estão vazio!' : (senha == '' ? 'Senha estão vazio' : 'email estão vazio')));
  }
  
  for(let user of usuários) {
     if(user.email === email && user.senha === senha) {
       acesso = true;
     }
  }

  alert((!acesso ? "Negado"  : "Acesso Permitido"))
}
