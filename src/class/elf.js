import Toy from '../protocol/toy'
import Packaging from '../protocol/packaging'
import Box from './box'
import GiftWrap from './giftWrap'

export default class Elf {
  constructor (nickname) {
    this.nickname = nickname;
  }

  getNickname () {
    return this.nickname;
  }

  setNickname (nickname) {
    this.nickname = nickname;
  }

  /**
   * 
   * @param { Packaging } packaging 
   * @param { Toy } toy 
   */
  pack(packaging, toy) {
    if (packaging instanceof GiftWrap) {

    } else if (packaging instanceof Box) {
      if (packaging.isOpen == false) {
        console.log('Sorry this package is not open');
        return;
      }
    } else {
      throw new Error ('the packaging must be a giftwrap or a box');
    }

    if (packaging.toy){
      console.log(`Sorry this package already filled`);
      return;
    }

    packaging.insert(toy);
  }

  /**
   * 
   * @param { Packaging } packaging 
   * @return { Toy }
   */
  unpack(packaging) {
    if (!(packaging instanceof Packaging)) {
      console.log("can't unpack, must be a package")
      return;
    }

    if (packaging.isOpen || packaging.toy == "") {
      console.log('Sorry this package is already empty');
      return;
    }

    console.log(`Ooooooh! Just unpacking the toy ~~ ${packaging.toy.getType()} ~~`)
    let toy = packaging.toy;
    packaging.toy = "";
    return toy;
  }
}