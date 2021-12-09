import { Request, Response } from "express";
import { connection }        from "../connection";
import { Estudante }           from "../types";



const createEstudantes = async (req: Request, res: Response) => {
    try {
        const { nome, email, data_nasc,turma_id,hobbie_id } = req.body;

        if (!nome  || !email  || !data_nasc || !turma_id  ) {
            throw new Error("Esta faltando parametros.")
        }

        const aluno: Estudante = {
            id: Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id,
            hobbie_id
        }

        await connection("labesystem_estudantes").insert(aluno);

        res.status(200).send({ message: "Aluno criado com sucesso!" })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createEstudantes