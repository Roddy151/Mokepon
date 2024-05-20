//const { application } = require("express")
//const { json } = require("express/lib/response")

//Declaración de variables y selección de elementos con sus respectivos IDs
const spanvidasEnemigos=document.getElementById('vida-enemigo')
const spanvidasJugador=document.getElementById('vida-jugador')
const sectionReiniciar=document.getElementById('reiniciar')
const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReniniciar=document.getElementById("boton-reiniciar") 
const imagenMascota=document.getElementById('imagen-mascota')
const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
const spanMascotaJugador= document.getElementById('mascota-jugador')
const spanMascotaJugador1= document.getElementById('mascota-jugador1')
const imagenMascota1=document.getElementById('imagen-mascota-enemigo')
const spanMascotaEnemigo=document.getElementById('mascota-enemigo')
const spanMascotaEnemigo1=document.getElementById('mascota-enemigo1')
const sectionResultado1 = document.getElementById('resultado-contienda')
const AtaqueDelJugador = document.getElementById('ataque-del-jugador')
const AtaqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const sectionResultadoFinal = document.getElementById('mensaje')
const contenedorTarjetas=document.getElementById('contenedorTarjetas')
const contenedorAtaques=document.getElementById('contenedorAtaques')
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
let jugadorId = null
let miMokepon
let mokeponEnemigo = []
let mokepones = []
let ataqueJugador= []
let ataquesMokeponEnemigo =[]
let ataqueEnemigo= []
let indexAtaqueJugador
let indexAtaqueEnemigo
let puntosJugador=0
let puntosEnemigo=0
let empates=0
let varResultado= ' '
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let mascotaJugador
let ataquesMoquepon
let botonAgua
let botonFuego
let botonTierra
let botones = []
let vidaJugador
let vidaEnemigo
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'
let targetHeight
let mapWidth = window.innerWidth
let maxMapWidth = 700
if(mapWidth>maxMapWidth){
    mapWidth=maxMapWidth-30
}

console.log(window.innerWidth)
targetHeight= ((mapWidth * 768) / 1366)
console.log(targetHeight, mapWidth)

mapa.width= mapWidth
mapa.height = targetHeight
class Mokepon{
    constructor(nombre, foto, vida, fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapWidth - this.ancho)
        this.y = aleatorio(0, targetHeight - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa 
        this.velocidadx = 0
        this.velocidady = 0
    }
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.alto,
            this.ancho,
        )
    }
}
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5, './assets/hipodoge.png')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5, './assets/capipepo.png')
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5, './assets/ratigueya.png')
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis2.png')
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png')
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png')

//Mokepones Enemigo
/*let hipodogeEnemigo = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5, './assets/hipodoge.png')
let capipepoEnemigo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5, './assets/capipepo.png')
let ratigueyaEnemigo = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5, './assets/ratigueya.png')
let langostelvisEnemigo = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/langostelvis2.png')
let tucapalmaEnemigo = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/tucapalma.png')
let pydosEnemigo = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/pydos.png')*/

const Hipodoge_Ataques= [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
]


hipodoge.ataques.push(...Hipodoge_Ataques) 

const Capipepo_Ataques=[ 
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
]

capipepo.ataques.push(...Capipepo_Ataques)
   
const Ratigueya_Ataques = [
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
]

ratigueya.ataques.push(...Ratigueya_Ataques)
    
const Langostelvis_Ataques = [
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
]

langostelvis.ataques.push(...Langostelvis_Ataques)

const Tucapalma_Ataques=[
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
]

tucapalma.ataques.push(...Tucapalma_Ataques)

const Pydos_Ataques=[
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
]

pydos.ataques.push(...Pydos_Ataques)

