// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде 
// «Ключ — Х, значение — Y».

let map = new Map();

map.set('Гендальф', 'Серый');
map.set('Пендальф', 'true');
map.set('Артур1987', '36');

for (let [key, value] of map) {
  console.log(`Ключ - ${key}, значение - ${value}`);
}
