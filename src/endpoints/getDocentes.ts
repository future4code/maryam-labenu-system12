import { Request, Response }    from "express";
import { connection }           from "../connection";
import { Docente }            from "../types";





const selecionaEspec = (especialidades:any) => { 

return especialidades[0]

}

const getDocentes = async (req: Request, res: Response) => {
    
    try {
        const docentes:         Docente[]     = await connection("labesystem_docentes")
        const especialidades:   Array<Object> = await connection.raw(
            `SELECT id,nome,email,data_nasc,turma_id,nome_e FROM labesystem_docentes
            LEFT JOIN labesystem_Doc_Espec
            ON labesystem_docentes.id = labesystem_Doc_Espec.id_doc
            LEFT JOIN labesystem_especialidades
            ON labesystem_Doc_Espec.id_espec = labesystem_especialidades.id_e;`
        )


        const saida = selecionaEspec(especialidades)

        res.send(saida)
    } catch (error: any) {
        res.status(400).send({message: error.message})
    }
}

export default getDocentes