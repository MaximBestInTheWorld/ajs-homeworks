import {Team, errorRepository} from './basic';

let max = { name: "Max" };
let ivan = { name: "Ivan" };
let artem = { name: "Artem" };
let denis = { name: "Denis" };
let pavel = { name: "Pavel" };
let vlad = { name: "Vlad" };

const m = new Team();

m.add(max);
m.add(denis);
m.addAll(max, denis, ivan, vlad);

const a = m.toArray();

console.log('toArray = ', a);

m.add(denis);
//=================================================================

console.log(errorRepository.translate('100'));

//=================================================================


console.log();
console.log('end of execution!');