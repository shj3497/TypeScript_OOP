{
  //! 숫자만 판단할 수 있다.
  function checkNotNullBad(arg: number | null): number{
    if(arg == null){
      throw new Error('Not valid number!');
    }
    return arg;
  }

  const result = checkNotNullBad(123);
  console.log(result);

  //! 타입이 보장되지 않는다. any는 나쁜것!
  function checkNotNullBad2(arg: any | null): any{
    if(arg == null){
      throw new Error('Not valid number!');
    }
    return arg;
  }

  const result2 = checkNotNullBad2(null);
  console.log(result2);

  //? 제네릭 함수! 이 함수는 T또는 null이라는 타입을 받고, T를 다시 리턴하는구나 라고 생각할 수 있다.
  function checkNotNull<T>(arg: T | null): T{
    if(arg == null){
      throw new Error('Not valid number!');
    }
    return arg;
  }
  const result3 = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}