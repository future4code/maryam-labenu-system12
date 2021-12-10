import { Request, Response }    from "express";
import { connection }           from "../connection";
import { Estudante }            from "../types";


const getAlunos = async (req: Request, res: Response) => {
    try {
        const alunos: Estudante[] = await connection("labesystem_estudantes")
        const hobbies:   Array<Object> = await connection.raw(
            `SELECT id,nome,email,data_nasc,turma_id,nome_h FROM labesystem_estudantes
            LEFT JOIN labesystem_Est_Hob
            ON labesystem_estudantes.id = labesystem_Est_Hob.id_est
            LEFT JOIN labesystem_hobbies
            ON labesystem_Est_Hob.id_hob = labesystem_hobbies.id_h;`
        )



        res.send(alunos)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getAlunos