{
  
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigInt, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 6;

  // string
  const str: string = 'hello';

  // boolean
  const bool:boolean = false;

  // null
  let person: null;
  person = null;
  let person2: string | null;
  person2 = 'Shim';

  // undefined
  // X : name의 type이 undefined라고 하는것이므로 변수를 저장할 수 없게된다.
  let name: undefined;

  let age: number | undefined
  age = undefined;
  age = 1;

  function find(): number | undefined{
    return undefined;
  }

  // unknown : 가능하면 쓰지 않는게 좋다.
  // 어떤 타입이 들어올지 모를 때 쓴다.
  let notSure: unknown;
  notSure = 0;
  notSure = '0';
  notSure = true;

  // any : 가능하면 쓰지 않는게 좋다.
  // 어떤 타입이 들어오든 상관이 없다.
  let anything: any;
  anything = 0;
  anything = 'hello';
  anything = true;

  // void
  function print(): void {
    console.log('hello');
  }

  // never
  // 리턴하지 않는 함수에 쓴다.
  function throwError(message: string):never {
    // message -> server(log)
    throw new Error(message);
    while(true){}
  }

  // object : 가능하면 쓰지 않는게 좋다.
  // object는 너무 광범위 하다.
  // 어떤 타입인지 조금 더 명시해서 작성하는게 좋다.
  let obj: object;
  function acceptSomeObject(obj: object){

  }
  acceptSomeObject({name: 'hyeokjin'});
  acceptSomeObject([1,2,3])
}