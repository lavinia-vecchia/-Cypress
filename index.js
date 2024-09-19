function validar(event){
    event.preventDefault()

    const user = document.getElementById('user').value
    const password = document.getElementById('password').value


    if(user === 'admin' && password === 'admin123'){
        alert(`Log-in efetuado com sucesso.`)
    } else(document.getElementById('mensagemErro').style.opacity = '1')
}