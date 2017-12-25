// Итератор применяется когда необходимо итерировать объект, содержащий данные.
// Данные в объекте могут хранить в виде сложной структуры, а Шаблон должен
// абстрагировать доступ к этим данным с помощью удобных методов: next(), hasNext(),
// rewind() и current(). Метод next() должен вернуть следующий элемент, и только нам
// решать что значит "следующий".

// В примере ниже в качестве данных мы имеем массив. next() возвращает каждый второй
// элемент массива.

var agg = (function () {
  let index = 0;
  let data = [1, 2, 3, 4, 5];

  return {
    next() {
      if (!this.hasNext()) {
        return false;
      }

      let element = data[index];
      index = index + 2;
      return element;
    },

    hasNext() {
      return index < data.length;
    },

    rewind() {
      index = 0;
    },

    current() {
      return data[index];
    }
  };
}());

while (agg.hasNext()) {
  console.log(agg.next());
}

agg.rewind();
console.log(agg.current());