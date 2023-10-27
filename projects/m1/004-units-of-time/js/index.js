var inputDataNascita = prompt("INSERISCIDATA DI NASCITA NEL SEGUENTE FORMATO: GG/MM/AAAA")

var giornoNascita = inputDataNascita.substring(0,2)
var meseNascita = inputDataNascita.substring(3,5)
var annoNascita = inputDataNascita.substring(6,11)

var dataNascita = new Date(annoNascita, meseNascita, giornoNascita, 0, 0)

let giorno = dataNascita.getDate()
let mese = dataNascita.getMonth()
let anno = dataNascita.getFullYear()
let ore = dataNascita.getHours()
let minuti = dataNascita.getMinutes()
let secondi= dataNascita.getSeconds()

let dataAttuale = new Date()
let giornoAttuale = dataAttuale.getDate()
let meseAttuale = dataAttuale.getMonth()
let annoAttuale = dataAttuale.getFullYear()
let oreAttuali = dataAttuale.getHours()
let minutiAttuali = dataAttuale.getMinutes()
let secondiAttuali= dataAttuale.getSeconds()

var etàinSecondi = (dataAttuale-dataNascita)/1000
var etàinGiorni= etàinOre/24
var etàinOre = etàinMinuti/60
var etàinMinuti = etàinSecondi/60

console.log("Hai vissuto "+etàinSecondi+" secondi")
