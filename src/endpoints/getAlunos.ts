import { Request, Response }    from "express";
import { connection }           from "../connection";
import { Estudante }            from "../types";


const getAlunos = async (req: Request, res: Response) => {
    try {
        const alunos: Estudante[] = await connection("labesystem_estudantes")
        res.send(alunos)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getAlunos