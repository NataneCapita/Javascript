
function carregar() {
    var msg =window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')
    var data =new Date()
    //var hora=8
    var hora =data.getHours()
    var min=data.getMinutes()
    msg.innerHTML=(`Agora sao ${hora} horas e ${min} minutos.`)
if (hora >= 0 && hora <12){
    img.src='manha.png';
    document.body.style.background='#a1a99f '
    
}else if(hora >=12 && hora<18){
    img.src='tarde...png'
    document.body.style.background='#a86530'
}else{
    img.src='noite.png'
    document.body.style.background= '#5d2518'
}

}   

