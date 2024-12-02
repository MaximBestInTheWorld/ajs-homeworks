


export class Team {      
  constructor() {
      this.members = new Set();
  }
   
  add(pers) {   
    try{  
      if (this.members.has(pers)) {
        throw new Error("попытка добавить уже внесённого персонажа!");
      }
    }catch(err) {
     
      errorRepository.add('100', err.message);  
      console.log('ошибка: ', '100');   
           
    }
    this.members.add(pers);
  };

  addAll(...persons) {  

    for (let arg of persons) this.members.add(arg);

  };

  toArray() { 

    let result = [...this.members];

    return result;

  };
};

// ---------------------------------------------------------------------------------------------------------------------

class ErrorRepository {       
  constructor() {
      this.errStorage = new Map();
  };
   
  add(errCode, errMessage) {   
    
    this.errStorage.set(errCode, errMessage);
  };

  translate(code) { 

    let result;
    if (this.errStorage.has(code)) result = this.errStorage.get(code)

    else result = 'Unknown error'; 

    return result;

  };
};

//-----------------------------------------------------------------------------------------------------------

export let errorRepository = new ErrorRepository(); 