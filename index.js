class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "fez um ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso:
const mago = new Heroi("Gandalf", 150, "mago");
const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
const monge = new Heroi("Aang", 112, "monge");
const ninja = new Heroi("Naruto", 17, "ninja");

mago.atacar();        // Saída: O mago atacou usando magia
guerreiro.atacar();   // Saída: O guerreiro atacou usando espada
monge.atacar();       // Saída: O monge atacou usando artes marciais
ninja.atacar();       // Saída: O ninja atacou usando shuriken