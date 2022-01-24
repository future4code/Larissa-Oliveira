import express from "express";
import cors from "cors"
import { AddressInfo } from "net";

const app = express();

app.use(cors())
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.get("/", (req, res) => {
    res.send("Hello from Express")
})

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

type User = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string,
    posts: Post []
}

const usuarios: User[] = [
    {
        id: 1,
        name: "Larissa",
        phone: "(11)333-333",
        email: "larissa@email.com",
        website: "http://lalalala",
        posts: [

            {
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }
        ]

    },
    {
        id: 2,
        name: "Pedro",
        phone: "(11)111-333",
        email: "pedro@email.com",
        website: "http://pedro",
        posts: [

            {
                userId: 2,
                id: 2,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            }

        ]
    },
    {
        id: 3,
        name: "Roberta",
        phone: "(11)4444-333",
        email: "roberta@email.com",
        website: "http://Roberta",
        posts:
            [
                {
                    userId: 3,
                    id: 3,
                    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ]


    }
]



app.get("/users", (req, res) => {
    const currentUser = usuarios
    // console.log(1, currentUser)

    const userId = currentUser.map((user) => {
        return user
    })
    // console.log(2, userId)

    const result = userId.flat(1)
    res.status(200).send(result);
})

app.get("/posts", (req, res) => {
    const currentUser = usuarios
    // console.log(1, currentUser)

    const userPosts = currentUser.map((user) => {
        return user.posts
    })
    // console.log(2, userPosts)

    const result = userPosts.flat(1)
    res.status(200).send(result);
})


app.get("/post", (req, res) => {
    const idPost = req.query.id

    if (!idPost) res.status(400).send('Não é possível realizar a operação. ID do usuário ausente')

    const allPosts = usuarios.map((user: any) => {
        return user.posts
    }).flat(1)
    console.log(allPosts)


    let postId

    allPosts.forEach((post: any) => {

        if (post.id === idPost) {
            postId = post.postId
        }
    })
    res.status(200).send(postId)

})

