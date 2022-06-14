function verificar() {
    // Declarando variáveis
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        // verificador 
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        // img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', './assets/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './assets/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './assets/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './assets/foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', './assets/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}