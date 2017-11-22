// Назначение Factory в том, чтобы создавать объекты. Этот шаблон реализуется в виде классов или
// в виде статических методов классов и преследует следующую цель:
// 
// ### Выполнение повторяющихся операций, необходимых при создании похожих объектов.
//     Фабрика используется вместо обычного наследования тогда, когда необходимо создавать именно
//     множество типов похожих объектов. 

class CarMaker {
    drive() {
      console.log(`Vroom, I have ${this.doors} doors`);
    }
    
    static factory(type) {
      let newCar;
      
      // Проверяем, существует ли конструктор
      if (typeof CarMaker[type] != 'function') {
        throw new Error(`constructor ${type} doesn\`t exist`);
      }
      
      // Определяем отношения наследования с предком, но только один раз
      if (typeof CarMaker[type].prototype.drive != 'function') {
        CarMaker[type].prototype = Object.create(CarMaker.prototype);
      }
      
      newCar = new CarMaker[type]();
      // Если нужно, можно вызвать методы у newCar
      return newCar;
    }
    
    static Compact() {
      this.doors = 4;
    }
    
    static Convertible() {
      this.doors = 2;
    }
    
    static SUV() {
      this.doors = 24;
    }
  }
  
  const corolla = CarMaker.factory('Compact');
  const solstice = CarMaker.factory('Convertible');
  const cherokee = CarMaker.factory('SUV');
  
  corolla.drive();
  solstice.drive();
  cherokee.drive();
  
  // Vroom, I have 4 doors
  // Vroom, I have 2 doors
  // Vroom, I have 24 doors
  
  