# TypeScript_Type

## 파일 구분

### [`1-1-basic.ts`](./1-1-basic.ts)

Primitive Type
<br/>

### [`1-2-function.ts`](./1-2-function.ts)

Optional parameter, Default parameter, Rest parameter
<br/>

### [`1-3-array.ts`](./1-3-array.ts)

Array Type, readonly 파라미터
<br/>

### [`1-4-alias.ts`](./1-4-alias.ts)

Alias, type이 아닌 문자열로 alias도 가능
<br/>

### [`1-5-union.ts`](./1-5-union.ts)

Union Type: OR
<br/>

### [`1-6-discriminated.ts`](./1-6-discriminated.ts)

Discriminated Union  
Union type을 사용 할 때 어떤 케이스든 공통적인 프로퍼티를 가지고 있음으로서 구분하기 쉽게 만든다.

### [`1-7-intersection.ts`](./1-7-intersection.ts)

Union type과는 반대로 &(and) 방식

### [`1-8-enum.ts`](./1-8-enum.ts)

enum은 Union type의 string literal로 대체해서 사용 가능하기 때문에 enum 사용을 자제한다.  
Union type이 더 안전!

### [`1-9-inference.ts`](./1-9-inference.ts)

Type 추론! 모든 변수나 함수에 타입을 정해주지 않아도 자동으로 타입이 추론되기도한다.  
하지만 타입을 정확하게 명시하는게 좋다고 생각한다.

### [`1-10-assertion.ts`](./1-10-assertion.ts)

Type 주장! 정말로 100% 확신하는 변수의 타입이 아니라면 사용 자제
