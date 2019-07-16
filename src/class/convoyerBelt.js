import Furniture from "../protocol/furniture";
import Pony from "./pony";
import DragonBall from "./dragonBall";
import Packaging from "../protocol/packaging";
import Box from "./box";

export default class ConvoyerBelt extends Furniture {
  constructor () {
    super()
    this.isBusy = false;
    this.item = "";
    this.type = "convoyerBelt"
  }

  in() {
    if (this.isBusy) {
      console.log(`There is already a toy on the convoyer belt`);
      return;
    }
    let newObject;
    switch (Math.floor(Math.random() * Math.floor(4))) {
      case 0:
        newObject = new Pony();
        break;
      case 1:
        newObject = new DragonBall();
        break;
      case 2:
        newObject = new Box();
        break;
      case 3:
        newObject = new Box();
        break;
    }

    this.isBusy = true;
    this.item = newObject;
    return newObject;
  }

  out() {
    if (this.isBusy == false) {
      console.log(`There is nothing on the convoyer belt`);
      return;
    }
    this.isBusy = false;
    this.item = "";
    console.log('To Santa Klaus !!!');
  }
}
