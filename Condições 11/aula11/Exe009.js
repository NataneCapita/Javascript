const { vel } = require("./Exe008")

 var país='França'
console.log(`vivendo ${país}`)
if(país !='Brasil') {
    console.log('voce e estrangeiro')
} else {
    console.log('voce e brasileiro ')    
}
if (vel > '40') {
    console.log(`voce ultrapassou a velocidade permitida ,multado!`)
}
