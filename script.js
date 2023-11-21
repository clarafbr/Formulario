function validaFormulario(){
    const nome = document.getElementById('nome').value;
    const email = document.querySelector('#email').value;
    const senha = document.getElementById('senha').value;

    // Validação dos campos preenchidos
    if(nome == ''|| email == ''|| senha == ''){
        alert(`Por favor, preencha os campos.`)
    }
    //Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^^\s@]+$/
    if(!emailRegex.test(email)){
        alert(`Por favor, insira um e-mail válido!`)
    }

    //Validação da senha
    /*if(senha > 8){
        alert(`Limite de carácter excedido! Defina uma nova senha!`)
    }*/

    alert(`Cadastro realizado com sucesso!`)
}