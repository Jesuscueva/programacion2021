

const heroes = [ "Batman", "Superman", "Mujer Maravilla", "Aquaman" ]

console.log('For tradicional')

for(let i = 0; i < heroes.length; i++ ){
    console.log(heroes[i])
}

console.log("For in")
for(let i in heroes) {
    console.log(heroes[i])
}

console.log("For of")
for(let heroe of heroes){
    console.log(heroe)
}