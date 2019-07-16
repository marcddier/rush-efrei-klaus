import DragonBall from './class/dragonBall';
import Pony from './class/pony';
import Elf from './class/elf';
import Box from './class/box';
import GiftWrap from './class/giftWrap';

const DBHeroes = Object.freeze({
  SANGOKU: "SANGOKU",
  BEJITA: "BEJITA",
  BEERUS: "BEERUS",
  KAMESENNIN: "KAMESENNIN",
});

console.log("--- STEP #1 ---")

const ponyMax = new Pony();
const ponyMoi = new Pony();

let goku = new DragonBall(DBHeroes.SANGOKU);

ponyMax.isMoved();
ponyMoi.isMoved();
goku.isMoved();

console.log("--- STEP #2 ---");

const legolas = new Elf("Legolas");

var box = new Box();
legolas.pack(box, goku);
box.open();
legolas.pack(box, goku);

var paper = new GiftWrap();
legolas.pack(paper, ponyMax);
legolas.pack(paper, ponyMoi);

var toy = legolas.unpack(paper)
console.log(toy instanceof Pony)
var toy2 = legolas.unpack(paper)
console.log(toy2 == null ? true : false)