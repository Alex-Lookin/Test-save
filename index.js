// 1. Вывести сумму чисел от 1 до N +
// 2. Вывести факториал числа N +
// 3. Вывести четные и нечетные числа от 1 до 100 +
// 4. Вывести проверку на простое число
// 5. Вывести таблицу умножения для числа N +
// 6. Вывести сумму цифр числа N
// 7. Обратное число
// 8. Количество цифр в числе N
// 9. Проверка палиндрома для числа N
// 10. Сумма квадратов чисел от 1 до N

// 1. Вывести сумму чисел от 1 до N

// let number = 800;
// let summa = 0;
// for (let i = 1; i < number + 1; i++) {
//   summa += i;
// }
// console.log(summa);

// 2. Вывести факториал числа N

// let number = 5;
// let factorial = 1;
// for (let i = 1; i < number + 1; i++) {
//   factorial *= i;
// }
// console.log(factorial);

// 3. Вывести четные и нечетные числа от 1 до 100

// let maxnamber = 15;
// for(let i = 1; i < maxnamber + 1; i++){
//     if(i%2 == 0) {
//         console.log("Чётное число: " + i)
//     }
//     if(i%2!== 0) {
//         console.log("Нечётное число: " + i)
//     }
// }

// 5. Вывести таблицу умножения для числа N

// let multiplier = 5;
// for(let i = 0; i <11; i++){
//     console.log(multiplier + " x " + i + " = " + multiplier*i)
// }

 
// const userName = "";
// const secondname = "Lukin";

// function sayHi(userName) {
//     if(userName === ""){
//        return "Гость Привет!"
        
//     }else{
//        return userName
//     }    
// }
// console.log(sayHi(userName))


// Написать функцию, которая в качестве первого параметра будет принимать численное значение, 
// а в качестве второго параметра будет принимать степень, в которую надо возвести первый аргумент. 
// По умолчанию, второй аргумент единица.

// unction pow(number, stepen = 1){
//     return number ** stepen;
// }
// console.log(pow(3,2));
// console.log(pow(3));

// Напишите функцию которая будет выводить переданную строку в консоль n раз.

// const userLine = "Привет";
// const numberOf = "10";

// function numberOfline (userLine, numberOf) {
//     let c ="";
//     for (let i = 1; i <= numberOf;i++){
//         c = c + userLine
//     }
//     return c;
// }
// console.log (numberOfline(userLine, numberOf))

// 1. Вывести сумму чисел от 1 до N +

// function (howMany) {
//     let summa = 0;
//     for(let i=1; i<= howMany; i++){
//         summa = summa + i;
//     }
//     return summa;
// }
// console.log(summ1toN(10));

// Сделайте функцию, которая принимает параметром номер месяца, 
// и возвращает название этого месяца (Добавить обработку варинта если такого месяца нет)
const numbermonth = 1;

function howMonth (numbermonth){
    switch (month){
        case 1:
        console.log ('январь'); 
        break;
        case 2:
        console.log ('февраль'); 
        break;
        case 3:
        console.log ('март'); 
        break;
        case 4:
        console.log ('апрель'); 
        break;
        case 5:
        console.log ('май'); 
        break;
        case 6:
        console.log ('июнь'); 
        break;
        case 7:
        console.log ('июль'); 
        break;
        case 8:
        console.log ('июль'); 
        break;
    }
}
