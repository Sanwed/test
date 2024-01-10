function serialize(arr) {
  return arr.map((num) => String.fromCharCode(num)).join('');
}

function deserialize(str) {
  return str.split('').map((el) => el.charCodeAt(0));
}

// Тесты
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const inputs = [
  [1, 2, 3, 4, 5],                                                          // Простейший случай
  Array.from({length: 50}, () => getRandomInt(1, 300)),      // Случайные 50 чисел
  Array.from({length: 100}, () => getRandomInt(1, 300)),     // Случайные 100 чисел
  Array.from({length: 500}, () => getRandomInt(1, 300)),     // Случайные 500 чисел
  Array.from({length: 1000}, () => getRandomInt(1, 300)),    // Случайные 1000 чисел
  Array.from({length: 10}, (e, index) => index + 1),         // Все числа 1 знака
  Array.from({length: 90}, (e, index) => index + 10),        // Все числа из 2х знаков
  Array.from({length: 900}, (e, index) => index % 300 + 1),  // Каждого числа по 3 - всего чисел 900
];

inputs.forEach((input) => {
  const originalStr = JSON.stringify(input);
  const serializedStr = serialize(input);
  const deserializedArr = deserialize(serializedStr);
  const compressionRatio = serializedStr.length / originalStr.length;
  
  console.log('Оригинальная строка:', originalStr);
  console.log('Сериализованная строка:', serializedStr);
  console.log('Десериализованная строка:', JSON.stringify(deserializedArr));
  console.log('Compression Ratio:', compressionRatio.toFixed(2));
});