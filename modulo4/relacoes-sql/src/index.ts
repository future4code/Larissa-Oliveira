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


// Exercício 1
// a) identifica as relações entre as tabelas do banco de dados fazendo referência a uma coluna ou conjunto de colunas
// b)
const createFilm = async (id: string,): Promise<any> => {
  const result = await connection.raw(`
  SELECT m.id as movie_id, r.rate as rating FROM Movie m
  INNER JOIN Rating r ON m.${id} = r.movie_${id};
`)
  return result[0][0]
}
// c) Ele cria uma nova avaliação pois não tem nenhuma condicional
// d) ALTER TABLE Movie DROP COLUMN rating;
// e) Não é possível deletar o filme pois a coluna rating não existe

// Exercício 2
// a) Cria uma tabela que que recebe a id do filme e do ator e verifica se existem relações entre eles.
// b)INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
//   "004",
//   "001"
// );
// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
//   "004",
//   "002"
// );
// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
//   "004",
//   "003"
// );
// VALUES(
//   "003",
//   "002"
// );
// INSERT INTO MovieCast (movie_id, actor_id)
// VALUES(
//   "003",
//   "002"
// );

// c)Ele vincula o id do filme com a do ator

// Exercício 3
// a) o ON compara o id da tabela Movia com a do Rating
// b)
const ratingFilm = async (id: string,): Promise<any> => {
  const result = await connection.raw(`
  SELECT m.id as movie_id, r.rate as rating FROM Movie m
  INNER JOIN Rating r ON m.${id} = r.movie_${id};
`)
  return result[0][0]
}





//Servidor
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

