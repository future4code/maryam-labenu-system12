import { Request, Response }    from "express";
import { connection }           from "../connection";
import { Estudante }            from "../types";


const getEspecial = async (req: Request, res: Response) => {
    try {
            console.log(req)
        const ids: Array<String> = await connection("labesystem_Est_Hob")

        const especialidade: Array<String> = await connection("labesystem_especialidades")
        res.send(ids)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getEspecial