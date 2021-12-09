import { Request, Response }    from "express";
import { connection }           from "../connection";
import { Turma }            from "../types";


const getAlunos = async (req: Request, res: Response) => {
    try {
        const turma: Turma[] = await connection("labesystem_turmas")
        res.send(turma)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getAlunos