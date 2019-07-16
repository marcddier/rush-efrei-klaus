import Furniture from "../protocol/furniture";

export default class Table extends Furniture {
  constructor () {
    super();
    this.content = [];
    this.type = "table";
  }

  take() {
    if (this.content.length == 0) {
      console.log('The table is empty');
      return;
    }

    console.log("Toy taken from the table");
    return this.content.pop();
  }

  take(position) {
    if (this.content.length == 0) {
      console.log('The table is empty');
      return;
    }

    console.log("Toy taken from the table");
    return this.content.splice(position, 1);
  }
}
