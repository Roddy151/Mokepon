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
//Declaración de variables y selección de elementos con sus respectivos IDs
const sectionResultado1 = document.getElementById('resultado-contienda')
const AtaqueDelJugador = document.getElementById('ataque-del-jugador')
const AtaqueDelEnemigo = document.getElementById('ataque-del-enemigo')
const sectionResultadoFinal = document.getElementById('mensaje')
const contenedorTarjetas=document.getElementById('contenedorTarjetas')
const contenedorAtaques=document.getElementById('contenedorAtaques')
let mokepones = []
let ataqueJugador= []
let atquesMokeponEnemigo 
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
class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}
let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.webp', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.webp', 5)
let ratigueya = new Mokepon('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.webp', 5)
let langostelvis = new Mokepon('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5)
let tucapalma = new Mokepon('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5)
let pydos = new Mokepon('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5)
hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
langostelvis.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)
tucapalma.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)
pydos.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)
mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, tucapalma, pydos)
function iniciarJuego() {
    sectionReiniciar.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'none'
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
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaJugador(){
    // Ocultar el elemento estableciendo su propiedad "display" en "none"
    sectionSeleccionarMascota.style.display = 'none'   
    sectionSeleccionarAtaque.style.display = 'flex'  
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
    extraerAtaques(mascotaJugador)
    // Llamar a las funciones "seleccionarMascotaEnemigo" y "vidas"
   seleccionarMascotaEnemigo();
   vidas();
}
function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador == mokepones[i].nombre) {
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
function secuenciaAtaques(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) =>{
            console.log(e)
            if (e.target.childNodes[0].textContent === '🔥') {
                ataqueJugador.push('Fuego')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'   
                boton.disabled = true // Deshabilitar el botón de fuego
            } else if (e.target.childNodes[0].textContent === '💧') {
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
            ataqueAleatorio()
        })
    })
}
function seleccionarMascotaEnemigo(){
    // Función para seleccionar la mascota enemiga
    let mascotaEnemigo=aleatorio(0,mokepones.length-1)
    // asignamos la opción correspondiente del objeto a las variables
    spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemigo].nombre
    spanMascotaEnemigo1.innerHTML = mokepones[mascotaEnemigo].nombre
    imagenMascota1.src = mokepones[mascotaEnemigo].foto
    imagenMascota1.alt= mokepones[mascotaEnemigo].nombre 
    atquesMokeponEnemigo = mokepones[mascotaEnemigo].ataques   
    secuenciaAtaques()
}
function ataqueAleatorio(){
    let ataque = aleatorio(0,atquesMokeponEnemigo.length-1)
    if (atquesMokeponEnemigo[ataque].nombre === '🔥') {
        ataqueEnemigo.push('Fuego')
        console.log(ataqueEnemigo)        
        
    } else if (atquesMokeponEnemigo[ataque].nombre === '💧') {
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
window.addEventListener('load', iniciarJuego)