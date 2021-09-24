const usuários = [
  {
    email: "allyson@123.com",
    senha: "123456"
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
  let isVazio = false;
  let result = '';

  if(email === '' || senha === ''){
    isVazio = true;
    result += (senha === '' && email === ''? 'Email e Senha estão vazio' : (senha === '' ? 'Senha estão vazio' : 'email estão vazio'));
  }

  for(let user of usuários) {
     if(user.email === email && user.senha === senha) {
       acesso = true;
     }
  }

  alert((!acesso || !isVazio ? "Negado"  : "Acesso Permitido"))
  if(isVazio){
    alert(result);
  }
}
