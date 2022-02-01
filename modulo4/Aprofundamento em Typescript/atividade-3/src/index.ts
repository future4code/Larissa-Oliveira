type post =
  {
    autor: string,
    texto: string
  }

const alvoDumbledore: post = {
  autor: "Alvo Dumbledore",
  texto: "Não vale a pena viver sonhando e se esquecer de viver"
}

const severoSnape: post = {
  autor: "Severo Snape",
  texto: "Menos 10 pontos para Grifinória!"
}
const hermioneGranger: post = {
  autor: "Hermione Granger",
  texto: "É levi-ô-sa, não levio-sá!"
}
const Dobby: post = {
  autor: "Dobby",
  texto: "Dobby é um elfo livre!"
}
const lordVoldemort: post = {
  autor: "Lord Voldemort",
  texto: "Avada Kedavra!"
}

const person = [
  alvoDumbledore,
  severoSnape,
  hermioneGranger,
  Dobby,
  lordVoldemort
]

type posts = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]


function buscarPostsPorAutor(posts: posts, autorInformado:string) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}
