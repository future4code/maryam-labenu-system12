import { Request, Response } from "express";
import { connection }        from "../connection";
import { Docente }           from "../types";



const createDocentes = async (req: Request, res: Response) => {
    try {
        const { nome, email, data_nasc,turma_id,especialidades_id } = req.body;

        if (!nome  || !email  || !data_nasc || !turma_id  ) {
            throw new Error("Esta faltando parametros.")
        }

        const professor: Docente = {
            id: Date.now().toString(),
            nome,
            email,
            data_nasc,
            turma_id,
            especialidades_id
        }

        await connection("labesystem_docentes").insert(professor);

        res.status(200).send({ message: "Professor criado com sucesso!" })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createDocentes