{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    sugar?: boolean;
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

  //? 기존의 makeCoffee() 부분을 밖으로 빼주었다.
  class CafeLatteMachine extends CoffeeMachine{
    constructor(
      coffeeBeans:number, 
      public readonly serialNumber: string, 
      //? 의존성 주입(DI)
      private milkFrother: MilkFrother
    ){
      super(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup{
      //? super : 부모의 makeCoffee()를 가져다 쓰겠다는 의미
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }
  
  //? 기존의 makeCoffee() 부분을 밖으로 빼주었다.
  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(coffeeBeans: number, private sugar: SugarProvider){
      super(coffeeBeans);
    };

    makeCoffee(shots: number): CoffeeCup{
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  //! 설탕도 들어가고 우유도 들어간 커피 
  class SweetCafeLatteMachine extends CoffeeMachine{
    constructor(
      coffeeBeans: number,
      //? 현재 SweatCafeLatteMachine은 CheapMilkSteamer와 CandySugarMixer 클래스 간에 커플링이 심하게 되어있다.
      //? 이는 좋지 않다. 클래스가 아닌 인터페이스로 적용해야한다.
      // private milk: CheapMilkSteamer, 
      // private sugar: CandySugarMixer
      private milk: MilkFrother, 
      private sugar: SugarProvider
    ){
      super(coffeeBeans);
    }

    makeCoffee(shots: number){
      const coffee = super.makeCoffee(shots);
      return this.milk.makeMilk(this.sugar.addSugar(coffee));
    }
  }


  //? 인터페이스는 클래스에서 가져다 쓸 때!
  //? 생성자는 클래스에서 만든다!!
  const cheapMilkMaker = new CheapMilkSteamer();
  const candySugar = new CandySugarMixer();
  const realSugar = new RealSugarMixer();

  const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetRealSugarMachine = new SweetCoffeeMaker(12, realSugar);
  
  const latteMachine = new CafeLatteMachine(12, 'SS', cheapMilkMaker);
  const sweetLatteMachine = new SweetCafeLatteMachine(12, cheapMilkMaker, candySugar)


}