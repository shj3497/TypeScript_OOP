{
  //! Type Assertions : 타입 주장
  //? 알아두면 좋지만 조금 위험할 수 있다.
  //? 그렇게 썩 좋지는 않다.

  function jsStrFunc1(): any{
    return 'hello';
  }

  const result1 = jsStrFunc1();
  //? (result1 as string) : 사용자가 result1은 string이라고 장담한다라는 의미
  // result1.len(gth) >> jsStrFunc()가 any타입이기 때문에 자동완성 기능을 지원 X
  console.log((result1 as string).length); // 5
  console.log((<string>result1).length);

  function jsStrFunc2(): any{
    return 22;
  }
  const result2 = jsStrFunc2();
  console.log((result2 as string).length); // undefined

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2); //? '!.' 또한 타입을 주장하는 것이다.

  // dom요소에서 선택자를 받아올 때 Element | null 이다.
  // 이때 뒤에 '!'를 붙이게 되면 무조건 Element라는 의미이다.
  const button = document.querySelector('class')!;
  
}