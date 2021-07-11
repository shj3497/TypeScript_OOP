{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // public (default)
  // private (외부에서 접근 불가)
  // protected (외부에서 접근은 불가하지만, 상속받은 자식은 접근 가능)
  class CoffeeMaker{
    private constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    //? static 키워드를 붙여주게 되면 class level로 지정이 된다.
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    static makeMachine(coffeeBeans: number): CoffeeMaker{
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error('value for beans should be greater then 0');
      }
      this.coffeeBeans = this.coffeeBeans + beans;
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

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(20);
  console.log(maker);
  
}