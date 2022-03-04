- Exercício 1
    
    A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: *bcryptjs*. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso **impede** que se faça o ataque chamado de ***rainbow table*,** que consiste em montar uma tabela com infinitas possibilidades da saída do *hash*. 
    
    Abaixo, há o exemplo de uso da função de *hash*
    
    ```tsx
    import * as bcrypt from "bcryptjs";
    
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    console.log("encrypted message: ", result);
    ```
    
    a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*
    - Resposta: uma cadeia de caracteres aleatória concatenada com uma senha.
    b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 
    
    c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*
- Resposta: - 
  ```tsx
    export class HashManager {

        createHash = (
            plainText: string
        ): string => {
            const rounds: number = Number(process.env.COST)
            const salt: string = genSaltSync(rounds)
            const cypherText: string = hashSync(plainText, salt)

            return cypherText
        }

        compareHash = (
            plainText: string,
            hash: string
        ): boolean => {
            return compareSync(plainText, hash)
        }
    }
  ```

- Exercício 2
 Na aula de ontem, implementamos os endpoints de *signup* e *login* sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: **no cadastro**, antes de salvar o usuário no banco, temos que **criptografar** a senha, para que, no banco, não fique a senha em si. Já, **no login**, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de *Hash* para isso. 

    a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
    Resposta: No cadastro para que a senha já seja salva de forma criptógrafada.

    b) *Faça a alteração do primeiro endpoint*

    c) *Faça a alteração do segundo endpoint*

    d) *No exercício de ontem, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*
- Resposta:
  ```tsx
  export default async function createUsers(
   req: Request,
   res: Response
    ): Promise<void> {
    try {
        const id = new IdGenerator();
        const user: User = new User(id.getId(), req.body.email, req.body.password)

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email")
        }
        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const cypherPassword: string = new HashManager().createHash(user.getPassword())

        const userData: User = new User(user.getId(), user.getEmail(), cypherPassword)
        console.log(userData)
        
        const database = new UserTableName()

        await database.createUser(userData)


        const authenticator: Authenticator = new Authenticator()
        const token = authenticator.GenerateToken({
            id: user.getId()
        })

        res.status(201).send({ token: token })

    } catch (error: any) {

        res.send({ message: error.message || error.sqlMessage })

    }
    }
  ```  

- Exercício 3
    
    Agora, vamos pensar em um pouco nas funcionalidades relacionadas aos tipos de usuário. Para isso, vamos ter que fazer umas modificações no banco de dados.
    
    a) *Altere a sua tabela de usuários para ela possuir uma coluna `role`. Considere que pode assumir os valores `normal`  e `admin`. Coloque `normal` como valor padrão.*
    
    b) *Altere o type `AuthenticationData e a função getData()` para representarem esse novo tipo no token.*
    
    c) *Altere o cadastro para receber o tipo do usuário e criar o token com essa informação*
    
    d) *Altere o login para criar o token com o `role` do usuário*
-  Resposta:
   ```tsx
   export default async function login(
    req: Request,
    res: Response
    ): Promise<void> {
        try {
            const id = new IdGenerator();
            const { email, password } = req.body;

            const database = new UserTableName()

            const user = await database.getUserByEmail(email)

            await database.loginUser(email, password)

            const authenticator: Authenticator = new Authenticator()
            const token = authenticator.GenerateToken({ id: id.getId(), role: user.role  })

            res.status(200).send({ token })
        } catch (error: any) {
            if (res.statusCode === 200) {
                console.log(error)
                res.status(500).send({message: error.message || error.sqlMessage  })
            } else {
                res.end()
            }
        }
    }
    ```

- Exercício 4
    
    Agora, vamos usar esse `role` no endpoint `/user/profile`. Somente o usuários "normais" podem acessar esse endpoint. 
    
    a) *Altere o endpoint para que retorne um erro de `Unauthorized` para os usuários que "não sejam normais" e tentem acessar esse endpoint*
-  Resposta:
```tsx
    export default async function userProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization as string

        const database = new UserTableName()

        const tokenData  = new Authenticator().GetTokenData(token)

     

        if (tokenData?.role !== "NORMAL") {
            throw new Error("Only a normal user can access this functionality");
        }
        

        const user = await database.getUserById(tokenData?.id)

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: tokenData.role,
          });
    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || error.sqlMessage })
        } else {
            res.end()
        }
    }
}
```    