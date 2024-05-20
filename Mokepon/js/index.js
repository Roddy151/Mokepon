const express = require("express")
const cors = require("cors")

const jugadores=[]

const app = express()

app.use(cors()) // deshabilita los problemas de tipo CORS
app.use(express.json())// habilita la capacidad de recibir las peticiones que vengan en formato json 

class Jugador{
    constructor(id){
    this.id = id
    }
    asignarMokepon(mokepon){
        this.mokepon = mokepon
    }
    actualizarPosicion(x, y){
        this.x = x
        this.y = y
    }
    asignarAtaques(ataques){
        this.ataques = ataques
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre
    }
}

app.get("/unirse", (req, res) => {
    
    const id = `${Math.random()}`
    const jugador = new Jugador(id)
        jugadores.push(jugador)
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.send(id)
})

app.post("/mokepon/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || "" 
    const nombre = req.body.mokepon || ""  // extraer mokepon del body
    const mokepon = new Mokepon(nombre) // crear un objeto tipo Mokepon
     
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId===jugador.id) // obtener el jugador dentro de la lista
    //findIndex - busca un elemento dentro de la lista que cumpla con una condición
    
    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarMokepon(mokepon)
    }
    
    console.log(jugadores)
    console.log(jugadorId)
    res.end()
})

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
    const jugadorId = req.params.jugadorId || "" 
    const x = req.body.x || 0 // accedo al valor del body y extraigo el valor de x & y
    const y = req.body.y || 0

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].actualizarPosicion(x, y)
    }
    
    const enemigos = jugadores.filter((jugador) => jugadorId !== jugador.id)
    res.send({
        enemigos
    })
})

app.post("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || "" 
    const ataques = req.body.ataques || ""  // extraer ataques del body
         
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId===jugador.id) // obtener el jugador dentro de la lista
    //findIndex - busca un elemento dentro de la lista que cumpla con una condición
    
    if(jugadorIndex >= 0) {
        jugadores[jugadorIndex].asignarAtaques(ataques)
    }
    
    res.end()
})

app.get("/mokepon/:jugadorId/ataques", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador=jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
})

app.listen(8080, () => {
    console.log("Servidor funcionando")
  
})