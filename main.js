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


// let price = Number(prompt('what is the purchase price'));



// if (300 > price && price> 200) {
//     console.log(`u have discount 3%, u must pay only ${price-((price*3)/100)}`);
// } else if (500 > price && price > 300) {
//     console.log(`u have discount 5%, u must pay only ${price-((price*5)/100)}`);
// } else if (price >= 700) {
//     console.log(`u have discount 7%, u must pay only ${price-((price*7)/100)}`);
// } else {
//     console.log(`no discount u must pay ${price}`);
// }


// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
// Loop the display of days of the week as follows: “Day of the week. Do you want to see the next day?” and so on until the user clicks OK.

// let chois = confirm('do u wanna to see day of week?');
// let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let q = 0;

// while (chois && q < daysOfWeek.length) {
//     console.log(daysOfWeek[q]);
//     q++;
//     chois = confirm('Do you want to see the next day of the week?');
// };







// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл,
// записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. 
// Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
// І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").
// “Guess the number” game. Ask the user to guess a number from 0 to 100 and guess it in the following way: divide the range of numbers in half each iteration of the loop,
// write the result to N and ask the user “Is your number > N, <N or == N?”. Depending on the user's answer, reduce the range. 
// The initial range is from 0 to 100, divide it in half and get 50. If the user said their number is > 50, then change the range to 50 to 100. 
// And so on until the user selects == N (it will be useful to read about the algorithm: “binary search”).

// let min = 0;
// let max = 100;
// let guess;
// let answer;

// alert("Think of a number from 0 to 100, and I'll guess it!");

// while (true) {
//   guess = Math.floor((min + max) / 2);
//   answer = prompt(`ur number > ${guess}, < ${guess} or == ${guess}?`);

//   if (answer === "==") {
//     alert(`I guessed it! Your number: ${guess}`);
//     break;
//   } else if (answer === ">") {
//     min = guess + 1;
//   } else if (answer === "<") {
//     max = guess - 1;
//   }
// }







// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене или в случае если ничего не введено – «Отменено».

// Write code that will ask for login with prompt.

// If the visitor enters “Admin”, prompt asks for password, if nothing is entered or Esc key is pressed - show “Canceled”, otherwise show “I don't know you”.

// Check the password like this:

// If the password “I'm in charge” is entered, display “Hello!”,
// Otherwise - “Invalid password”,
// If canceled or if nothing is entered - “Canceled”.


// let userLogin = prompt('what is ur login');

// if (userLogin == 'admin') {
//   let password = prompt('give me a pasword');

//   password == 1 ? console.log('hi! admin') :
//   password == (password == null || password == '') ? console.log('cancel') :
//   console.log('ur passwor is not a correct');

// } else if (userLogin == null || userLogin == '') {
//   console.log('cancel');
// } else {
//   console.log('i dont know u');
// }








// // Перепишите этот код используя операторы нулевого слияния и присваивания.
// // Rewrite this code using null merge and assignment operators.

// let num1 = 10;
// let num2 = 20;
// let result;

// if (result === null || result === undefined) {
//   if (num1 !== null && num1 !== undefined) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }


// result ??= num1;
// result ??= num2;

// // result ??= num1 ?? num2; такой же вариант но короче



// При помощи цикла for выведите чётные числа от 2 до 10.
// Use the for loop to print the even numbers from 2 to 10.

// for (let w = 0; w < 10; w++) {
//   if ((w % 2) == 0) {
//     console.log(w)
//   }
//   console.log('...')
// }



// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).
// Write a loop that prompts the visitor to enter a number greater than 100. If the visitor enters a different number, prompt him to enter it again, and so on.
// The loop should ask for a number until either the visitor enters a number greater than 100 or clicks Cancel (ESC).

// let numberUser;
// do {
//   numberUser = prompt('write number that more than 100');
// } while (Number(numberUser) <= 100 && numberUser !== null)


// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.
// Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.
// Напишите код, который выводит все простые числа из интервала от 2 до n.
// Для n = 10 результат должен быть 2,3,5,7.
// A natural number greater than 1 is called prime if it is not divisible by anything except itself and 1.
// In other words, n > 1 is prime if it is divisible by any number other than 1 and n has a remainder.
// For example, 5 is a prime number, it cannot be divided without remainder by 2, 3, and 4.
// Write a code that outputs all prime numbers from the interval from 2 to n.
// For n = 10, the result should be 2,3,5,7.


// let numberQ = Number(prompt('give me number range'));

// justNumber:
// for (let i = 2; i < numberQ; i++ ) {
  
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0){
//       continue justNumber;
//     };
//   }
//   console.log(i)
// }




// Напишите if..else, соответствующий следующему switch:
// Write the if..else corresponding to the following switch:
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// let browser;
// if (browser === 'Edge') {
//   alert( "You've got the Edge!" );
// } else if (browser === 'Safari' 
//   || 'Firefox'
//   || 'Chrome'
//   || 'Opera') {
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }








// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// The following function returns true if the age parameter is greater than 18.
// Otherwise, it asks a confirm question and returns the result.
// Rewrite the function to do the same thing, but without if, in one line.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   return (age > 18 ? true : confirm('Родители разрешили?'));
// };
// with using ?

// function checkAge(age) {
//   return (age > 18) || (confirm('Did ur parents say its okay?'));
// };
// with using ||







// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// Write a function min(a,b) that returns the smaller of the numbers a and b.
// Example calls:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function getMin (a, b) {
//   if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }
// console.log(getMin(-3, 12));





// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).



// function getDegree (x, n) {
//   x = +prompt('give me any number');
//   n = +prompt('give me degree');

//   if (!Number.isInteger(n)) {
//     return console.log('degree cant be fraction');

//   } else {
//     return console.log(x**n)
//   }
// }

// getDegree()