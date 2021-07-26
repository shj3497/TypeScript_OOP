{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log(`full time!!`);
    }
    workFullTime() {

    }
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time!!`);
    }
    workPartTime() {

    }
  }

  //* 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥이다!
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  //? generic이라서 다 되긴하는데 Employee를 확장한 애들만 된다.
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee
  }

  const hyeokjin = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  hyeokjin.workFullTime();
  bob.workPartTime();

  const hyeokjinAfterPay1 = payBad(hyeokjin);
  const bobAfterPay1 = payBad(bob);
  //! hyeokjinAfterPay.workFullTime(); 접근이 불가능하다.
  //? 이유: pay()라는 함수를 거치면서 hyeokjin을 리턴해 줬지만 
  //? 더이상 클래스의 생성자가 아닌 interface Employee를 따른다.


  const hyeokjinAfterPay2 = pay(hyeokjin);
  const bobAfterPay2 = pay(bob);
  hyeokjinAfterPay2.workFullTime();


  //TODO 예제1
  const obj = {
    name: 'hyeokjin',
    age: 28
  }

  const obj2 = {
    animal: '🦔'
  }

  //TODO getValue를 이용해서 원하는 결과값을 출력하는 함수를 만들어보자
  console.log(getValue(obj, 'name')); // hyeokjin
  console.log(getValue(obj, 'age')); // 28
  console.log(getValue(obj2, 'animal')); // 🦔

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K]{
    return obj[key];
  }
}