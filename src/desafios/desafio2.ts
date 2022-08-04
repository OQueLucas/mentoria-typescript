// Como podemos melhorar o esse código usando TS? 

type Person = {
    nome: string, 
    idade: number, 
    profissao: Profissao
}

enum Profissao {
    Atriz,
    Padeiro,
}

const pessoa1: Person = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.Atriz,
};

let pessoa2: Person = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.Padeiro,
}

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz,
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro,
}