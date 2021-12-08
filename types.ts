export enum Especialidade {
    JS          = "Javascript",
    CSS         = "CSS",
    REACT       = "React",
    TYPESCRIPT  = "Typescript",
    POO         = "Programação Orientada a Objetos",
}


export class User {
    id:         string;
    nome:       string;
    email:      string;
    data_nasc:  string;
    turma_id:   string;

    constructor(
        id:         string,
        nome:       string,
        email:      string,
        data_nasc:  string,
        turma_id:   string,
    )   {
            this.id         = id;
            this.nome       = nome;
            this.email      = email;
            this.data_nasc  = data_nasc;
            this.turma_id   = turma_id;
        }
}

export class Estudante extends User {
    hobbies?:    Array<string>;

    constructor(
        id:         string,
        nome:       string,
        email:      string,
        data_nasc:  string,
        turma_id:   string,
        hobbies?:   Array<string>,
    ){
        super(id,nome,email,data_nasc,turma_id)
        this.hobbies = hobbies
    }
}


export class Docente extends User{
    especialidades?: Array<Especialidade>

    constructor(
        id:                 string,
        nome:               string,
        email:              string,
        data_nasc:          string,
        turma_id:           string,
        especialidades?:    Array<Especialidade>,
    ){
        super(id,nome,email,data_nasc,turma_id)
        this.especialidades = especialidades
    }

}


export class Turma {
    id: string;
    nome: string;
    docentes: Array<string>;
    estudantes: Array<string>;
    modulo: number;

    constructor(
        id: string,
        nome: string,
        docentes: Array<string>,
        estudantes: Array<string>,
        modulo: number,
    ){
        this.id             =   id
        this.nome           =   nome
        this.docentes       =   docentes
        this.estudantes     =   estudantes
        this.modulo         =   modulo
    }
}