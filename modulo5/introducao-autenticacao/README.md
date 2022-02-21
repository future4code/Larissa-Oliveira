- Exercício 1
    
    Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante encontrar um que seja fácil de guardar e que garanta unicidade. Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
    
    O uso dele é simples, veja abaixo:
    
    ```tsx
    import { v4 } from "uuid"
    
    const id = v4();
    
    console.log("Generated Id: ", id);
    ```
    
    a) *Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?*
    
    Resposta: É mais seguro.

    
    b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. Dado isso, crie uma função para gerar um id.*

    Resposta: 
    ```tsx
    import {v4} from "uuid"

    export function IdGenerator(): string{
        return v4()
    }
    ```

- Exercício 2
    
    Agora que já possuímos um id, podemos começar a modelagem do banco. O nosso usuário precisa ter um email e uma senha salva para que a gente consiga fazer a autenticação dele. 
    Na hora de salvar essas informações na tabela, é interessante que façamos uma função específica para isso. Abaixo, há um exemplo:
    
    ```tsx
    const userTableName = "User";
    
    const connection = knex({
      client: "mysql",
      connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
      },
    });
    
    const createUser = async (id: string, email: string, password: string) => {
      await connection
        .insert({
          id,
          email,
          password,
        })
        .into(userTableName);
    };
    ```
    
    a) *Explique o código acima com as suas palavras.*
    Resposta: É feita a conexão com o banco de dados através do connection e é vinculado a tabela "User" para que o novo usuário seja inserido através do createUser
    
    b) *Comece criando a tabela de usuários. Coloque a query que você utilizou no arquivo de respostas.*
    Resposta:
    ```sql 
    CREATE TABLE User (
        id VARCHAR(64) PRIMARY KEY,
        email VARCHAR(64) NOT NULL UNIQUE,
        password VARCHAR(64) NOT NULL
    );
    ```
    c) *Pela mesma justificativa do exercício anterior, crie uma função para ser responsável pela criação de usuários no banco.*
    Resposta: 
    ```tsx
        export default async function createUser(
        req: Request,
        res: Response
        ): Promise<void> {
        try {
            const id: string = IdGenerator();
            const user: User = new User(id, req.body.email, req.body.password)

            const database = new UserTableName()

            await database.createUser(user)

            res.status(201).send("Usuário criado com sucesso")

        } catch (error : any) {

            if (res.statusCode === 200) {
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.send({ message: error.message || error.sqlMessage })
            }
        }
        }
   ```

- Exercício 3
    
    Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
    
    - os dados que serão salvos no token (no nosso caso, o id);
    - a chave secreta usada pra criptografar o token;
    - algumas configurações, como o tempo de expiração
    
    Abaixo, há uma função que faz isso, com o tempo de expiração de 1 minuto:
    
    ```tsx
    import * as jwt from "jsonwebtoken";
    
    const expiresIn = "1min"
    
    const generateToken = (id: string): string => {
      const token = jwt.sign(
        {
          id
        },
        process.env.JWT_KEY as string,
        {
          expiresIn
        }
      );
      return token;
    }
    ```
    
    a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
    Resposta: Para tipar o jwt como string para que não de erro.
    
    b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*   
    Resposta:
    ```tsx
    import { AuthenticationData } from "../types";
    export class Authenticator {
        GenerateToken = (
            payload: AuthenticationData
        ) => {
            const token = jwt.sign(
                {
                    id: payload.id,
                },
                process.env.JWT_KEY as string,
                {
                    expiresIn: "4s"
                }
            )
            return token;
        }
    }
    ```

- Exercício 4
    
    Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:
    
    - *Verbo/Método*: POST
    - *Path*: `/user/signup`
    - *Input:* O body da requisição deve ser
        
        ```json
        {
        	"email": "email do usuário",
        	"password": "senha do usuário"
        }
        ```
        
    - *Output*: O body da resposta deve ser
        
        ```json
        {
        	"token": "token gerado pelo jwt"
        }
        ```
        
    
    a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
    b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
    c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
- Resposta: 
    ```tsx
    export default async function createUser(
    req: Request,
    res: Response
    ): Promise<void> {
    try {
        const id: string = IdGenerator();
        const user: User = new User(id, req.body.email, req.body.password)

        if(!req.body.email || req.body.email.indexOf("@") === -1){
            throw new Error("Invalid email")
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const database = new UserTableName()

        await database.createUser(user)

        const authenticator: Authenticator = new Authenticator()
        const token = authenticator.GenerateToken({ 
            id,
        })
        

        res.status(201).send({Token: token})

    } catch (error : any) {

            res.send({ message: error.message || error.sqlMessage })
        
    }
    }
    ```

- Exercício 5
    
    No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma função que realize essa busca no banco de dados para gente. 
    
    a) *Crie uma função que retorne as informações de um usuário a partir do email*
- Resposta:
    ```tsx
    export const getUserByEmail = async (req: Request, res: Response) => {
    try {
        const email: string = req.query.email as string

        const database = new UserTableName()

        const result = await database.getUserByEmail(email)

        const user = new User(result.id, result.email, result.password)

        res.status(201).send(user)

    } catch (error: any) {
        res.send({ message: error.message || error.sqlMessage })
    }
    }
    ```

- Exercício 6
    
    Agora, vamos implementar o endpoint de login, com as seguintes especificações:
    
    - *Verbo/Método*: POST
    - *Path*: `/user/login`
    - *Input:* O body da requisição deve ser
        
        ```json
        {
        	"email": "email do usuário",
        	"password": "senha do usuário"
        }
        ```
        
    - *Output*: O body da resposta deve ser
        
        ```json
        {
        	"token": "token gerado pelo jwt"
        }
        ```
        
    
    a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
    
    b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
- Resposta:
    ```tsx
    export default async function login(
    req: Request,
        res: Response
    ): Promise<void> {
        try {
            const id: string = IdGenerator();
            const { email, password } = req.body;

            const database = new UserTableName()
            await database.loginUser(email, password)

            const authenticator: Authenticator = new Authenticator()
            const token = authenticator.GenerateToken({ id, })

            res.status(200).send({ token })
        } catch (error) {
            if (res.statusCode === 200) {
                console.log(error)
                res.status(500).send({ message: "Internal server error" })
            } else {
                res.end()
            }
        }
    }
    ```