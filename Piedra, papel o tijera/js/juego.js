 //1 es piedra, 2 es papel, 3 es tijera
 function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function eleccion(eleccion){
    let resultado = " "
    if(eleccion==1){
        resultado = "🥌"
    } 
    else if(eleccion==2){
        resultado = "📃"
    }
    else if (eleccion==3){
        resultado = "✂"
    }
    else{
        resultado = "Mal elegido"
    }      
    return resultado        
}
let jugador = 0
let pc = 0
let triunfos = 0 
let perdidas = 0
while(triunfos < 3 && perdidas < 3){
    pc=aleatorio(1, 3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, y 3 para tijera")
    alert("Elegiste " + eleccion(jugador))
    alert("PC elegió " + eleccion(pc))
    //combate
    if(pc==jugador){
        alert("Empate")
    }
    else if((jugador==1 && pc==3) || (jugador==2 && pc==1) || (jugador==3 && pc==2)){
        alert("Ganaste")
        triunfos = triunfos +1
    }
    else{ 
        alert("Perdiste")
        perdidas=perdidas+1
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")