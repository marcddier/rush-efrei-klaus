import Toy from "./toy";

export default class Packaging {
  constructor (toy = '') {
    this.isOpen = false;
    if (!(toy instanceof Toy) && toy != '' ) {
      throw TypeError('toy must be a Toy')
    }
    this.toy = toy;
  }

  open() {
    this.isOpen = true
  }

  /**
   * 
   * @param { Toy } toy 
   */
  insert(toy) {
    if (!(toy instanceof Toy)) {
      throw TypeError('need a toy to insert in the packaging')
    }
    this.toy = toy
    console.log(`Yeaaaah! Just packing the toy ~~ ${toy.getType()} ~~`)
  }
}