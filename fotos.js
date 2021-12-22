const listaBrasil = [
    ['Fernando de Noronha', 10000],
    ['Rio de Janeiro (Capital)', 2500],
    ['Bonito', 3500],
    ['Chapada Diamantina', 8000],
    ['Serras Gaúchas', 5500],
    ['Salvador', 4000],
    ['Natal', 3500],
    ['Amazônia', 8500],
    ['Búzios (RJ)', 2800],
    ['Brasília', 4200]
]

const listaMundo = [
    ['Buenos Aires', 3000],
    ['Nova York', 15000],
    ['Paris', 8500],
    ['Tokio', 12000],
    ['Cairo', 7000],
    ['Casablanca', 6800],
    ['Nova Deli', 8500],
    ['Ilha de Páscoa', 11000],
    ['Havaí', 8300],
    ['Qebec', 7000],
]

const maisCarosBrasil = listaBrasil.sort((a,b)=> a[1]-b[1])

console.log('5 mais caros do Brasil:')

for(let x = 0; x < 5; x++) {
	console.log(maisCarosBrasil[maisCarosBrasil.length-x-1])
}

const maisBaratosMundo = listaMundo.sort((a,b)=> a[1]-b[1])

console.log('5 mais baratos do Mundo:')

for(let x = 0; x < 5; x++) {
	console.log(maisBaratosMundo[x])
}