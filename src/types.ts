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
    hobbie_id?:    Array<string>;

    constructor(
        id:             string,
        nome:           string,
        email:          string,
        data_nasc:      string,
        turma_id:       string,
        hobbie_id?:    Array<string>,
    ){
        super(id,nome,email,data_nasc,turma_id)
        this.hobbie_id = hobbie_id
    }
}


export class Docente extends User{
    especialidades_id?:        Array<Especialidade>

    constructor(
        id:                     string,
        nome:                   string,
        email:                  string,
        data_nasc:              string,
        turma_id:               string,
        especialidades_id:     Array<Especialidade>,
    ){
        super(id,nome,email,data_nasc,turma_id)
        this.especialidades_id = especialidades_id
    }
}


export class Turma {
    id: string;
    nome: string;
    modulo?: number;

    constructor(
        id: string,
        nome: string,
        modulo: number,
    ){
        this.id             =   id
        this.nome           =   nome
        this.modulo         =   modulo
    }
}