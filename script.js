function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#iano')
    var msg = document.querySelector('div#msg')
    if (fano.value.length == 0){
        img.setAttribute('src', 'Especiais/hum')
    }else{
        var sex = document.getElementsByName('Sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Homem'
            if(idade < -1){
                img.setAttribute('src', 'Especiais/hum.png')
            }
            else if(idade <5){
                //baby
                img.setAttribute('src', 'baby.png')
            }else if(idade < 10){
                //criança
                img.setAttribute('src', 'criança/H.png')
            }else if(idade < 14){
                //adolescente
                img.setAttribute('src', 'adolescentes/H.png')
            }else if(idade < 25){
                //jovens
                img.setAttribute('src', 'jovens/H.png')
            }else if(idade < 35){
                //adulto
                img.setAttribute('src', 'adulto/H.png')
            }else if(idade <49){
                //meia idade
                img.setAttribute('src', '40/H.png')
            }else if(idade < 100){
                //idoso
                img.setAttribute('src', 'idosa/H.png')
            }else if(idade < 150){
                //easter-eggs
                img.setAttribute('src', 'ta/H.png')
            }else{
                img.setAttribute('src', 'Especiais/V.png')
            }
        }else if(sex[1].checked){
            genero = 'Mulher'
            if(idade < -1){
                img.setAttribute('src', 'Especiais/hum.png')
            }
            else if(idade <5){
                //baby
                img.setAttribute('src', 'baby.png')
            }else if(idade < 10){
                //criança
                img.setAttribute('src', 'criança/M.png')
            }else if(idade < 14){
                //adolescente
                img.setAttribute('src', 'adolescentes/M.png')
            }else if(idade < 25){
                //jovens
                img.setAttribute('src', 'jovens/M.png')
            }else if(idade < 35){
                //adulto
                img.setAttribute('src', 'adulto/M.png')
            }else if(idade <49){
                //meia idade
                img.setAttribute('src', '40/M.png')
            }else if(idade < 100){
                //idoso
                img.setAttribute('src', 'idosa/M.png')
            }else if(idade < 150){
                //easter-eggs
                img.setAttribute('src', 'ta/M.png')
            }else{
                img.setAttribute('src', 'Especiais/V.png')
            }
        }
        msg.style.textAlign = 'center'
        msg.innerHTML = `Você tem ${idade} anos e é ${genero}`
        msg.appendChild(img)
    }
}