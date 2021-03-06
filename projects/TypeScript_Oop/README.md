# TypeScript_Oop

## What is OOP?

OOP : Object Oriented Programing

<br/>

## 객체지향 프로그래밍 VS 절차지향 프로그래밍

### `Object Oriented Programing`

객체지향 프로그래밍

프로그램을 객체로 정의해서 객체들끼리 서로 의사소통 하도록 디자인하고 코딩하는것을 말한다.  
서로 관련있는 데이터와 함수를 여러가지 오브젝트로 정의해서 프로그래밍 해나가는것

> 장점 : 유지보수 우수, 확장성 높음, 재사용성 높음

<br/>

### `Imperative and Procedural Programing`

절차지향 프로그래밍

정의된 순서대로 절차적으로 함수가 하나씩 호출하는 것들을 절차지향적 프로그래밍이라한다.

> 특징  
> 프로젝트 중간에 투입이 되었다면 함수가 여러가지가 얽혀있고, 데이터도 다른곳에서 업데이트가 될 수 있기 때문에 하나를 수정하기 위해서는 전체적인 어플리케이션이 어떻게 동작하는지를 잘 이해해야한다.  
> 하나를 수정했을 때 다른 사이드 이펙트가 발생할 확률이 매우 높다.

> 단점 : 유지보수 힘듬, 확장성 낮음

<br/>

## OOP의 특징

### `1. Encapsulation : 캡슐화`

데이터와 함수를 한 오브젝트 안에 담아 두고, 외부에서 보일 필요가 없는 데이터를 잘 숨겨 놓음으로써 캡슐화를 할 수 있다.

### `2. Abstraction : 추상화`

외부에서는 내부에서 어떻게 구현되어져 있는지, 얼마나 복잡한지 이런 것들을 신경 쓰지 않고 지정된 외부에서만 보이는 인터페이스 함수를 이용해 오브젝트를 사용 할 수 있다.

### `3. Inheritance : 상속`

부모클래스로부터 받은 함수를 자식클래스가 사용할 수 있다.

### `4. Polymorphism : 다형성`

같은 함수가 있다고 할 경우, 그 함수가 매개변수에 따라 다른 역할을 할 수도 있다.

<br/>

## 파일 구분

### [`3-1-without-oop.ts`](./3-1-without-oop.ts)

객체지향이 적용되지 않은 모습

### [`3-2-class.ts`](./3-2-class.ts)

static 키워드의 의미

### [`3-3-encapsulation.ts`](./3-3-encapsulation.ts)

public, private, protected의 의미  
getter, setter의 의미

### [`3-4-abstraction.ts`](./3-4-abstraction.ts)

추상화, 인터페이스를 사용

### [`3-5-inheritance.ts`](./3-5-inheritance.ts)

상속  
부모클래스로부터 상속받은 변수나 함수를 사용할 때 super를 사용한다.

### [`3-6-polymorphism.ts`](./3-6-polymorphism.ts)

다형성

### [`3-7-composition.ts`](./3-7-composition.ts)

클래스를 상속해서 여러개의 클래스가 생성된 코드

### [`3-8-final_document.ts`](./3-8-final_document.ts)

3-7-composition.ts에서 클래스 상속이 아닌 컴포지션만 사용해서 코드를 정리했다.

### [`3-9-abstract.ts`](./3-9-abstract.ts)

3-6-polymorphism.ts에서 추상클래스로 전환  
CoffeeMachine을 추상클래스로 변환해주었다.  
추상클래스에 있는 추상함수는 추상클래스를 상속받는 클래스에서 구현부를 작성하여 사용해야한다.
