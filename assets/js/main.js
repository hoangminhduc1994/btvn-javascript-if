// Bai 1

function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz");
    } else if (number % 3 === 0) {
        console.log("Fizz");
    } else if (number % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
}
var number = 15;
fizzbuzz(number);

// Bai 2

// function giaiPhuongTrinhBacNhat(a, b) {
//     if (a === 0) {
//         if (b === 0) {
//             console.log("Phương trình vô số nghiệm");
//         } else {
//             console.log("Phương trình vô nghiệm");
//         }
//     } else {
//         var x = -b / a;
//         console.log("Nghiệm của phương trình là:", x);
//     }
// }
// let a = (2);
// let b = (9);
// giaiPhuongTrinhBacNhat(a,b);

// Bai 3

function solveQuadraticEquation(a, b, c) {
    
    let delta = b * b - 4 * a * c;
    let result = [];
    if (a === 0){
        if(b === 0){
            if(c === 0){
                return("Phương trình vô số nghiệm");
            }
            else {
                return("Phương trình vô nghiệm");
            }
        }
        else{
            let x = -b / a;
            return("Nghiệm của phương trình là:", x);
        }
    }
    else{
        if(delta > 0){
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            result.push(x1, x2);
            return("Phương trình có hai nghiệm phân biệt: x1 = " + x1 + ", x2 = " + x2);
        }
        else if(delta === 0) {
            let x = -b / (2 * a);
            result.push(x);
            return ("Phương trình có một nghiệm kép: x = " + x);
        }
        else {
            return ("Phương trình không có nghiệm thực");
        }
    }    
}

let a = 5;
let b = 6;
let c = 1;
console.log(solveQuadraticEquation(a, b, c)); 
solveQuadraticEquation(a, b, c);

// Bai 4

function tinhBMI(canNang, chieuCao){
    let bmi = canNang / (chieuCao * chieuCao);
    bmi = bmi.toFixed(2);
    return bmi;
}
let canNang = (60);
let chieuCao =(1.65);
let bmi = tinhBMI(canNang, chieuCao);
console.log("Chỉ số BMI của bạn là: " + bmi);