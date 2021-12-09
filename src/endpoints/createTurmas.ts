import { Request, Response } from "express";
import { connection }        from "../connection";
import { Turma }           from "../types";



const createTurmas = async (req: Request, res: Response) => {
    try {
        const { nome, docentes, estudantes,modulo } = req.body;

        if (!nome  ) {
            throw new Error("Esta faltando parametros.")
        }

        const turma: Turma = {
            id: Date.now().toString(),
            nome,
            docentes,
            estudantes,
            modulo
        }

        await connection("labesystem_turmas").insert(turma);

        res.status(200).send({ message: "Turma criada com sucesso!" })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createTurmas