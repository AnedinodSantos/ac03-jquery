$('#envio').click( function(e) {
    e.preventDefault()
    let nome = $('[name=nome-aluno]').val()
    let email = $('[name=email-aluno]').val()
    let respNome = $('[name=resp-nome]')
    let respEmail = $('[name=resp-email]')

    if(nome.length == 0 || email.length == 0 ){
        respNome.val('preencha todos os campos')
        return
    }

    $.ajax(
        {
            type: 'POST',
            url: '/recebe-dados',
            data: $('form').serialize(),
            success: function(callback) {
                console.log(callback)
                respNome.val('Olá ' + callback.nome)
                respEmail.val('Seu e-mail é: ' + callback.email)
                nome.val('')
                email.val('')
            },
            error: function() {
                $(this).html("error!")
            }
        }
    )
})