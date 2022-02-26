import express, {Express} from 'express';
import {AddressInfo} from 'net';
import cors from 'cors';

const app: Express = express();

app.use(express.json());
app.use(cors());


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running on port ${address.port}`);
    } else {
        console.log("Failure upon starting server")
    }

    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
})

export default app;
