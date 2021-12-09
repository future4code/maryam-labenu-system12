import { Request, Response }    from "express";
import { connection }           from "../connection";
import { Docente }            from "../types";


const getDocentes = async (req: Request, res: Response) => {
    try {
        const docentes: Docente[] = await connection("labesystem_docentes")
        res.send(docentes)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getDocentes