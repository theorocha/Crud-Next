export default class Cliente {
  #id: string;
  #nome: string;
  #idade: number;

  constructor(nome: string, idade: number, id: string = "") {
    this.#nome = nome;
    this.#idade = idade;
    this.#id = id;
  }

  static void() {
    return new Cliente("", 0);
  }

  get id() {
    return this.#id;
  }
  get idade() {
    return this.#idade;
  }
  get nome() {
    return this.#nome;
  }
}
