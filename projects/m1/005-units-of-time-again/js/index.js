var inputSecondi = prompt("INSERISCI NUMERO DI SECONDI")

var secondiInUnGiorno = 86400

var giorni =  Math.floor(inputSecondi/secondiInUnGiorno)
var secondiRimanentiDopoGiorni = inputSecondi%secondiInUnGiorno
var secondiInUnOra = 3600
var ore = Math.min((Math.floor(secondiRimanentiDopoGiorni/secondiInUnOra)),23)
var secondiRimanentiDopoOre = secondiRimanentiDopoGiorni%secondiInUnOra
var secondiInUnMinuto = 60
var minuti = Math.min((Math.floor(secondiRimanentiDopoOre/60)),59)
var secondi = Math.min(secondiRimanentiDopoOre%60)
var oreFormattate = ore.toString().padStart(2,'0')
var minutiFormattati = minuti.toString().padStart(2,'0')
var secondiFormattati = secondi.toString().padStart(2,'0')

var outputSecondi = giorni
console.log((giorni)+":"+(oreFormattate)+":"+(minutiFormattati)+":"+(secondiFormattati))