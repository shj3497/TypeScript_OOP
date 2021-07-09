{
  // JavaScript
  // function jsAdd(num1, num2){
  //   return num1 + num2;
  // }

  // TypeScript
  function tsAdd(num1: number, num2: number): number{
    return num1 + num2;
  }

  
  // JavaScript
  // function jsFetchNum(id){
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   })
  // }

  // TypeScript
  function tsFetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    })
  }


  // JavaScript => TypeScript

  // ✨Optional parameter✨
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName('HyeokJin', 'shim');
  printName('HyeokJin') // HyeokJin, undefined

  // ✨Default parameter✨
  // 파라미터값을 전달하지 않으면 출력될 message를 지정해준다.
  function printMessage(message: string = 'default message'){
    console.log(message);
  }
  printMessage('hi'); // hi
  printMessage(); // default message

  // Rest parameter
  function addNumbers(...numbers: number[]): number{
    // let result: number = 0;
    // numbers.map(num => result = result + num);
    // return result;
    return numbers.reduce((a,b) => a + b);
  }
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3));
}