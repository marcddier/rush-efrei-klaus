import Toy from '../protocol/toy';

export default class Pony extends Toy {
  
  //static _nb = 1
  //id = Math.random() * 1000;

  //Maxime 
  // Un Pony possède un attribut statique privé _nb qui determine le nombre d'objet instancié. Il est par défaut initialisé à 1.
  static #_nb = 1

  constructor () {
    //Maxime
    super();
    this.id = Pony.#_nb;
    Pony.#_nb ++;
    this.type = `Pony #${this.id}`;
    
    this.instanciate();
  }

  instanciate() {
    console.log(this.getType())
    console.log(`
      ${this.type} is singing -->
      Dou-double poney, j’fais izi money
      D’où tu m’connais ? Parle moi en billets violets
      Dou-double poney, j’fais izi money
  `);
  }

  isMoved() {
    console.log(`Huuuuuuhu!`)
  }
}
