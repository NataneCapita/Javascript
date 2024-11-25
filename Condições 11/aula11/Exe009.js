

 var agora=new Date()
 var hora=agora.getHours
 console.log(`Agora Sao exatamente ${hora} horas`)
 if(hora<=11){
    console.log('bom dia')
 }else if(hora<=17){
    console.log('boa tarde')
 }else if(hora<=23){
    console.log('boa noite')
 }else{
    console.log('boa madrugada')
 }