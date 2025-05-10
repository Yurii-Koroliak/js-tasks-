//1) Ask for the user's name and print “Hello, *name*”;

// let username = prompt('what is ur name?');
// console.log('hello ' + username)




//2)Ask the user for his/her year of birth, calculate his/her age and print the result. Use the current year as a constant in the code;

// const year = 2025;
// let userBirthYear = prompt(`what is ur year of birth?`);
// let userAge = year - userBirthYear;
// console.log(userAge);



//3)Ask the user the length of a side of a square and print the perimeter of the square

// let sideLength = prompt('what is the length of a side of a square?');
// let squarePerimeter = sideLength * 4;
// console.log(squarePerimeter);









//1.Ask the user for the radius of a circle and print the area of such a circle.
// let circleRadius = Number(prompt('what is radius of the circle?'));
// let circlePerimetr = Number((Math.PI*(Math.pow(circleRadius, 2))).toFixed(2));
// console.log(circlePerimetr);
// Math.PI = число пи-----------------------------------------------------------------------------------------------------------------------------------------
// toFixed(2) = округляет до 2 знаков после запятой-----------------------------------------------------------------------------------------------------------
// Math.pow = возводит в степень------------------------------------------------------------------------------------------------------------------------------


//2.Ask the user for the distance in kilometers between two cities and how many hours they want to get there. Calculate the speed at which you need to move to be on time.
// let distance = prompt('what is the distance between the two cities');
// let hours = prompt('how many hours do you want to get there?');
// let result = distance/hours;
// console.log(result + 'km/h');











// it was tasks for the first lesson















// TASKS FOR THE SECOND LESSON


// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
// Add 0.1 and 0.2 to get a mathematically correct answer.

// let a = 0.1;
// let b = 0.2;
// console.log((a+b).toFixed(1));



// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
// Add the string “1” and the digit 2 (both operands must be in variables), get a mathematically correct answer.

// let c = '1';
// let d = 2;
// console.log(Number(c)+d);



// Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
// The user specifies the size of the flash drive in GB. The program should calculate how many files of size 820 MB can be placed on the flash drive.


// let sizeFlash = prompt('what is size of ur flash drive?');
// const sizeFile = 820;
// let quantityFiles = (sizeFlash%sizeFile)

// console.log(((sizeFlash/sizeFile).toFixed(0)) + ' files u can place on ur flash drive and ' + quantityFiles + 'MB left on the flash drive');







// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
// The user enters the amount of money in the wallet and the price of one chocolate bar. The program prints how many chocolates the user can buy and how much change he will have left.



// let money = Number(prompt('how much money do u have?'));
// let priceChocolate = Number(prompt('how much one chocolate bar?'));

// let quantityMoney = (money%priceChocolate);
// console.log(((money/priceChocolate).toFixed(0)) + ' chokolate bar u can buy and ' + quantityMoney + ' $ u still have ');





// Запитай у користувача тризначне число і виведи його задом наперед.
// Ask the user for a three-digit number and print it backwards.

// let number3digit = prompt(`give me three-digit number`);
// let numberReverse = String(number3digit % 10) + String(Math.floor((number3digit % 100) / 10)) + String(Math.floor(number3digit / 100));
// console.log(numberReverse);

// Math.floor - округляет число вниз --------------------------------------------------------------------------------------




// Користувач вводить суму вкладу в банк й на скільки місяців він хоче вкласти гроші, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
// The user enters the amount of a deposit in a bank for 2 months, with an interest rate of 5% per annum. Print the amount of accrued interest.


// let deposit = Number(prompt('how many money do u wanna give in our bank for 2 month?'));
// let term = Number(prompt('for how many months do you want to invest your money?'));
// const monthlyProcent = Number((5/12).toFixed(2));
// console.log(((deposit*(monthlyProcent*term))/100) + deposit);










// TASKS FOR THE THIRD LESSON



// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
// Ask the user for his age and determine whether he is a child (0-11), teenager (12-17), adult (18_59) or pensioner (60 ...), and allow for the possibility of entering incorrect data.



// let yearsOld = Number(prompt('How old are u?'));

// switch (true) {
//     case (yearsOld <= 11):
//         console.log('u are child');
//     break;
    
//     case (yearsOld <= 17):
//         console.log('u are teenager');
//     break;

//     case (yearsOld <= 59):
//         console.log('u are adult');
//     break;

//     case (yearsOld > 59):
//         console.log('u are pensia');
//     break;

//     default: 
//         console.log('u are chmo, write pls a correct number of ur years old');
// };







// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
// Ask the user for a number from 0 to 9 and display the special character that is located on this key (1 !, 2 @, 3 #, etc.).



// let userNumber = Number(prompt('give me a 1 number'));

// switch (userNumber) {
//     case 1:
//         console.log('!');
//     break;
//     case 2:
//         console.log('@');
//     break;
//     case 3:
//         console.log('#');
//     break;
//     case 4:
//         console.log('$');
//     break;
//     case 5:
//         console.log('%');
//     break;
//     case 6:
//         console.log('^');
//     break;
//     case 7:
//         console.log('&');
//     break;
//     case 8:
//         console.log('*');
//     break;
//     case 9:
//         console.log('(');
//     break;
//     case 0:
//         console.log(')');
//     break;

//     default: 
//     console.log('u are chmo, write pls only 1 and correct number');
// }






// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
// Calculate the sum of all numbers in the range specified by the user.

// let numberRangeStart = Number(prompt('Give me the first number of your range'));          
// let numberRangeEnd = Number(prompt('Give me the second number of your range'));           

// let numbersSum = 0; 
// let i;

// for (i = numberRangeStart; i <= numberRangeEnd; i++) {
//     numbersSum = numbersSum + i;
// };

// console.log("Сумма чисел от " + numberRangeStart + " до " + numberRangeEnd + " = " + numbersSum);





// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// Ask the user for 2 numbers and find the greatest common divisor.
// let numberOne = Number(prompt('write first number'));
// let numberTwo = Number(prompt('write second number'));
// let numberResult;

// for (let a = 1; a <= (Math.min(numberOne, numberTwo)); a++) {
//     if (numberOne % a === 0 && numberTwo % a === 0) {
//         numberResult = a;
//     }
// }
// console.log(numberResult);

// работает потому что нимбер резалт записывает в себя только последнее значение которое берет а-----------------------------------------------------------------------------
//numberOne % a === 0 && numberTwo % a ===0 ---------------------------------------------------------------------------------------------------------------------------------
// значит типо число1 остача с деления строго равно 0 А ТАК ЖЕ число2 остача с деления строго равна 0------------------------------------------------------------------------



// Запитай у користувача число і виведи всі дільники цього числа.
// Ask the user for a number and print all divisors of this number.

// let number = prompt('Введіть число:');

// console.log(`Дільники числа ${number}:`);
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }







// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

// Ask the user for the purchase amount and print the amount to be paid with a discount:
// from 200 to 300 - the discount will be 3%; 
// from 300 to 500 - 5%;
// from 500 and above - 7%.


let price = Number(prompt('what is the purchase price'));



if (300 > price && price> 200) {
    console.log(`u have discount 3%, u must pay only ${price-((price*3)/100)}`);
} else if (500 > price && price > 300) {
    console.log(`u have discount 5%, u must pay only ${price-((price*5)/100)}`);
} else if (price >= 700) {
    console.log(`u have discount 7%, u must pay only ${price-((price*7)/100)}`);
} else {
    console.log(`no discount u must pay ${price}`);
}