/*
hipodogeEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
capipepoEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
langostelvisEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
tucapalmaEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
pydosEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)*/
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)
//mokeponEnemigo.push(hipodogeEnemigo, capipepoEnemigo, ratigueyaEnemigo, langostelvisEnemigo, tucapalmaEnemigo, pydosEnemigo)
function iniciarJuego() {
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById('Capipepo')
    inputRatigueya = document.getElementById('Ratigueya')
    inputLangostelvis = document.getElementById('Langostelvis')
    inputTucapalma = document.getElementById('Tucapalma')
    inputPydos = document.getElementById('Pydos')
    })
      //nos permite escuchar cuando hacen click en el boton
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)    
    
    botonReniniciar.addEventListener('click', reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
    .then(function(res) {
        if(res.ok){
            res.text()
                .then(function(respuesta) {
                    console.log(respuesta)
                    jugadorId=respuesta
                })
        }
    })
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaJugador(){
    //Ocultar el elemento estableciendo su propiedad "display" en "none"
    sectionSeleccionarMascota.style.display = 'none'   
    
    //sectionSeleccionarAtaque.style.display = 'flex'  
    
       

    // Verificar cuál opción está marcada en el formulario y actualizar el contenido e imagen correspondiente
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        spanMascotaJugador1.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
        imagenMascota.src= hipodoge.foto
        imagenMascota.alt= inputHipodoge.id
    }
    else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        spanMascotaJugador1.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        imagenMascota.src= capipepo.foto
        imagenMascota.alt= inputCapipepo.id
    }
    else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        spanMascotaJugador1.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        imagenMascota.src = ratigueya.foto
        imagenMascota.alt= inputRatigueya.id
    }
    else if(inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        spanMascotaJugador1.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
        imagenMascota.src = langostelvis.foto
        imagenMascota.alt = inputLangostelvis.id
    }
    else if(inputTucapalma.checked){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        spanMascotaJugador1.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
        imagenMascota.src = tucapalma.foto
        imagenMascota.alt = inputTucapalma.id
    }
    else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = inputPydos.id
        spanMascotaJugador1.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
        imagenMascota.src = pydos.foto
        imagenMascota.alt = inputPydos.id
    }
    else{
        spanMascotaJugador.innerHTML = ' '
    }

    
    seleccionarMokepon(mascotaJugador) // Llamar a una función, enviar el dato al back

    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
    extraerAtaques(mascotaJugador)
    // Llamar a las funciones "seleccionarMascotaEnemigo" y "vidas"
    //seleccionarMascotaEnemigo();
    vidas();
}
function seleccionarMokepon(mascotaJugador){
    console.log(mascotaJugador)
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({
            mokepon: mascotaJugador
        })
    })

}

