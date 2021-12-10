import { Request, Response }    from "express";
import { connection }           from "../connection";


const getHobby = async (req: Request, res: Response) => {
    try {
        const alunos: Array<String> = await connection("labesystem_Est_Hob")
        res.send(alunos)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getHobby