
function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.querySelector('div#res')  
 
    if (fano.value.length == 0 || (fano.value) > ano) {
     window.alert('[ERRO] Verifique os dados e tente novamente')
     } 
     else{
         var fsexo=document.getElementsByName('radsexo')
         var idade= ano - (fano.value)
         var img=document.createElement('img')
         img.setAttribute('id','foto')
         var genero= ''
         //Homem
         if (fsexo[0].checked) {
             genero='Homem'
            if (idade >=0 && idade<12){
                img.setAttribute('src','crianmasculino1.jpg')
            }else if(idade<21){
                img.setAttribute('src','jovemmasculi1.jpg')
            }else if(idade<59){
            img.setAttribute('src','adulto1.jpg')   
            }else{
            img.setAttribute('src','idosomasc1.jpg')}
        }//Mulher
        else if (fsexo[1].checked){
             genero='Mulher' 
             if(idade>=0 && idade<12){
                img.setAttribute('src','crianfemen.jpg')
             }else if(idade<21){
                img.setAttribute('src','jovfemen1.jpg')
             }else if (idade<59){
                img.setAttribute('src','adulta1.jpg')
             }else{
                img.setAttribute('src','idosofemen1.jpg')
             }
             }
             res.style.textAlign= 'center'
             res.innerHTML=`Detetamos ${genero} com ${idade} anos`
             res.appendChild(img)
}
  }   
 