{
  //! Type Inference
  
  // 따로 타입을 지정해 주지 않아도 자동으로 string으로 타입이 정해진다.
  let text = 'hello';
  text = 'hi!';
  // text = 1; 에러

  // 최대한 인자는 정확하게 어떤 타입의 데이터를 예상하고 있는지를 명시해서 작성하는것이 좋다.
  function print(message: string = 'hello'){
    console.log(message);
  }
  print('hello');

  // 인자가 모두 number이고 리턴값이 x+y이므로 자동으로 add()라는 함수의 타입은 number로 추론된다.
  function add(x: number, y: number){
    return x+y;
  }
  // add()함수는 number라는 타입을 리턴하므로 
  // result라는 변수는 자동으로 number라는 타입을 가질것이라는 추론의 추론을 한다.
  const result = add(1, 2);
}