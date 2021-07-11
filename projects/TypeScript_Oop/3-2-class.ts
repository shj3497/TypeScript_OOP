{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  class CoffeeMaker{
    constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    //? static 키워드를 붙여주게 되면 class level로 지정이 된다.
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    coffeeBeans: number = 0; // instance (object) level

    static makeMachine(coffeeBeans: number): CoffeeMaker{
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans  = this.coffeeBeans - shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return{
        shots: shots,
        hasMilk: false
      }
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker); 
  //? BEANS_GRAMM_PER_SHOT에 static을 붙여주지 않았을 경우
  // CoffeeMaker { BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 32 }
  //? static키워드를 붙여 주었을 경우
  // CoffeeMaker { coffeeBeans: 32 }
  console.log(maker.makeCoffee(2));
  
  const maker2 = CoffeeMaker.makeMachine(30);
  console.log(maker2); // CoffeeMaker { coffeeBeans: 30 }
}