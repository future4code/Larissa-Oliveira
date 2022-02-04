#Exercício-1
##a) Excluir a coluna Salary
##b) Alterar Gender por Sex e limitar em 6 caracteres
##c) Alterar Gender por Gender e limitar em 255 caracteres
##d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

#Exercício-2
##a) UPDATE Actor SET name = "Glória Peres", birth_date = "1995-05-05" WHERE id = "003";
##b) UPDATE Actor SET name = "JULIANA PAES" WHERE "Juliana Paes";
##c) UPDATE Actor SET name = "Roberta Miranda", birth_date = "1989-05-06", salary = 900000, gender = "female" WHERE id = "009"
##d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0 | O comando executou mas nenhuma informação foi alterada pois o id 009 não existe na tabela.

#Exercício-3
##a) DELETE FROM Actor WHERE name = "Fernanda Montenegro";
##b) DELETE FROM Actor WHERE gender = "male" AND salary > "1000000";

#Exercício-4
##a) SELECT MAX(salary) FROM Actor;
##b) SELECT MIN(salary) FROM Actor WHERE gender = "female";
##c) SELECT COUNT(*) FROM Actor WHERE gender = "female";
##d) SELECT SUM(salary) FROM Actor;

#Exercício-5
##a) Conta quantas pessoas do sexo male tem na tabela e retorna o nome gender male e o mesmo acontece com o female.
##b) SELECT  id, name FROM Actor ORDER BY name DESC;
##c) SELECT * FROM Actor ORDER BY salary DESC;
##d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
##e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

#Exercício-6
##a) ALTER TABLE Movie ADD playing_limit_date DATE;
##b) ALTER TABLE Movie CHANGE rating  rating  FLOAT;
##c) UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
##d) Nada muda pois o id não existe
##DELETE FROM Movie WHERE id = "001";
##UPDATE Movie SET synopsis = "Atualizada" WHERE id = "001";