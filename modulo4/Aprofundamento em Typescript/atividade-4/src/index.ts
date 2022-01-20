type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// usando tsc
// configurando o script para transpilar e rodar o código ao mesmo tempo. 
// Exemplo: //  "scripts": {
            //     "start": "tsc && node ./build/index.js"
            //   },
         