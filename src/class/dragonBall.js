import Figurine from "../protocol/figurine";

export default class DragonBall extends Figurine {
  constructor (_character) {
    super()
    this._character = _character;
    this.type = `Dragon Ball figurine ${this._character}`

    this.instanciate();
  }

  instanciate () {
    console.log(`
      ${this._character} is singing -->
      CHA-LA HEAD CHA-LA
      Nani ga okite mo kibun wa heno-heno kappa
      CHA-LA HEAD CHA-LA
      Mune ga pachi-pachi suru hodo
      Sawagu Genki-Dama --Sparking !
    `); 
  }

  isMoved () {
    console.log(`Kamé Hamé Ha!`)
  }
}