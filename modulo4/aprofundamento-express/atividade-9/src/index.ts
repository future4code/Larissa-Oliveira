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

https://www.postman.com/universal-firefly-465943/workspace/tests/documentation/18385856-2cf2ac5f-9e68-4cdc-8ffe-e3b2e31892f2