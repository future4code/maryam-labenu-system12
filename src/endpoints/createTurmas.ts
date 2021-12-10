import { Request, Response } from "express";
import { connection }        from "../connection";
import { Turma }             from "../types";



const createTurmas = async (req: Request, res: Response) => {
    try {
        let { nome, modulo  } = req.body;

        if(!modulo) {
            modulo = '0'
        }     
        
        console.log(modulo)

        if (!nome  ) {
            throw new Error("Esta faltando parametros.")
        }

        const turma: Turma = {
            id: Date.now().toString(),
            nome,
            modulo
        }

        await connection("labesystem_turmas").insert(turma);

        res.status(200).send({ message: "Turma criada com sucesso!" })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createTurmas