function mostrarSenha(){
    var inputPass = document.getElementById('password')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowPass.classList.replace('aperte', 'aperte')
    }else{
        inputPass.setAttribute('type', 'password')
        btnShowPass.classList.replace('aperte', 'aperte')
    }
}
