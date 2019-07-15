import Toy from '../protocol/toy';

export default class Pony extends Toy {
  
  //static _nb = 1
  //id = Math.random() * 1000;

  //Maxime 
  // Un Pony possède un attribut statique privé _nb qui determine le nombre d'objet instancié. Il est par défaut initialisé à 1.
  #_nb = 1

  constructor (id, type) {

    //super(`Pony #${this.id}`);

    //Maxime
    super(type)
    this.type = "Pony"
    this.id = this.#_nb;

    this.instanciate();
  }

  instanciate() {
    // console.log(`
    //   ${super.getType()} is singing -->
    //   Dou-double poney, j’fais izi money
    //   D’où tu m’connais ? Parle moi en billets violets
    //   Dou-double poney, j’fais izi money
    //   ${Pony._nb}
    // `);


    // Maxime 

    console.log(`
    ${this.type} #${this.id} is singing -->
    Dou-double poney, j’fais izi money
    D’où tu m’connais ? Parle moi en billets violets
    Dou-double poney, j’fais izi money
  `);
  }

  isMoved() {
    console.log(`Huuuuuuhu!`)
  }
}
