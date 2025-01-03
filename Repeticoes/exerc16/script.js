

function contar() {
    let ini=document.getElementById('txtni')
    let fim=document.getElementById('txtnf')
    let pass=document.getElementById('txtnp')
    let res=document.getElementById('res')
     
    if( ini.value.length ==0 || fim.value.length ==0 || pass.value.length ==0){
         alert('[ERROR] Faltam dados!')
        }else{
            res.innerHTML= 'Contando: '
            let i=Number(ini.value)
            let f=Number(fim.value)
            let p=Number(pass.value)
            if(i<f) {
                for(let c =i; c <= f; c +=p){
                res.innerHTML += ` ${c}\u{1f449}` 
            }
            }else{
                for(let c =i; c >= f; c -=p){
                    res.innerHTML += ` ${c}\u{1f449}` 
            }
         
            res.innerHTML+=`\u{1F3c1}`
            }
         }
     }

