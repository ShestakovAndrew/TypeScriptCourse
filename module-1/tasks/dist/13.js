// Доработать таблицы истинности. Сделать вывод через for. Не использовать массивы!!!
console.log("a\tb\ta&&b\ta||b\t!a");
for (var i = 0; i != 4; i++) {
    var a = i === 2 || i === 3;
    var b = i === 1 || i === 3;
    console.log(a + "\t" + b + "\t" + (a && b) + "\t" + (a || b) + "\t" + !a);
}