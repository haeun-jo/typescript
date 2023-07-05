{
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Javascript => TypeScript
  // Optional Parameter
  function printName(firstName: string, lastName?: string) {
    // 파라미터를 하나만 넣어줘도, undefined 값을 넣어줘도 상관없음
    // function printName(firstName: string, lastName: string | undefined) { // 파라미터는 무조건 두개를 넣어줘야 함
    console.log(firstName);
    console.log(lastName);
    ``;
  }
  printName("Jo", "HaEun");
  printName("jane");
  printName("good", undefined);

  // Default Parameter
  // optional param은 전달하지 않으면 undefined이 할당되지만 default param은 default 값이 할당됨
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest Parameter
  function addNumbers(...rest: number[]): number {
    return rest.reduce((a, c) => a + c);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 0, 5));
}
