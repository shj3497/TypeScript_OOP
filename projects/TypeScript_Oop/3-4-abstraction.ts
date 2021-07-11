{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker{
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker{
    fillCoffeeBeans(beans: number): void;
    makeCoffee(shots: number): CoffeeCup;
    clean(): void;
  }


  //! Java에서 class에는 Impl로 구분해 주었다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
    private constructor(coffeeBeans: number){
      this.coffeeBeans = coffeeBeans;
    }

    //? static 키워드를 붙여주게 되면 class level로 지정이 된다.
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    static makeMachine(coffeeBeans: number): CoffeeMachine{
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number){
      if(beans < 0){
        throw new Error('value for beans should be greater then 0');
      }
      this.coffeeBeans = this.coffeeBeans + beans;
    }

    clean(){
      console.log('cleaning the machine... 🧼')
    }



    private grindBeans(shots: number){
      console.log(`grinding beans for ${shots}`);
      if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans  = this.coffeeBeans - shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void{
      console.log(`heating up... 🔥`);
    }

    private extract(shots: number): CoffeeCup{
      console.log(`Pulling ${shots} shots...`);
      return{
        shots: shots,
        hasMilk: false
      }
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }



  const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(20);
  console.log(maker);
  console.log(maker.makeCoffee(2));

  const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32);
  //! CoffeeMaker 인터페이스에는 makeCoffee()만 있으므로 fillCoffeeBeans()함수는 사용할 수 없다.
  // maker2.fillCoffeeBeans(20); 
  console.log(maker2);
  console.log(maker2.makeCoffee(2));

  const maker3:CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  maker3.fillCoffeeBeans(20);
  console.log(maker3);
  console.log(maker3.makeCoffee(2));



  class AmateurUser {
    constructor(private machine: CoffeeMaker){}
    makeCoffee(){
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker){}
    makeCoffee(){
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker4: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur: AmateurUser = new AmateurUser(maker4);
  const pro: ProBarista = new ProBarista(maker4);
  amateur.makeCoffee();
  console.log('\n')
  pro.makeCoffee();
}