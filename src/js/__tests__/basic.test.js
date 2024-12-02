import {Team, errorRepository} from '../basic';


test('shoud check Team formation', () => {
  let max = { name: "Max" };
  let ivan = { name: "Ivan" };
  let denis = { name: "Denis" };
  let vlad = { name: "Vlad" };
  const m = new Team();
  m.add(max);
  m.add(denis);
  m.addAll(max, denis, ivan, vlad);
  const result = m.toArray();
  expect(result).toEqual([
    { name: "Max" },
    { name: "Denis" },
    { name: "Ivan" },
    { name: "Vlad" }
  ]);
});


test('shoud check ErrorRepository', () => {
  let denis = { name: "Denis" };
  const m = new Team();
  m.add(denis);
  m.add(denis);
  const result = errorRepository.translate('100');
  expect(result).toBe('попытка добавить уже внесённого персонажа!');	
  });
  
   