function extraerAtaques(mascotaJugador){
    let ataques
    //mokepones.length identifica cuantos elemento tiene el arreglo llamado mokepones
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques         
        }
    }
    console.log(ataques)
    mostrarAtaque(ataques)
}
function mostrarAtaque(ataques){
    ataques.forEach((ataque) => {
        ataquesMoquepon = `<button id =${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>`
        contenedorAtaques.innerHTML += ataquesMoquepon
    });
    botonAgua=document.getElementById('boton-agua') // Seleccionar el botón de agua por su id
    botonFuego=document.getElementById("boton-fuego") // Seleccionar el botón de fuego por su id
    botonTierra=document.getElementById("boton-tierra") // Seleccionar el botón de tierra por su id
    botones = document.querySelectorAll('.BAtaque')
    console.log(botones)
}
function secuenciaAtaques(enemigo){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            console.log(e)
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'   
                boton.disabled = true // Deshabilitar el botón de fuego
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('Agua')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled=true // Deshabilitar el botón de agua  
            } else {
                ataqueJugador.push('Tierra')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled=true // Deshabilitar el botón de tierra
            }
            ataqueAleatorio(enemigo)
        })
    })
}
function seleccionarMascotaEnemigo(enemigo){
    // Función para seleccionar la mascota enemiga
    //let mascotaEnemigo=aleatorio(0,mokepones.length-1)
    // asignamos la opción correspondiente del objeto a las variables
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    spanMascotaEnemigo1.innerHTML = enemigo.nombre
    imagenMascota1.src = enemigo.foto
    imagenMascota1.alt= enemigo.nombre 
    atquesMokeponEnemigo = enemigo.ataques   
    secuenciaAtaques(enemigo)
}
function ataqueAleatorio(enemigo){
    //Identificamos la posición/indice del último elemento del arreglo llamado ataquesMokeponEnemigo
    console.log(mokeponEnemigo, enemigo)
    for (let i = 0; i < mokeponEnemigo.length; i++) {
        if (enemigo.nombre == mokeponEnemigo[i].nombre) {
            ataquesMokeponEnemigo = mokeponEnemigo[i].ataques         
        }
    }
    console.log('despues del for', ataquesMokeponEnemigo)
    
    let ataque = aleatorio(0,ataquesMokeponEnemigo.length-1)
    
    if (ataquesMokeponEnemigo[ataque].nombre === '🔥') {
        ataqueEnemigo.push('Fuego')
        console.log(ataqueEnemigo)        
        
    } else if (ataquesMokeponEnemigo[ataque].nombre === '💧') {
        ataqueEnemigo.push('Agua')
        console.log(ataqueEnemigo)      
        
    } else {
        ataqueEnemigo.push('Tierra')
        console.log(ataqueEnemigo)
    }           
    comenzarPelea()
    vidas()
} 
function comenzarPelea() {
    if (ataqueJugador.length == 5){
        resultado()
        console.log(empates)
        console.log(puntosEnemigo)
        console.log(puntosJugador)
    }
} 
function resultado(){
    for (let index = 0; index < ataqueJugador.length; index++) {
        if ((ataqueJugador[index]=='Agua' && ataqueEnemigo[index]=='Fuego') || (ataqueJugador[index]=='Fuego' && ataqueEnemigo[index]=='Tierra') || (ataqueJugador[index]=='Tierra' && ataqueEnemigo[index]=='Agua')){
            console.log(index)
            indexAmbosOponente(index, index)
            crearMensaje()
            puntosJugador= puntosJugador + 1
            //varResultado='Ganaste'
            //vidaEnemigo-=1
        } else if(ataqueJugador[index]==ataqueEnemigo[index]){
            indexAmbosOponente(index, index)
            crearMensaje()
            empates = empates + 1            
            //varResultado='Empate'        
        } else {
            indexAmbosOponente(index, index)
            puntosEnemigo = puntosEnemigo + 1  
            crearMensaje()  
            //varResultado='Perdiste'
            //vidaJugador-=1
        }
    }  
}
function vidas(){
    spanvidasEnemigos.innerHTML=puntosEnemigo
    spanvidasJugador.innerHTML=puntosJugador
    revisarVidas()    
}
function revisarVidas(){
    if (ataqueJugador.length==5){
        if(puntosJugador>puntosEnemigo){
            crearMensajeFinal('Has Ganado')
        }else if (puntosJugador==puntosEnemigo){
            crearMensajeFinal('Es un Empate')
        }else{
            crearMensajeFinal('Has Perdido')
        }
    }
}
function indexAmbosOponente(jugador, enemigo) {
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function crearMensaje(){
    // Crear un nuevo elemento <p> para mostrar el resultado
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    sectionResultado1.innerHTML = varResultado
    nuevoAtaqueDelJugador.innerHTML= indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML= indexAtaqueEnemigo
    // Agregar los elementos creados a las secciones correspondientes en el documento
    AtaqueDelJugador.appendChild(nuevoAtaqueDelJugador);
    AtaqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(respuestaFinal){
    // Seleccionar el elemento con el id "mensaje"
    sectionResultadoFinal.innerHTML = respuestaFinal
    // Mostrar el elemento con display "flex"
    sectionReiniciar.style.display = 'block'
}
function reiniciarJuego(){
    location.reload()
}
function pintarCanvas(){
    miMokepon.x= miMokepon.x + miMokepon.velocidadx
    miMokepon.y= miMokepon.y + miMokepon.velocidady
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height,
    )
    miMokepon.pintarMokepon()

    


    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    tucapalmaEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
    pydosEnemigo.pintarMokepon()
    langostelvisEnemigo.pintarMokepon()
    if(miMokepon.velocidadx !== 0 || miMokepon.velocidady !== 0){
        revisarColisiones(hipodogeEnemigo)
        revisarColisiones(capipepoEnemigo)
        revisarColisiones(pydosEnemigo)
        revisarColisiones(ratigueyaEnemigo)
        revisarColisiones(langostelvisEnemigo)
        revisarColisiones(tucapalmaEnemigo)
    }

    enviarPosicion(miMokepon.x, miMokepon.y)
}
function enviarPosicion(x, y){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res) {
        if(res.ok){
            res.json()
                .then(function({ enemigos }){
                    console.log(enemigos)
                })
                    
        }
    })
}

function moverArriba(){
    miMokepon.velocidady = - 5
    
}
function moverIzquierda(){
    miMokepon.velocidadx = - 5
    
}function moverAbajo(){
    miMokepon.velocidady = 5
    
}function moverDerecha(){
    miMokepon.velocidadx = 5
    
}
function detenerMoviento() {
    miMokepon.velocidadx= 0
    miMokepon.velocidady= 0
}
function sePresionoUnaTecla(event) {
        switch (event.key) {
        case 'ArrowUp':
            moverArriba()            
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break    
    
        default:
            break;
    }

}
function iniciarMapa() {
    miMokepon = obtenerObjeto(mascotaJugador)
    // permite llamar a una función cada cierto tiempo (50ms)
    intervalo= setInterval(pintarCanvas,50) 
    window.addEventListener('keydown', sePresionoUnaTecla)
    window.addEventListener('keyup', detenerMoviento)
}
function obtenerObjeto(){

    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
            return mokepones[i]         
        }
    }
}
function revisarColisiones(enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = miMokepon.y
    const abajoMascota = miMokepon.y + miMokepon.alto
    const derechaMascota = miMokepon.x + miMokepon.ancho
    const izquierdaMascota = miMokepon.x
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo||
        izquierdaMascota > derechaEnemigo
        ){
            return
    }
    detenerMoviento()
    clearInterval(intervalo)
    alert("Hay colisión con " + enemigo.nombre)
    seleccionarMascotaEnemigo(enemigo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
}
window.addEventListener('load', iniciarJuego)