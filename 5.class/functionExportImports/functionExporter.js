//bunu yapmanin ikinci metodu
//function addTwo(number1, number2) {
//     return number1 + number2;
// }
//  export var addTwo()

const subTwo = function (number1, number2) {
    return number1 - number2;
}

const divTwo = function (number1, number2) {
    return number1 / number2;
}

const mulTwo = function (number1, number2) {
    return number1 * number2;
}

const PI = 3.14

// module.exports = {subTwo: subTwo, mulTwo: mulTwo, divTwo, PI}
module.exports = {subTwo, divTwo, mulTwo, PI}


//Ikinci metod, belki ileride
// class TestClass
// {
//     Function1() {
//         return "Function1";
//     }
//     Function2() {
//         return "Function2";
//     }
// }


// console.log("Now we have our module where we exported multiple values, to import them")
//
// //name exports allow us to make functions where we can export multiple named values (function, obj, class or var)
// console.log("=================== name exports and imports ===========================")
// console.log("name exports allow us to make functions where we can export multiple named values (function, obj, class or var)")
//
// //named imports allows us to import those values from madule themself
// console.log("named imports allows us to import those values from madule themself")
//
// console.log("=================== example ===========================")
//


//function times(a, b) {
//   return a * b;
// }
// export function square(x) {
//   return times(x, x);
// }