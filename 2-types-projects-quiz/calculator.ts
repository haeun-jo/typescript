/**
 * Let's make a calculator 🧮
 */

type Method = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(method: Method, num1: number, num2: number): number {
  const calculate = {
    add: num1 + num2,
    substract: num1 - num2,
    multiply: num1 * num2,
    divide: num1 / num2,
    remainder: num1 % num2,
  };
  return calculate[method];
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
