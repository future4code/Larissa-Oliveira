CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#Exercício-1
#a) DATE NOT NULL = converte em data e é obrigatório// VARCHAR(6) NOT NULL = genero maximo 6 caracteris e é obrigatório
#b) SHOW DATABASES; mostras todos os bancos de dados. SHOW TABLES Mostra todas as tabelas
#c) Descreve os dados de uma table. 
SHOW DATABASES;
SHOW TABLES;
DESCRIBE Actor;

#Exercício-2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
#b)Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'= o id não pode ser o mesmo pois é uma chave única.

#c)Código de erro: 1136. A contagem de colunas não corresponde a contagem de valores na linha 1 = A quantidade de parâmetro de Actor é menor que os dados inseridos  
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#d) Esta faltando o campo 'name' que é solicitado no valor padrão da tabela.
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

#e) O erro ocorreu pois a data não estava dentro de "aspas"
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

#f)d)e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

#Exercício-3
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name from Actor WHERE gender = "male";
#a) SELECT id, name from Actor WHERE gender != "male"; ou SELECT id, name from Actor WHERE gender = "female";
#b)SELECT name, salary from Actor WHERE name = "Tony Ramos";
#c) Retornna Null pois não localizou o informação 
#d)SELECT id, name, salary from Actor WHERE salary > 500000
#e) Não foi localizada a coluna nome pois na tablema esta escrito name

#Exercício-4
SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
#a) Retornou todos os dados dos atores que tem a letra A ou J e dentre esses que tem o salário maior que 300000
#b)
SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000;
#c)
SELECT * FROM Actor WHERE (name LIKE "%G%" OR  name LIKE "%g%" );
#d)
SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE"%A%" OR name LIKE"%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;

#Exercício-5
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
#a) TEXT não tem limites de caracteres
#b)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

#c)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

#d)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02",
  8
);

#e)
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004",
  "Marley & Eu",
  "Os recém-casados John e Jenny Grogan se mudam de Michigan para a Flórida, onde eles compram sua primeira casa e encontram trabalhos em competitivos jornais. Mais tarde, o casal adota Marley, um adorável filhote de labrador amarelo. Marley cresce rapidamente e se torna bastante travesso. Ainda assim, mesmo enquanto ele está destruindo a mobília e não obedece, ele sempre consegue alegrar John, Jenny e sua crescente família.",
  "2008-12-25",
  9
);

#Exercício-6
#a)
SELECT id, title, rating FROM Movie WHERE id = "004";
#b)
SELECT * FROM Movie WHERE title = "Marley & Eu";
#c)
SELECT id, title, synopsis FROM Movie WHERE rating > 7;

#Exercício-7
#a)
SELECT * FROM Movie WHERE title LIKE "%vida%";
#b)
SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
#c)
SELECT * FROM Movie WHERE release_date < CURDATE();
#d)
SELECT * FROM Movie WHERE release_date < CURDATE() AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;