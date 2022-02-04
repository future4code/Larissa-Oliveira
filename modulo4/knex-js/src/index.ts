//importando express com Request e Response e cors
import express, { Request, Response } from "express";
import cors from "cors";
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
import connection from "./connection";
import { count } from "console";

const app = express();

app.use(express.json());
app.use(cors());


const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE id = '${id}'
`)
  return result[0][0]
}
getActorById("001")
  .then(result => {
    // console.log(result)
  })
  .catch(err => {
    console.log(err)
  });
(async () => {
  // console.log(await getActorById("002"))
})()
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    console.log(await getActorById(id))
    res.end()
  } catch (error: any) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})
// Exercício 1
// a) Retorna valor que é igual ao do workbench
// b)
const buscarAtor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM Actor WHERE name = "${name}
  `)
  return result
}


// c)
const quantidadeAtor = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `)
  const count = result[0][0].count

  return count
}

// Exercício-2
const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};
// a)
const atualizaAtor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id)
}
// b)
const deletaAtor = async (id: string): Promise<any> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}
// c)
const mediaSalario = async (id: string, gender: string,): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
}

// Exercício-3
// a)
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
// b)
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const quantidade = await quantidadeAtor(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
});

// Exercício-4
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    );
    res.status(200).send();
  } catch (error: any) {
    res.status(400).send({ message: error.message });
  }
});

// a)
app.put("/actor", async (req: Request, res: Response) => {
  try {
    await mediaSalario(req.body.id, req.body.salary);
    res.status(200).send({ 
      message:"Sucesso!"
    })

  } catch (error: any) {
    res.status(400).send({ message:error.message})
  }
})

// b)
app.delete("/actor/:id", async (req: Request, res: Response)=>{
  try {
    await deletaAtor(req.params.id)
    res.status(200).send({ 
      message:"Deletado HaHaHa!"
    })
  } catch (error: any) {
    res.status(400).send({ message:error.message});
    
  }
})

//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

