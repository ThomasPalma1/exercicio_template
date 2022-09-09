class Projeto {
    constructor(tipo, tecnologia, inicio, fim) {
        this.tipo = tipo;
        this.tecnologia = tecnologia;
        this.inicio = inicio;
        this.fim = fim;

    }
}

class Profile {
    constructor(nome, idade, interesses, contato) {
        this.nome = nome;
        this.idade = idade;
        this.interesses = interesses;
        this.contato = contato;

    }
}

module.exports = {
    Projeto: Projeto,
    Profile: Profile

}





