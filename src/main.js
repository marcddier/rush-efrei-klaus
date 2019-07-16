import DragonBall from './class/dragonBall';
import Pony from './class/pony';
import Elf from './class/elf';
import Box from './class/box';
import GiftWrap from './class/giftWrap';
import Table from './class/table';
import ConvoyerBelt from './class/convoyerBelt';

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

let box = new Box();
legolas.pack(box, goku);
box.open();
legolas.pack(box, goku);

let paper = new GiftWrap();
legolas.pack(paper, ponyMax);
legolas.pack(paper, ponyMoi);

let toy = legolas.unpack(paper)
console.log(toy instanceof Pony)
let toy2 = legolas.unpack(paper)
console.log(toy2 == null ? true : false)

console.log("--- STEP #3 ---");

let table = new Table();
let convoyer = new ConvoyerBelt();

legolas.put(table, paper);
legolas.put(table, ponyMax);
legolas.put(table, box);

console.log(table.content);
convoyer.in()
console.log(convoyer)
convoyer.out()
console.log(convoyer)

console.log("============")
legolas.look(table)
