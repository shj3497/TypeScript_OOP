{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  interface CoffeeMaker{
    makeCoffee(shots: number): CoffeeCup;
  }

  //! Java에서 class에는 Impl로 구분해 주었다.
  class CoffeeMachine implements CoffeeMaker{
    // CafeLatteMachine이라는 클래스가 상속받아야 하므로 private -> protected 로 변환
    constructor(coffeeBeans: number){
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

  class CafeLatteMachine extends CoffeeMachine{
    constructor(coffeeBeans:number, public serialNumber: string){
      super(coffeeBeans);
    }

    private steamMilk(): void{
      console.log('Steaming some milk... 🥛');
    }

    makeCoffee(shots: number): CoffeeCup{
      //? super : 부모의 makeCoffee()를 가져다 쓰겠다는 의미
      const coffee = super.makeCoffee(shots);
      this.steamMilk()
      return{
        ...coffee,
        hasMilk: true
      }
    }
  }

  const machine = new CoffeeMachine(20)
  const latteMachine:CafeLatteMachine = new CafeLatteMachine(30, 'SSSS');
  // console.log(machine);
  // console.log(latteMachine);
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  // grinding beans for 1
  // heating up... 🔥
  // Pulling 1 shots...
  // Steaming some milk... 🥛  //! >> return이 먼저고, this.steamMilk()가 나중?
  // { shots: 1, hasMilk: true }
  console.log(latteMachine.serialNumber); // SSSS


}