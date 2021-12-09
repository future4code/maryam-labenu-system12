import express, { Express }         from "express";
import cors                         from "cors";
import { AddressInfo }              from "net";

import getAlunos                    from "./endpoints/getAlunos";
import getDocentes                  from "./endpoints/getDocentes";
import getTurmas                    from "./endpoints/getTurmas";

import createDocentes               from "./endpoints/createDocentes";
import createAlunos                 from "./endpoints/createAlunos";
import createTurmas                 from "./endpoints/createTurmas";

const app:Express = express();
app.use(express.json());
app.use(cors());



app.post("/alunos",     createAlunos)
app.get("/alunos",      getAlunos)


app.post("/docentes",   createDocentes)
app.get("/docentes",    getDocentes)


app.post("/turmas",     createTurmas)   // ainda não funciona
app.get("/turmas",      getTurmas)



app.get("/",(req,res) => {
    res.send("Olá!")
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});