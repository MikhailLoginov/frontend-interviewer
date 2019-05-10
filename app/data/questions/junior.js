export default [
  {
    question: 'Перечислите все типы данных в JavaScript',
    answer: 'Boolean, Number, String, Symbol, BigInt, null, undefined, Object',
  },
  {
    question:
      'В чём разница в объявлении переменной через ключевое слово var от объявления через ключевое слово let?',
    answer:
      'let имеет блочную область видимости; не имеет всплытия, то есть видна только после объявления; let нельзя переопределять внутри одного блока; при использовании в цикле, для каждой итерации создаётся собственная переменная',
  },
  {
    question:
      'Перечислите все способы объявления функции в JavaScript. Чем способы объявления отличаются друг от друга?',
    answer:
      'Декларативное объявление function foo() {}. На этот тип функции действует всплытие (hoisting). Функциональное выражение const foo = function() {}, всплытие не действует. Объявление через ключевое слово new: const foo = new Function(). Стрелочная функция const foo = () => {}. Если использовать без фигурных скобок, то возвращает то, что указано в теле. Не имеет своих this и arguments. Не может быть использована как конструктор с помощью new. Также функции могут быть анонимными: function() {} или () => {}',
  },
];