{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: boolean;
  }

  interface CoffeeMaker{
    makeCoffee(shots: number): CoffeeCup;
  }

  
  class CoffeeMachine implements CoffeeMaker{
    //? CoffeeMachine에 milk, sugar라는 인터페이스를 가져와서 사용해 주었다. 
    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ){
      this.coffeeBeans = coffeeBeans;
    }

    
    private static BEANS_GRAMM_PER_SHOT: number = 7; 
    private coffeeBeans: number = 0; 


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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother{
    makeMilk(cup: CoffeeCup): CoffeeCup
  }

  // 우유 거품기
  class CheapMilkSteamer implements MilkFrother{
    private steamMilk(): void{
      console.log('Steaming some milk... 🥛');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup{
      this.steamMilk();
      return{
        ...cup,
        hasMilk: true
      }
    }
  }

  class NoMilk implements MilkFrother{
    makeMilk(cup: CoffeeCup): CoffeeCup{
      return cup;
    }
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup
  }

  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy 🍭');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup{
      const sugar = this.getSugar();
      return{
        ...cup,
        sugar: sugar
      }
    }
  }

  class RealSugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar!!!');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup{
      const sugar = this.getSugar();
      return{
        ...cup,
        sugar: sugar
      }
    }
  }

  class NoSugar implements SugarProvider{
    addSugar(cup: CoffeeCup): CoffeeCup{
      return cup;
    }
  }
  
  const cheapMilkMaker = new CheapMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new CandySugarMixer();
  const realSugar = new RealSugarMixer();
  const noSugar = new NoSugar();

  const sweetCoffeeMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetRealSugarCoffeeMachine = new CoffeeMachine(12, noMilk, realSugar);

  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, realSugar);

  
}