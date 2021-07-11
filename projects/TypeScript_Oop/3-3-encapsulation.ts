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
  

  class User1{    
    private firstName: string;
    private lastName: string;
    get fullName(): string {
      return `${this.lastName} ${this.firstName}`;
    }

    constructor(firstName: string, lastName: string){
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }


  //? User1 === User2
  class User2{    
    get fullName(): string {
      return `${this.lastName} ${this.firstName}`;
    }
  
    private internalAge: number = 0;
    get age(): number{
      return this.internalAge;
    }
    set age(num: number){
      if(num < 0){
        throw new Error('나이는 음수가 될 수 없어!');
      }
      this.internalAge = num;
    }

    //! constructor()안에서 private를 선언해 사용해 줌으로서 class내부에서 변수선언을 할 필요가 없다.
    constructor(private firstName: string, private lastName: string){}

  }

  const user = new User2('HyoekJin', 'Shim');
  console.log(user.fullName);
  // user.lastName = 'Kim'
  console.log(user.fullName);
  user.age = 28;
  console.log(user);

}